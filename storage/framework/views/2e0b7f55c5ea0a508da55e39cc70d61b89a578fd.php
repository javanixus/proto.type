<!doctype html>
<html lang="<?php echo e(app()->getLocale()); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <meta name="theme-color" content="#1e88e5">
        <meta name="description" content="Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patient.">
        <!-- critical css preload -->
        <style>
            *{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;box-sizing:border-box;letter-spacing:-.15px}html{text-size-adjust:100%;text-rendering:optimizeLegibility!important;-webkit-font-smoothing:subpixel-antialiased!important;text-shadow:rgba(0,0,0,.01) 0 0 1px}h1{color:#2e2f30}a{font-size:14px}a{text-decoration:underline;color:#999}.login{width:100%;height:100vh;display:flex}
        </style>
        <title>Proto.type</title>
        <link rel="manifest" href="/manifest.json">
        <link href="<?php echo e(asset('css/app.css')); ?>" rel="preload" as="style" onload="this.rel='stylesheet'">
        <link rel="prefetch" onload="this.rel='stylesheet'" as="font" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" crossorigin >
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
        <script src="<?php echo e(asset('js/app.js')); ?>" async></script>
    </body>
</html>
