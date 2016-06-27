<!DOCTYPE html>
<html lang="en">
    <head>
        @include("include.head")
    </head><!--/head-->

    <body class="homepage">
        @include("include.header")
        <section class='{{$func or ""}}'>
            <div class="container">
                <div class="row">
                    @yield("content")
                </div>
            </div>
        </section>
        @include("include.footer")
    </body>
</html>