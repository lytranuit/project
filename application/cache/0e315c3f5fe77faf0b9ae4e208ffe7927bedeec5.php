<!DOCTYPE html>
<html lang="en">
    <head>
        <?php echo $__env->make("include.head", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </head>
    <body class="homepage">
        <?php echo $__env->make("include.header", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <section class='<?php echo e(isset($func) ? $func : ""); ?>'>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <?php echo $__env->yieldContent("left-side"); ?>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <?php echo $__env->yieldContent("content"); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php echo $__env->make("include.footer", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </body>
</html>