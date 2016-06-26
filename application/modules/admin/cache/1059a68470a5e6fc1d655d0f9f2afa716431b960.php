<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>
            <?php $__env->startSection("title"); ?>
            Mạnh Tiến Phát
            <?php echo $__env->yieldSection(); ?>
        </title>

        <!-- core CSS -->
        <link href="<?php echo e(base_url()); ?>public/css/bootstrap.min.css" rel="stylesheet">
        <link href="<?php echo e(base_url()); ?>public/css/font-awesome.min.css" rel="stylesheet">
        <link href="<?php echo e(base_url()); ?>public/css/animate.min.css" rel="stylesheet">
        <link href="<?php echo e(base_url()); ?>public/css/prettyPhoto.css" rel="stylesheet">
        <link href="<?php echo e(base_url()); ?>public/css/main.css" rel="stylesheet">
        <link href="<?php echo e(base_url()); ?>public/css/responsive.css" rel="stylesheet">
        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->       
        <link rel="shortcut icon" href="<?php echo e(base_url()); ?>public/img/ico/favicon.ico">
    </head><!--/head-->

    <body class="homepage">
        <?php echo $__env->make("header", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->yieldContent("content"); ?>
        <?php echo $__env->make("footer", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

        <script src="<?php echo e(base_url()); ?>public/js/jquery.js"></script>
        <script src="<?php echo e(base_url()); ?>public/js/bootstrap.min.js"></script>
        <script src="<?php echo e(base_url()); ?>public/js/jquery.prettyPhoto.js"></script>
        <script src="<?php echo e(base_url()); ?>public/js/jquery.isotope.min.js"></script>
        <script src="<?php echo e(base_url()); ?>public/js/main.js"></script>
        <script src="<?php echo e(base_url()); ?>public/js/wow.min.js"></script>
    </body>
</html>