Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile((Resolve-Path "p1.jpg"))
$img1.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone)
$img1.Save((Join-Path (Get-Location) "p1_upright.jpg"))
$img1.Dispose()

$img2 = [System.Drawing.Image]::FromFile((Resolve-Path "p2.jpg"))
$img2.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone)
$img2.Save((Join-Path (Get-Location) "p2_upright.jpg"))
$img2.Dispose()

Write-Output "Done"
