Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $rect, $outputPath) {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath))
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle($rect.X, $rect.Y, $rect.Width, $rect.Height)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) $outputPath), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
}

$img = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
$w = $img.Width
$h = $img.Height
$img.Dispose()
Write-Output "Image size: $w x $h"

# Crop sections of p1
# 1. Header & Section 1 (字音)
Crop-Image "p1_upright.jpg" @{X=0; Y=0; Width=$w; Height=[int]($h * 0.23)} "crop_p1_header_ziyin.jpg"
# 2. Section 2 (配合題)
Crop-Image "p1_upright.jpg" @{X=0; Y=[int]($h * 0.20); Width=$w; Height=[int]($h * 0.25)} "crop_p1_peihe.jpg"
# 3. Section 3 (翻譯)
Crop-Image "p1_upright.jpg" @{X=0; Y=[int]($h * 0.43); Width=$w; Height=[int]($h * 0.22)} "crop_p1_fanyi.jpg"
# 4. Section 4 Answer grid & Q1-4
Crop-Image "p1_upright.jpg" @{X=0; Y=[int]($h * 0.60); Width=$w; Height=[int]($h * 0.40)} "crop_p1_grid_q1_4.jpg"

# Crop sections of p2
$img2 = [System.Drawing.Image]::FromFile((Resolve-Path "p2_upright.jpg"))
$w2 = $img2.Width
$h2 = $img2.Height
$img2.Dispose()

# Q5-10
Crop-Image "p2_upright.jpg" @{X=0; Y=[int]($h2 * 0.08); Width=$w2; Height=[int]($h2 * 0.45)} "crop_p2_q5_10.jpg"
# Q11-20
Crop-Image "p2_upright.jpg" @{X=0; Y=[int]($h2 * 0.48); Width=$w2; Height=[int]($h2 * 0.52)} "crop_p2_q11_20.jpg"

Write-Output "Crops complete"
