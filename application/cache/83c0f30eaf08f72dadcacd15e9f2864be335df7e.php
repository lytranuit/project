<?php $__env->startSection("title"); ?>
Website @parent
<?php $__env->stopSection(); ?>
<?php $__env->startSection("content"); ?>
<?php echo $__env->make("include.quanlytin", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection("left-side"); ?>
<div class="profile-sidebar">
    <!-- SIDEBAR USERPIC -->
    <div class="profile-userpic">
        <img src="<?php echo e(base_url()); ?>public/img/tran.jpg" class="img-responsive" alt="">
    </div>
    <!-- END SIDEBAR USERPIC -->
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">
            Marcus Doe
        </div>
        <div class="profile-usertitle-job">
            Developer
        </div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR BUTTONS -->
    <div class="profile-userbuttons">
        <button type="button" class="btn btn-success btn-sm">Follow</button>
        <button type="button" class="btn btn-danger btn-sm">Message</button>
    </div>
    <!-- END SIDEBAR BUTTONS -->
    <!-- SIDEBAR MENU -->
    <div class="profile-usermenu">
        <ul class="nav">
            <li>
                <a href="<?php echo e(base_url()); ?>member/quanlyuser">
                    <i class="glyphicon glyphicon-user"></i>
                    Quản lý người dùng </a>
            </li>
            <li class="active">
                <a href="<?php echo e(base_url()); ?>member/quanlytin">
                    <i class="glyphicon glyphicon-flag"></i>
                    Quản lý tin </a>
            </li>
            <li>
                <a href="<?php echo e(base_url()); ?>member">
                    <i class="glyphicon glyphicon-lock"></i>
                    Thông tin cá nhân </a>
            </li>
        </ul>
    </div>
    <!-- END MENU -->
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make("layouts.left", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>