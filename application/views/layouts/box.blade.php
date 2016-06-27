<!DOCTYPE html>
<html lang="en">
    <head>
        @include("include.head")
    </head><!--/head-->

    <body class="homepage">
        @include("include.header")
        <section class="container">
            <div class="row">
                @yield("content")
            </div>
        </section>
        @include("include.footer")
    </body>
</html>