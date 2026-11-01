Add-Type -AssemblyName System.Drawing

function Create-MinimalArrow {
    param([string]$outPath, [int]$size = 24)

    $scale = $size / 24.0
    $bmp = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # Slim, sharp, minimalist geometric arrow (Figma / Linear / macOS style)
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pts = @(
        (New-Object System.Drawing.PointF (2.0 * $scale), (2.0 * $scale)),
        (New-Object System.Drawing.PointF (2.0 * $scale), (18.5 * $scale)),
        (New-Object System.Drawing.PointF (6.5 * $scale), (14.5 * $scale)),
        (New-Object System.Drawing.PointF (10.5 * $scale), (21.5 * $scale)),
        (New-Object System.Drawing.PointF (13.5 * $scale), (20.0 * $scale)),
        (New-Object System.Drawing.PointF (9.5 * $scale), (13.0 * $scale)),
        (New-Object System.Drawing.PointF (15.5 * $scale), (13.0 * $scale))
    )
    $path.AddPolygon($pts)

    # 1. Soft subtle drop shadow (1px offset)
    $sMatrix = New-Object System.Drawing.Drawing2D.Matrix
    $sMatrix.Translate(1.2 * $scale, 1.5 * $scale)
    $sPath = $path.Clone()
    $sPath.Transform($sMatrix)
    $sBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(80, 0, 0, 0))
    $g.FillPath($sBrush, $sPath)
    $sBrush.Dispose()
    $sPath.Dispose()
    $sMatrix.Dispose()

    # 2. Outer thin emerald glow / border (0.8px)
    $glowPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(180, 16, 185, 129)), (2.4 * $scale)
    $glowPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($glowPen, $path)
    $glowPen.Dispose()

    # 3. Clean white / light mint body fill
    $fillBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $g.FillPath($fillBrush, $path)
    $fillBrush.Dispose()

    # 4. Crisp thin dark border (#081C12)
    $borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 10, 28, 18)), (1.2 * $scale)
    $borderPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Miter
    $g.DrawPath($borderPen, $path)
    $borderPen.Dispose()

    # 5. Minimal emerald accent dot at tip
    $tipBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 16, 185, 129))
    $g.FillEllipse($tipBrush, [float](2.2 * $scale), [float](2.2 * $scale), [float](2.2 * $scale), [float](2.2 * $scale))
    $tipBrush.Dispose()

    $path.Dispose()
    $g.Dispose()

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created Minimal Arrow: $outPath ($size x $size)"
}

function Create-MinimalPointer {
    param([string]$outPath, [int]$size = 24)

    $scale = $size / 24.0
    $bmp = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # Sleek, clean minimalist pointing hand
    $hPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    
    # Index finger
    $hPath.AddArc([float](6.0 * $scale), [float](1.5 * $scale), [float](4.2 * $scale), [float](4.2 * $scale), 180.0, 180.0)
    $hPath.AddLine([float](10.2 * $scale), [float](3.6 * $scale), [float](10.2 * $scale), [float](11.0 * $scale))
    
    # Knuckles
    $hPath.AddArc([float](10.2 * $scale), [float](6.5 * $scale), [float](3.8 * $scale), [float](3.8 * $scale), 270.0, 90.0)
    $hPath.AddArc([float](13.0 * $scale), [float](8.0 * $scale), [float](3.6 * $scale), [float](3.6 * $scale), 270.0, 90.0)
    $hPath.AddArc([float](15.5 * $scale), [float](10.0 * $scale), [float](3.2 * $scale), [float](3.2 * $scale), 270.0, 90.0)
    
    # Palm
    $hPath.AddLine([float](18.5 * $scale), [float](13.0 * $scale), [float](17.0 * $scale), [float](20.5 * $scale))
    $hPath.AddArc([float](9.0 * $scale), [float](17.5 * $scale), [float](8.0 * $scale), [float](5.0 * $scale), 0.0, 180.0)
    
    # Thumb
    $hPath.AddLine([float](9.0 * $scale), [float](19.0 * $scale), [float](4.0 * $scale), [float](14.5 * $scale))
    $hPath.AddArc([float](2.5 * $scale), [float](11.0 * $scale), [float](4.2 * $scale), [float](4.2 * $scale), 90.0, 180.0)
    $hPath.AddLine([float](6.0 * $scale), [float](11.0 * $scale), [float](6.0 * $scale), [float](3.6 * $scale))
    $hPath.CloseFigure()

    # 1. Subtle shadow
    $sMatrix = New-Object System.Drawing.Drawing2D.Matrix
    $sMatrix.Translate(1.2 * $scale, 1.5 * $scale)
    $shPath = $hPath.Clone()
    $shPath.Transform($sMatrix)
    $sBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(70, 0, 0, 0))
    $g.FillPath($sBrush, $shPath)
    $sBrush.Dispose()
    $shPath.Dispose()
    $sMatrix.Dispose()

    # 2. Outer thin emerald glow
    $glowPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(180, 16, 185, 129)), (2.4 * $scale)
    $glowPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($glowPen, $hPath)
    $glowPen.Dispose()

    # 3. Clean white body fill
    $fillBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $g.FillPath($fillBrush, $hPath)
    $fillBrush.Dispose()

    # 4. Crisp dark border
    $borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 10, 28, 18)), (1.2 * $scale)
    $borderPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPath($borderPen, $hPath)
    $borderPen.Dispose()

    # 5. Emerald accent on fingertip
    $tipBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 16, 185, 129))
    $g.FillEllipse($tipBrush, [float](7.0 * $scale), [float](2.2 * $scale), [float](2.2 * $scale), [float](2.2 * $scale))
    $tipBrush.Dispose()

    $hPath.Dispose()
    $g.Dispose()

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created Minimal Pointer: $outPath ($size x $size)"
}

$publicDir = "c:\Users\A L F A\Desktop\my-portfolio\public"

# Generate 24x24 (compact, sleek) and 48x48 (Retina)
Create-MinimalArrow (Join-Path $publicDir "cursor.png") 24
Create-MinimalArrow (Join-Path $publicDir "cursor-2x.png") 48
Create-MinimalPointer (Join-Path $publicDir "cursor-pointer.png") 24
Create-MinimalPointer (Join-Path $publicDir "cursor-pointer-2x.png") 48
Create-MinimalPointer (Join-Path $publicDir "cursor-hand.png") 24
Create-MinimalPointer (Join-Path $publicDir "cursor-click.png") 24

Write-Host "All Minimalist Cursors generated successfully!"
