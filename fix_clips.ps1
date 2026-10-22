Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $rect, $outputPath) {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath))
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle($rect.X, $rect.Y, $rect.Width, $rect.Height)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $fullOut = Join-Path (Get-Location) $outputPath
    $bmp.Save($fullOut, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "Saved $outputPath"
}

# 1. 字音第1題與第5題標註對照圖
& "$PSScriptRoot\create_annotated_ziyin.ps1"

# 2. 配合題表格與大題
Crop-Image "p1_upright.jpg" @{X=30; Y=290; Width=1030; Height=260} "assets\clip_peihe_all.jpg"

# 3. 配合題各子題裁剪
Crop-Image "p1_upright.jpg" @{X=30; Y=385; Width=1030; Height=75} "assets\clip_peihe_part1.jpg"
Crop-Image "p1_upright.jpg" @{X=30; Y=460; Width=1030; Height=95} "assets\clip_peihe_part2.jpg"
Crop-Image "p1_upright.jpg" @{X=30; Y=550; Width=1030; Height=80} "assets\clip_peihe_part3.jpg"

# 4. 翻譯題
Crop-Image "p1_upright.jpg" @{X=30; Y=660; Width=1030; Height=235} "assets\clip_translation.jpg"

# 5. 綜合測驗答案卡
Crop-Image "p1_upright.jpg" @{X=30; Y=890; Width=1030; Height=180} "assets\clip_s4_grid.jpg"

# 6. 試卷個人資訊抬頭與分數
Crop-Image "p1_upright.jpg" @{X=30; Y=40; Width=1030; Height=160} "assets\clip_header_score.jpg"

# 7. Q4 組合圖 (把 part1 和 part2 合併成一張圖)
$p1 = [System.Drawing.Image]::FromFile((Resolve-Path "assets\clip_q4_part1.jpg"))
$p2 = [System.Drawing.Image]::FromFile((Resolve-Path "assets\clip_q4_part2.jpg"))
$combinedBmp = New-Object System.Drawing.Bitmap(1020, ($p1.Height + $p2.Height))
$g = [System.Drawing.Graphics]::FromImage($combinedBmp)
$g.DrawImage($p1, 0, 0)
$g.DrawImage($p2, 0, $p1.Height)
$combinedBmp.Save((Join-Path (Get-Location) "assets\clip_q4_combined.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$combinedBmp.Dispose()
$p1.Dispose()
$p2.Dispose()

Write-Output "Clips generated and combined!"
