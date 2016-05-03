<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
        <script src="{{ elixir('js/all.js') }}"></script>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title animated infinite pulse">Laravel 5</div>

                <div class="seriousImages">
                    <div class="seriousImages__item"><img src="/img/img1.png" alt=""></div>
                    <div class="seriousImages__item"><img src="/img/img2.jpg" alt=""></div>
                    <div class="seriousImages__item"><img src="/img/img3.png" alt=""></div>
                    <div class="seriousImages__item"><img src="/img/img4.jpg" alt=""></div>
                </div>
                
            </div>
        </div>

        @if ( Config::get('app.debug') )
            <script type="text/javascript">
                document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
            </script>
        @endif

    </body>
</html>
