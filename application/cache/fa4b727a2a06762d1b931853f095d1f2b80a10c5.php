<?php $__env->startSection("title"); ?>
Website @parent
<?php $__env->stopSection(); ?>
<?php $__env->startSection("content"); ?>
<?php echo $__env->make("include.dangtin", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection("left-side"); ?>
<?php echo $__env->make("include.sidebar-left", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make("layouts.left", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>