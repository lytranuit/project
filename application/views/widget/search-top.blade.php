<form class="search-box row wow fadeInDown" action="{{base_url()}}search" data-wow-duration="1000ms" data-wow-delay="600ms"style="
      position: absolute;
      bottom: -74px;
      width: inherit;
      padding: 20px;
      background: black;">
    <div class="col-xs-11">
        <div class="row">
            <div class="col-xs-4">
                <select name="search_khuvuc" ajax="" class="search_khuvuc form-control">
                    <option value="0">Chọn Khu vực</option>
                    @foreach($khuvuc as $key => $row)
                    @if($row['parent'] == 0 && $key == 0)
                    <optgroup label="{{$row['ten_khuvuc']}}">
                        @elseif($row['parent'] != 0)
                        <option value="{{$row['id_khuvuc']}}">{{$row['ten_khuvuc']}}</option>
                        @else
                    </optgroup>
                    <optgroup label="{{$row['ten_khuvuc']}}">
                        @endif
                        @endforeach
                    </optgroup>
                </select>
            </div>
            <div class="col-xs-4">
                <select name="search_gia" ajax="" class="search_gia form-control">
                    <option value="0">Chọn Mức giá</option>
                </select>
            </div>
            <div class="col-xs-4">
                <select name="search_huong" ajax="" class="search_huong form-control">
                    <option value="0">Chọn Hướng</option>
                    @foreach($huong as $key => $row)
                    <option value="{{$row['id_huong']}}">{{$row['ten_huong']}}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>
    <div class="col-xs-1" style="padding-left:0;">
        <button type="submit" name="search" class="btn btn-primary">Tìm</button>
    </div>

</form>