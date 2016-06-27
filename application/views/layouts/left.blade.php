<!DOCTYPE html>
<html lang="en">
    <head>
        @include("include.head")
    </head>
    <body class="homepage">
        @include("include.header")
        <section class="container">
            <div class="row">
                <div class="col-md-4">
                    @yield("left-side")
                </div>
                <div class="col-md-8">
                    @yield("content")
                </div>
            </div>
        </section>
        @include("include.footer")
    </body>
</html>