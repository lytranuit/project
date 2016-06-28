@extends("layouts.template")

@section("title")
Website @parent
@stop
@section("content")
<section id="main-slider" class="no-margin">
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
                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
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
                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
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

        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item1.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme</a> </h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item1.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item2.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme</a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item2.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div> 

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item3.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme </a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item3.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item4.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme </a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item4.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item5.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme</a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item5.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item6.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme </a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item6.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div> 

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item7.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme </a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item7.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   

            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="recent-work-wrap">
                    <img class="img-responsive" src="{{base_url()}}public/uploads/2016/26/item8.png" alt="">
                    <div class="overlay">
                        <div class="recent-work-inner">
                            <h3><a href="#">Business theme </a></h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                            <a class="preview" href="{{base_url()}}public/uploads/2016/26/item8.png" rel="prettyPhoto"><i class="fa fa-eye"></i> View</a>
                        </div> 
                    </div>
                </div>
            </div>   
        </div><!--/.row-->
    </div><!--/.container-->
</section><!--/#recent-works-->

@stop
