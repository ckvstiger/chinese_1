Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile((Resolve-Path 'p1_upright.jpg'))
$bmp = New-Object System.Drawing.Bitmap(650, 180)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Draw source image
$srcRect = New-Object System.Drawing.Rectangle(35, 185, 450, 130)
$destRect = New-Object System.Drawing.Rectangle(10, 15, 430, 150)
$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Green box around Question 1
$penGreen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(46, 125, 50), 3)
$g.DrawRectangle($penGreen, 12, 50, 320, 52)

# Red box around Question 5
$penRed = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(211, 47, 47), 3)
$g.DrawRectangle($penRed, 12, 104, 320, 56)

# Labels
$fontTitle = New-Object System.Drawing.Font('Microsoft JhengHei', 10, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Microsoft JhengHei', 9, [System.Drawing.FontStyle]::Regular)
$brushGreen = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(46, 125, 50))
$brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(211, 47, 47))
$brushGray = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 100, 100))

$g.DrawString('第 1 題：1.「晦」奧', $fontTitle, $brushGreen, 445, 50)
$g.DrawString('作答 ㄏㄨㄟˋ (答對 √)', $fontSub, $brushGray, 445, 72)

$g.DrawString('第 5 題：5.「齏」臼', $fontTitle, $brushRed, 445, 108)
$g.DrawString('作答 ㄙㄨˋ (扣2分 ❌ 訂正: ㄐㄧ)', $fontSub, $brushRed, 445, 130)

$bmp.Save((Join-Path (Get-Location) 'assets\clip_ziyin_q5.jpg'), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Save((Join-Path (Get-Location) 'assets\clip_ziyin_comparison.jpg'), [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output 'Success'