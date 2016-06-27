<!DOCTYPE html>
<html lang="en">
    <head>
        @include("include.head")
    </head>
    <body class="homepage">
        @include("include.header")
        <section class='{{$func or ""}}'>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        @yield("left-side")
                    </div>
                    <div class="col-md-9">
                        @yield("content")
                    </div>
                </div>
            </div>
        </section>
        @include("include.footer")
    </body>
</html>