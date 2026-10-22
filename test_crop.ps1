Add-Type -AssemblyName System.Drawing

try {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
    $bmp = New-Object System.Drawing.Bitmap(420, 75)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle(40, 195, 420, 75)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, 420, 75)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) "assets\clip_ziyin_q5.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "Success for ziyin_q5"
} catch {
    Write-Output "Error: $_"
}

try {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
    $bmp = New-Object System.Drawing.Bitmap(1030, 235)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle(30, 660, 1030, 235)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, 1030, 235)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) "assets\clip_translation.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "Success for translation"
} catch {
    Write-Output "Error: $_"
}

try {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
    $bmp = New-Object System.Drawing.Bitmap(1030, 180)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle(30, 890, 1030, 180)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, 1030, 180)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) "assets\clip_s4_grid.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "Success for s4_grid"
} catch {
    Write-Output "Error: $_"
}

try {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path "p1_upright.jpg"))
    $bmp = New-Object System.Drawing.Bitmap(1030, 160)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $srcRect = New-Object System.Drawing.Rectangle(30, 40, 1030, 160)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, 1030, 160)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save((Join-Path (Get-Location) "assets\clip_header_score.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "Success for header_score"
} catch {
    Write-Output "Error: $_"
}
