$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 3000
$prefix = "http://localhost:$port/"

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif'  = 'image/gif'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.woff2'= 'font/woff2'
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host ""
Write-Host "  Restaurant website is live!" -ForegroundColor Green
Write-Host "  Open: http://localhost:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Press Ctrl+C to stop the server." -ForegroundColor DarkGray
Write-Host ""

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response

    $urlPath = $req.Url.LocalPath.TrimStart('/')
    if ($urlPath -eq '' -or $urlPath -eq '/') { $urlPath = 'index.html' }

    $filePath = Join-Path $root $urlPath

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $contentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = $contentType
      $res.ContentLength64 = $bytes.Length
      $res.StatusCode = 200
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host "  200  $($req.Url.LocalPath)" -ForegroundColor DarkGray
    } else {
      $res.StatusCode = 404
      $body = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - Not Found</h1>")
      $res.ContentType = 'text/html'
      $res.ContentLength64 = $body.Length
      $res.OutputStream.Write($body, 0, $body.Length)
      Write-Host "  404  $($req.Url.LocalPath)" -ForegroundColor DarkYellow
    }

    $res.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  Write-Host "Server stopped." -ForegroundColor DarkGray
}
