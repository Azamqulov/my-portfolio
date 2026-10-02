import { NextResponse } from "next/server";
import https from "node:https";

// Helper to escape special HTML characters for Telegram
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface TelegramResponse {
  ok: boolean;
  error_code?: number;
  description?: string;
  result?: unknown;
}

// Low-level HTTPS request forcing IPv4 for lightning-fast and reliable Telegram API calls
function postToTelegram(
  botToken: string,
  payload: Record<string, unknown>
): Promise<TelegramResponse> {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const agent = new https.Agent({ family: 4, keepAlive: false });

    const req = https.request(
      {
        hostname: "api.telegram.org",
        port: 443,
        path: `/bot${botToken}/sendMessage`,
        method: "POST",
        family: 4,
        agent,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body) as TelegramResponse);
          } catch {
            resolve({ ok: false, description: "Invalid response from Telegram" });
          }
        });
      }
    );

    const timer = setTimeout(() => {
      req.destroy();
      reject(new Error("Telegram request timed out"));
    }, 7000);

    req.on("response", () => {
      clearTimeout(timer);
    });

    req.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });

    req.write(data);
    req.end();
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Xabaringiz qabul qilindi.",
      });
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Ismingizni to'liq kiriting (kamida 2 ta belgi)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "To'g'ri email manzilini kiriting." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Xabar matnini kiriting (kamida 5 ta belgi)." },
        { status: 400 }
      );
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN ||
      "8903422918:AAGMPT3eeMgxh-yA421cvHMKxVkYyC-eA3o";
    const primaryChatId = process.env.TELEGRAM_CHAT_ID || "-4917241703";

    if (!botToken || !primaryChatId) {
      return NextResponse.json(
        { success: false, error: "Server sozlamalarida Telegram bot konfiguratsiyasi topilmadi." },
        { status: 500 }
      );
    }

    // Current Tashkent time
    const toshkentTime = new Intl.DateTimeFormat("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());

    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanMessage = escapeHtml(message.trim());

    const telegramText =
      `📬 <b>YANGI MUROJAAT — azamqulov.com</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 <b>Ism:</b> ${cleanName}\n` +
      `📧 <b>Email:</b> ${cleanEmail}\n` +
      `📅 <b>Vaqt:</b> ${toshkentTime} (Toshkent)\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💬 <b>Xabar matni:</b>\n` +
      `<blockquote>${cleanMessage}</blockquote>\n\n` +
      `🤖 <i>Yuboruvchi: @azamqulovService_bot portfolio tizimidan</i>`;

    // 1. Send to configured chat ID
    let tgResult = await postToTelegram(botToken, {
      chat_id: primaryChatId,
      text: telegramText,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });

    // 2. If chat not found, try supergroup prefix (-100...)
    if (
      !tgResult.ok &&
      primaryChatId.startsWith("-") &&
      !primaryChatId.startsWith("-100")
    ) {
      const supergroupId = `-100${primaryChatId.substring(1)}`;
      try {
        const retryResult = await postToTelegram(botToken, {
          chat_id: supergroupId,
          text: telegramText,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        });
        if (retryResult.ok) {
          tgResult = retryResult;
        }
      } catch {
        // Ignore fallback error
      }
    }

    if (!tgResult.ok) {
      console.warn("[Telegram Delivery Warning]:", tgResult);
      return NextResponse.json(
        {
          success: false,
          error:
            "Xabarni Telegram guruhiga yetkazib bo'lmadi. Iltimos @azamqulovService_bot botini Telegram guruhingizga qo'shib, admin ruxsatini bering.",
          details: tgResult.description,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Rahmat! Xabaringiz Telegram guruhiga yetkazildi. Tez orada siz bilan bog'lanaman.",
    });
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Serverda kutilmagan xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
      },
      { status: 500 }
    );
  }
}
