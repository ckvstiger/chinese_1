Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $rect, $outputPath) {
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

$assetsDir = Join-Path (Get-Location) "assets"
if (!(Test-Path $assetsDir)) { New-Item -ItemType Directory -Path $assetsDir }

# 1. 字音第5題
Crop-Image "p1_upright.jpg" @{X=40; Y=200; Width=430; Height=70} "assets/clip_ziyin_q5.jpg"

# 2. 配合題表格與題目
Crop-Image "p1_upright.jpg" @{X=30; Y=310; Width=1020; Height=240} "assets/clip_peihe_all.jpg"

# 3. 翻譯題
Crop-Image "p1_upright.jpg" @{X=30; Y=680; Width=1020; Height=210} "assets/clip_translation.jpg"

# 4. 綜合測驗答案卡總覽
Crop-Image "p1_upright.jpg" @{X=30; Y=890; Width=1020; Height=180} "assets/clip_s4_grid.jpg"

# 5. 綜合測驗各題裁剪
# Q1
Crop-Image "p1_upright.jpg" @{X=30; Y=1060; Width=1020; Height=75} "assets/clip_q1.jpg"
# Q3
Crop-Image "p1_upright.jpg" @{X=30; Y=1220; Width=1020; Height=115} "assets/clip_q3.jpg"
# Q4
Crop-Image "p1_upright.jpg" @{X=30; Y=1330; Width=1020; Height=80} "assets/clip_q4_part1.jpg"
Crop-Image "p2_upright.jpg" @{X=30; Y=180; Width=1020; Height=60} "assets/clip_q4_part2.jpg"
# Q5
Crop-Image "p2_upright.jpg" @{X=30; Y=230; Width=1020; Height=80} "assets/clip_q5.jpg"
# Q7
Crop-Image "p2_upright.jpg" @{X=30; Y=380; Width=1020; Height=80} "assets/clip_q7.jpg"
# Q8
Crop-Image "p2_upright.jpg" @{X=30; Y=450; Width=1020; Height=90} "assets/clip_q8.jpg"
# Q9
Crop-Image "p2_upright.jpg" @{X=30; Y=530; Width=1020; Height=90} "assets/clip_q9.jpg"
# Q10
Crop-Image "p2_upright.jpg" @{X=30; Y=610; Width=1020; Height=140} "assets/clip_q10.jpg"
# Q12
Crop-Image "p2_upright.jpg" @{X=30; Y=790; Width=1020; Height=80} "assets/clip_q12.jpg"
# Q14
Crop-Image "p2_upright.jpg" @{X=30; Y=930; Width=1020; Height=95} "assets/clip_q14.jpg"
# Q16
Crop-Image "p2_upright.jpg" @{X=30; Y=1065; Width=1020; Height=90} "assets/clip_q16.jpg"
# Q17
Crop-Image "p2_upright.jpg" @{X=30; Y=1150; Width=1020; Height=80} "assets/clip_q17.jpg"
# Q18
Crop-Image "p2_upright.jpg" @{X=30; Y=1220; Width=1020; Height=90} "assets/clip_q18.jpg"
# Q19
Crop-Image "p2_upright.jpg" @{X=30; Y=1300; Width=1020; Height=90} "assets/clip_q19.jpg"
# Q20
Crop-Image "p2_upright.jpg" @{X=30; Y=1380; Width=1020; Height=90} "assets/clip_q20.jpg"

Write-Output "All asset clips created successfully!"
