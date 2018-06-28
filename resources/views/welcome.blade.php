<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#1e88e5">
        <meta name="description" content="Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patient.">
        <title>Proto.type</title>
        <link rel="manifest" href="{{url('/manifest.json')}}">
        <style>
            *{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;box-sizing:border-box;letter-spacing:-.15px}html{text-size-adjust:100%;text-rendering:optimizeLegibility!important;-webkit-font-smoothing:subpixel-antialiased!important;text-shadow:rgba(0,0,0,.01) 0 0 1px}
        </style>
        <link rel="stylesheet" href="{{secure_asset('css/app.css')}}" >
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
        <script async src="{{secure_asset('js/app.js')}}"></script>
    </body>
</html>
