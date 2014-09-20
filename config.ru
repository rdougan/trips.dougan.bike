use Rack::Static,
  :urls => ["/resources/images", "/resources/js", "/resources/json", "/resources/css"],
  :root => "public"

norway = lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}

map "/norway" do
  run norway
end

map "/" do
  run norway
end