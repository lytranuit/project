<!DOCTYPE html>
<html lang="en">
    <head>
        @include("include.head")
    </head><!--/head-->

    <body class="homepage">
        @include("include.header")
        @yield("content")
        @include("include.footer")
    </body>
</html>