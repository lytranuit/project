@extends("layouts.template")

@section("title")
Website @parent
@stop
@section("content")
<section id="main-slider" class="no-margin ">
    <div class="carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#main-slider" data-slide-to="0" class="active"></li>
            <li data-target="#main-slider" data-slide-to="1"></li>
            <li data-target="#main-slider" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">

            <div class="item active" style="background-image: url({{base_url()}}public/img/slider/4.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <!--                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->

            <div class="item" style="background-image: url({{base_url()}}public/img/slider/1.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <!--                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->

            <div class="item" style="background-image: url({{base_url()}}public/img/slider/1.jpg)">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <h2 class="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
                                <!--                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>-->
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

<section id="feature" class="content-underlay">
    <div class="container">
        <div class="center wow fadeInDown">
            <h2>Lĩnh vực hoạt động</h2>
            <p class="lead">Công ty hoạt động trên nhiều lĩnh vực điển hình như:</p>
        </div>

        <div class="row">
            <div class="features">
                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-bullhorn"></i>
                        <h2>Môi giới.</h2>
                        <h3>Môi giới bất động sản và đầu tư đất dự án.</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-comments"></i>
                        <h2>Tư vấn và hỗ trợ.</h2>
                        <h3>Đưa ra lời tư vấn và hỗ trợ khách hàng vay vốn đầu tư.</h3>
                    </div>
                </div><!--/.col-md-4-->

                <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="feature-wrap">
                        <i class="fa fa-cloud-download"></i>
                        <h2>Rao bán.</h2>
                        <h3>Hỗ trợ đăng tin rao bán và cho thuê bất động sản.</h3>
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
            <p class="lead">Chúng tôi đã sàng lọc qua hàng trăm dự án tại Thành Phố Hồ Chí Minh, các Tỉnh lân cận và hân hạnh giới thiệu đến Quý khách một số dự án hấp dẫn, với vị trí đẹp, hồ sơ pháp lý hoàn chỉnh, giá rẻ, phương thức thanh toán linh hoạt, khả năng sinh lợi cao để Quý khách đầu tư hay an cư.</p>
        </div>
        <?php echo $widget->tinnew(); ?>
    </div><!--/.container-->
</section><!--/#recent-works-->
<section id='tintuc-index' class="content-underlay" style="background: #ecf0f1">
    <div class="container">
        <div class="row">
            <?php echo $widget->tintucslider(); ?>
        </div>
    </div><!--/.container-->
</section>
@stop
