<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <base href="/" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" href="/favicon.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#1e88e5">
        <meta name="description" content="Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patient.">
        <title>Proto.type</title>
        <link rel="manifest" href="{{url('/mix-manifest.json')}}">
        <style>
            *{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;box-sizing:border-box;letter-spacing:-.15px}html{text-size-adjust:100%;text-rendering:optimizeLegibility!important;-webkit-font-smoothing:subpixel-antialiased!important;text-shadow:rgba(0,0,0,.01) 0 0 1px}
        </style>
        <link rel="preload" as="style" onload="this.rel='stylesheet'" href="{{asset('css/app.css')}}" >
    </head>
    <body>
    <div id="app">
    </div>
        <script>
           window.Laravel = <?php echo json_encode([
               'csrfToken' => csrf_token(),
                    ]); ?>
          </script>
        <noscript>
            this page require Javascript :> , so enable your Javascript
        </noscript>
        <!-- <script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
</script> -->
        <script src="{{asset('js/manifest.js')}}"></script>
        <script src="{{asset('js/vendor.js')}}"></script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>