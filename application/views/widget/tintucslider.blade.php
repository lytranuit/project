<div class="flexsilder">
    <div class="slides">
        @foreach($arr_tin as $tin)
        <div class=" hero-feature">
            <div class="thumbnail">
                <img src="{{base_url() . $tin['hinhanh']}}" alt="">
                <div class="caption">
                    <h3 class="no-margin" style="font-weight: 600;color: black;">{{$tin['title']}}</h3>
                    <p class="content">{{substr(strip_tags($tin['content']),0,200) . "..."}}</p>
                    <p>
                        <a class="btn btn-danger" href="{{get_url_seo("index/tintuc",array($tin['id_tintuc'],sluggable($tin['title'])))}}">Read More</a>
                    </p>
                </div>
            </div>
        </div>
        @endforeach

    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $("#tintuc-index .flexsilder").flexslider({
            selector: ".slides > div",
            animation: "slide",
            minItems: 2,
            maxItems: 4,
            itemWidth: 100,
            itemMargin: 20,
            slideshowSpeed: 4000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 500, //Integer: Set the speed of animations, in milliseconds
            initDelay: 0,
            move: 1,
            controlNav: true,
            slideshow: true,
            directionNav: false,
            start: function (slider) {
                //  slider.resize();
                //eventDetail();
            }
        });

    });

</script>