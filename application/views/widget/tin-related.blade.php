<div class="row equal">
    @foreach($arr_tin as $row)
    <div class="col-md-6">
        <div class="tin-show tin-show-grid wow fadeInDown" data-id="{{$row['id_tin']}}" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="media">
                <div class="no-margin pull-left jumbotron" style="margin-right: 10px;padding: 0;margin-bottom: 0;">
                    <a href="{{base_url() . $row['hinhanh']}}" class="swipebox-{{$row['id_tin']}}"><img class="media-object" src="{{base_url() . $row['hinhanh']}}" alt="" width="125px"></a>
                    <div class="jumbotron-overlay-down"><span class="glyphicon glyphicon-zoom-in" style="color:white;margin: 5px 35px;cursor: pointer;"></span></div>
                    @foreach($row['arr_hinhanh'] as $key => $hinh)
                    @if($key)
                    <a href="{{base_url() . $hinh['bg_src']}}" class="swipebox-{{$row['id_tin']}}" style="display: none;"><img class="media-object" src="{{base_url() .  $hinh['bg_src']}}" alt="" width="125px"></a>
                    @endif
                    @endforeach
                </div>
                <div class="media-body">
                    <div class="row">
                        <a href="{{get_url_seo("index/tin",array($row['id_tin'],$row['alias']))}}">
                            <span class="tin-title col-xs-12">{{$row['title']}}</span>
                        </a>
                        <span class="tin-dientich col-xs-12" style="color: gray;">Diện tích : {{number_format($row['dientich'])}} m2</span>
                        <span class="tin-quan col-xs-12">{{$row['khuvuc']}}</span>
                    </div>
                </div>
            </div><!--/.media -->
            <div class="row">
                <p class="col-xs-12 text-center tin-gia" style="">Giá : {{$row['gia']}} VNĐ</p>
            </div>
        </div>

    </div>
    @endforeach
</div><!--/.row-->
<nav id="pagination" class="col-xs-12 text-center">

</nav>
<script src="{{base_url()}}public/js/jquery.bootpag.min.js"></script>
<script>
$(document).ready(function () {
    var total = "{{$count_page}}";
    $('#pagination').bootpag({
        total: total,
        page: 1,
        maxVisible: 5,
        leaps: true,
        firstLastUse: true,
        first: '←',
        last: '→',
        wrapClass: 'pagination',
        activeClass: 'active',
        disabledClass: 'disabled',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first'
    }).on("page", function (event, num) {

        $.ajax({
            type: 'GET',
            data: {page: num},
            url: '{{base_url()}}ajax/get_tin',
            beforeSend: function (xhr) {
                $(".equal").fadeOut(1000);
            },
            success: function (data) {
                $(".equal").html(data).fadeIn(1000);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    });
})

</script>