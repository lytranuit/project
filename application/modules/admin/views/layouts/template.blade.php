<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>
            @section("title")
            Mạnh Tiến Phát
            @show
        </title>

        <!-- core CSS -->
        <link href="{{base_url()}}public/css/bootstrap.min.css" rel="stylesheet">
        <link href="{{base_url()}}public/css/font-awesome.min.css" rel="stylesheet">
        <link href="{{base_url()}}public/css/animate.min.css" rel="stylesheet">
        <link href="{{base_url()}}public/css/prettyPhoto.css" rel="stylesheet">
        <link href="{{base_url()}}public/css/main.css" rel="stylesheet">
        <link href="{{base_url()}}public/css/responsive.css" rel="stylesheet">
        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->       
        <link rel="shortcut icon" href="{{base_url()}}public/img/ico/favicon.ico">
    </head><!--/head-->

    <body class="homepage">
        @include("header")
        @yield("content")
        @include("footer")

        <script src="{{base_url()}}public/js/jquery.js"></script>
        <script src="{{base_url()}}public/js/bootstrap.min.js"></script>
        <script src="{{base_url()}}public/js/jquery.prettyPhoto.js"></script>
        <script src="{{base_url()}}public/js/jquery.isotope.min.js"></script>
        <script src="{{base_url()}}public/js/main.js"></script>
        <script src="{{base_url()}}public/js/wow.min.js"></script>
    </body>
</html>