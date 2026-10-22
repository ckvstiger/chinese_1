Add-Type -AssemblyName System.Drawing

function Zoom-Region($sourcePath, $rect, $outputPath) {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath))
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle($rect.X, $rect.Y, $rect.Width, $rect.Height)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) $outputPath), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
}

# 1. Peihe answer grid
Zoom-Region "p1_upright.jpg" @{X=100; Y=300; Width=800; Height=160} "zoom_peihe_grid.jpg"
# 2. Section 4 Answer grid
Zoom-Region "p1_upright.jpg" @{X=80; Y=890; Width=950; Height=180} "zoom_s4_grid.jpg"
# 3. Section 3 Translation full text
Zoom-Region "p1_upright.jpg" @{X=80; Y=680; Width=950; Height=220} "zoom_translation.jpg"
# 4. Total score region or any numbers on top
Zoom-Region "p1_upright.jpg" @{X=600; Y=20; Width=500; Height=200} "zoom_p1_top_score.jpg"
