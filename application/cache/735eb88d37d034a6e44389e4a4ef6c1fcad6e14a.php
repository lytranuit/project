<!DOCTYPE html>
<html lang="en">
    <head>
        <?php echo $__env->make("include.head", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </head><!--/head-->

    <body class="homepage">
        <?php echo $__env->make("include.header", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->yieldContent("content"); ?>
        <?php echo $__env->make("include.footer", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </body>
</html>