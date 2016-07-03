<div class="widget categories">
    <h3>Khu vực</h3>
    <div class="row">
        <div class="col-sm-6">
            <ul class="blog_category">
                @foreach($arr_khuvuc as $row)
                <li><a href="#">{{$row['ten_khuvuc']}}<span class="badge">{{$row['num_tin']}}</span></a></li>
                @endforeach
            </ul>
        </div>
    </div>                     
</div><!--/.categories-->