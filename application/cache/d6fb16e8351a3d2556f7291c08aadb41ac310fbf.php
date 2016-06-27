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
<?php foreach($stylesheet_tag as $url): ?>

<link href="<?php echo e($url); ?>" rel="stylesheet">
<?php endforeach; ?>

<!--[if lt IE 9]>
<script src="js/html5shiv.js"></script>
<script src="js/respond.min.js"></script>
<![endif]-->       
<link rel="shortcut icon" href="<?php echo e(base_url()); ?>public/img/ico/favicon.ico">
<?php foreach($javascript_tag as $url): ?>
<script src="<?php echo e($url); ?>"></script>
<?php endforeach; ?>