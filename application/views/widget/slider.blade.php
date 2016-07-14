<section id="main-slider" class="no-margin ">
    <div class="carousel slide">
        <ol class="carousel-indicators">
            @for($i = 0; $i < count($arr_slider);$i++)
            @if($i)
            <li data-target="#main-slider" data-slide-to="{{$i}}"></li>
            @else
            <li data-target="#main-slider" data-slide-to="{{$i}}" class="active"></li>
            @endif
            @endfor
        </ol>
        <div class="carousel-inner">
            @foreach($arr_slider as $key => $slider)
            @if($key)
            <div class="item" style="background-image: url({{base_url(). $slider['hinhanh']}});background-size: cover;
                 background-repeat: no-repeat;
                 background-position: center center;
                 background-color: #D4D4D4;">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1"><?= $slider['animate_1'] ?></h1>
                                <h2 class="animation animated-item-2"><?= $slider['animate_2'] ?></h2>
                                <h2 class="animation animated-item-3"><?= $slider['animate_3'] ?></h2>
                                <!--                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->
            @else
            <div class="item active" style="background-image: url({{base_url(). $slider['hinhanh']}});background-size: cover;
                 background-repeat: no-repeat;
                 background-position: center center;
                 background-color: #D4D4D4;">
                <div class="container">
                    <div class="row slide-margin">
                        <div class="col-sm-6">
                            <div class="carousel-content">
                                <h1 class="animation animated-item-1"><?= $slider['animate_1'] ?></h1>
                                <h2 class="animation animated-item-2"><?= $slider['animate_2'] ?></h2>
                                <h2 class="animation animated-item-3"><?= $slider['animate_3'] ?></h2>
                                <!--                                <a class="btn-slide animation animated-item-3" href="#">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.item-->
            @endif

            @endforeach
        </div><!--/.carousel-inner-->
    </div><!--/.carousel-->
    <a class="prev hidden-xs" href="#main-slider" data-slide="prev">
        <i class="fa fa-chevron-left"></i>
    </a>
    <a class="next hidden-xs" href="#main-slider" data-slide="next">
        <i class="fa fa-chevron-right"></i>
    </a>
</section><!--/#main-slider-->