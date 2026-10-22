Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
Write-Output "Image size: $($img.Width) x $($img.Height)"
$img.Dispose()
