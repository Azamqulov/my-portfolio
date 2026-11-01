Add-Type -AssemblyName System.Drawing

function Create-DefaultCursor {
    param([string]$outputPath, [int]$size = 32)
    
    $scale = $size / 32.0
    $bmp = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Shadow path (offset by 1.5px)
    $shadowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $sPoints = @(
        (New-Object System.Drawing.PointF (3 * $scale + 1.5), (3 * $scale + 2)),
        (New-Object System.Drawing.PointF (3 * $scale + 1.5), (25 * $scale + 2)),
        (New-Object System.Drawing.PointF (9 * $scale + 1.5), (20 * $scale + 2)),
        (New-Object System.Drawing.PointF (14 * $scale + 1.5), (28 * $scale + 2)),
        (New-Object System.Drawing.PointF (18 * $scale + 1.5), (26 * $scale + 2)),
        (New-Object System.Drawing.PointF (13 * $scale + 1.5), (18 * $scale + 2)),
        (New-Object System.Drawing.PointF (21 * $scale + 1.5), (18 * $scale + 2))
    )
    $shadowPath.AddPolygon($sPoints)
    $shadowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(90, 0, 0, 0))
    $g.FillPath($shadowBrush, $shadowPath)
    $shadowBrush.Dispose()
    $shadowPath.Dispose()

    # Outer Glow Path
    $glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gPoints = @(
        (New-Object System.Drawing.PointF (3 * $scale), (3 * $scale)),
        (New-Object System.Drawing.PointF (3 * $scale), (25 * $scale)),
        (New-Object System.Drawing.PointF (9 * $scale), (20 * $scale)),
        (New-Object System.Drawing.PointF (14 * $scale), (28 * $scale)),
        (New-Object System.Drawing.PointF (18 * $scale), (26 * $scale)),
        (New-Object System.Drawing.PointF (13 * $scale), (18 * $scale)),
        (New-Object System.Drawing.PointF (21 * $scale), (18 * $scale))
    )
    $glowPath.AddPolygon($gPoints)

    # Glow pen
    $glowPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 16, 185, 129)), (3.5 * $scale)
    $glowPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($glowPen, $glowPath)
    $glowPen.Dispose()

    # Main Body Gradient (Obsidian to Dark Forest Green)
    $bodyRect = New-Object System.Drawing.RectangleF (2 * $scale), (2 * $scale), (22 * $scale), (28 * $scale)
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $bodyRect, `
        ([System.Drawing.Color]::FromArgb(255, 10, 26, 18)), `
        ([System.Drawing.Color]::FromArgb(255, 4, 12, 8)), `
        45.0
    $g.FillPath($gradBrush, $glowPath)
    $gradBrush.Dispose()

    # Sharp Emerald Edge Border
    $edgePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 16, 185, 129)), (1.5 * $scale)
    $edgePen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($edgePen, $glowPath)
    $edgePen.Dispose()

    # Glowing Cyan/Emerald Accent Tip Dot
    $tipBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 52, 211, 153))
    $g.FillEllipse($tipBrush, [float](3.5 * $scale), [float](3.5 * $scale), [float](2.5 * $scale), [float](2.5 * $scale))
    $tipBrush.Dispose()

    # Inner high-tech accent line
    $innerPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(180, 52, 211, 153)), (1.0 * $scale)
    $g.DrawLine($innerPen, [float](6 * $scale), [float](7 * $scale), [float](6 * $scale), [float](18 * $scale))
    $innerPen.Dispose()

    $glowPath.Dispose()
    $g.Dispose()
    
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

function Create-PointerCursor {
    param([string]$outputPath, [int]$size = 32)
    
    $scale = $size / 32.0
    $bmp = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # 1. Pulsing ring / Interactive target indicator (top-right aura)
    $ringPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(220, 16, 185, 129)), (1.8 * $scale)
    $ringPen.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Solid
    $g.DrawEllipse($ringPen, [float](15 * $scale), [float](4 * $scale), [float](14 * $scale), [float](14 * $scale))
    $ringPen.Dispose()

    # Inner glowing dot inside ring
    $coreGlow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 16, 185, 129))
    $g.FillEllipse($coreGlow, [float](18 * $scale), [float](7 * $scale), [float](8 * $scale), [float](8 * $scale))
    $coreGlow.Dispose()

    $coreBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 52, 211, 153))
    $g.FillEllipse($coreBrush, [float](20.5 * $scale), [float](9.5 * $scale), [float](3 * $scale), [float](3 * $scale))
    $coreBrush.Dispose()

    # 2. Sleek pointer body (aerodynamic chevron pointer pointing at target)
    $pPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pPoints = @(
        (New-Object System.Drawing.PointF (4 * $scale), (4 * $scale)),
        (New-Object System.Drawing.PointF (4 * $scale), (24 * $scale)),
        (New-Object System.Drawing.PointF (9 * $scale), (19 * $scale)),
        (New-Object System.Drawing.PointF (13 * $scale), (27 * $scale)),
        (New-Object System.Drawing.PointF (17 * $scale), (25 * $scale)),
        (New-Object System.Drawing.PointF (13 * $scale), (17 * $scale)),
        (New-Object System.Drawing.PointF (20 * $scale), (16 * $scale))
    )
    $pPath.AddPolygon($pPoints)

    # Drop shadow
    $shadowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(90, 0, 0, 0))
    $shadowMatrix = New-Object System.Drawing.Drawing2D.Matrix
    $shadowMatrix.Translate(1.5, 2.0)
    $pPathShadow = $pPath.Clone()
    $pPathShadow.Transform($shadowMatrix)
    $g.FillPath($shadowBrush, $pPathShadow)
    $shadowBrush.Dispose()
    $pPathShadow.Dispose()
    $shadowMatrix.Dispose()

    # Outer glow
    $glowPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(140, 16, 185, 129)), (3.5 * $scale)
    $glowPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($glowPen, $pPath)
    $glowPen.Dispose()

    # Body Fill
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
        (New-Object System.Drawing.RectangleF (3 * $scale), (3 * $scale), (20 * $scale), (26 * $scale)), `
        ([System.Drawing.Color]::FromArgb(255, 16, 42, 28)), `
        ([System.Drawing.Color]::FromArgb(255, 6, 14, 10)), `
        45.0
    $g.FillPath($gradBrush, $pPath)
    $gradBrush.Dispose()

    # Sharp Emerald Border
    $edgePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 52, 211, 153)), (1.6 * $scale)
    $edgePen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($edgePen, $pPath)
    $edgePen.Dispose()

    # Highlight point
    $tipBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 167, 243, 208))
    $g.FillEllipse($tipBrush, [float](4.5 * $scale), [float](4.5 * $scale), [float](2.5 * $scale), [float](2.5 * $scale))
    $tipBrush.Dispose()

    $pPath.Dispose()
    $g.Dispose()
    
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$publicDir = "c:\Users\A L F A\Desktop\my-portfolio\public"
Create-DefaultCursor (Join-Path $publicDir "cursor.png") 32
Create-DefaultCursor (Join-Path $publicDir "cursor-2x.png") 64
Create-PointerCursor (Join-Path $publicDir "cursor-pointer.png") 32
Create-PointerCursor (Join-Path $publicDir "cursor-pointer-2x.png") 64
Write-Output "Cursors generated successfully in public directory!"
