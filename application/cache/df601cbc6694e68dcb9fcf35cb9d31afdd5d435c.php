<?php $__env->startSection("title"); ?>
Website @parent
<?php $__env->stopSection(); ?>
<?php $__env->startSection("content"); ?>
<section id="main-slider" class="no-margin">
    <div class="carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#main-slider" data-slide-to="0" class="active"></li>
            <li data-target="#main-slider" data-slide-to="1"></li>
            <li data-target="#main-slider" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">

            <div class="item active" style="background-image: url(<?php echo e(base_url()); ?>public/img/slider/4.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->

            <div class="item" style="background-image: url(<?php echo e(base_url()); ?>public/img/slider/1.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->

            <div class="item" style="background-image: url(<?php echo e(base_url()); ?>public/img/slider/1.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->
        </div><!--/.carousel-inner-->
    </div><!--/.carousel-->
    <a class="prev hidden-xs" href="#main-slider" data-slide="prev">
        <i class="fa fa-chevron-left"></i>
    </a>
    <a class="next hidden-xs" href="#main-slider" data-slide="next">
        <i class="fa fa-chevron-right"></i>
    </a>
</section><!--/#main-slider-->

<section id="feature" >
    <div class="container">
        <div class="center wow fadeInDown">
            <h2>Dịch vụ</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>

        <div class="row">
            <div class="features">
                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-bullhorn"></i>
                        <h2>Fresh and Clean</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-comments"></i>
                        <h2>Retina ready</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-cloud-download"></i>
                        <h2>Easy to customize</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-leaf"></i>
                        <h2>Adipisicing elit</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-cogs"></i>
                        <h2>Sed do eiusmod</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-heart"></i>
                        <h2>Labore et dolore</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>
                </div><!--/.col-md-4-->
            </div><!--/.services-->
        </div><!--/.row-->    
    </div><!--/.container-->
</section><!--/#feature-->

<section id="recent-works">
    <div class="container">
        <div class="center wow fadeInDown">
            <h2>Bất động sản cần bán</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>

        <div class="row equal">
            <?php foreach($arr_tin as $row): ?>
            <div class="col-md-6">
                <div class="tin-show-grid wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div class="media">
                        <div class="pull-left">
                            <a href="#"><img class="media-object" src="<?php echo e(base_url() . $row['hinhanh']); ?>" alt="" width="125px"></a>
                        </div>
                        <div class="media-body">
                            <div class="row">
                                <span class="tin-title col-xs-12"><?php echo e($row['title']); ?></span>
                                <span class="tin-dientich col-xs-12" style="color: gray;">Diện tích : <?php echo e(number_format($row['dientich'])); ?> m2</span>
                                <span class="tin-quan col-xs-12"><?php echo e($row['khuvuc']); ?></span>
                            </div>
                        </div>
                    </div><!--/.media -->
                    <div class="row">
                        <p class="col-xs-12 text-center tin-gia" style="">Giá : <?php echo e(number_format($row['gia'])); ?> triệu VND</p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>

        </div><!--/.row-->
    </div><!--/.container-->
</section><!--/#recent-works-->

<?php $__env->stopSection(); ?>

<?php echo $__env->make("layouts.template", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>