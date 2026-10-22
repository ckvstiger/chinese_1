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

# p1 Q1-4
Zoom-Region "p1_upright.jpg" @{X=40; Y=1060; Width=1020; Height=380} "zoom_q1_4.jpg"

# p2 Q5-7
Zoom-Region "p2_upright.jpg" @{X=40; Y=180; Width=1020; Height=280} "zoom_q5_7.jpg"

# p2 Q8-10
Zoom-Region "p2_upright.jpg" @{X=40; Y=450; Width=1020; Height=300} "zoom_q8_10.jpg"

# p2 Q11-14
Zoom-Region "p2_upright.jpg" @{X=40; Y=740; Width=1020; Height=270} "zoom_q11_14.jpg"

# p2 Q15-17
Zoom-Region "p2_upright.jpg" @{X=40; Y=1000; Width=1020; Height=240} "zoom_q15_17.jpg"

# p2 Q18-20
Zoom-Region "p2_upright.jpg" @{X=40; Y=1230; Width=1020; Height=230} "zoom_q18_20.jpg"

Write-Output "Sliced all questions!"
