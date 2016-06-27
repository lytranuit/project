@extends("layouts.left")

@section("title")
Website @parent
@stop
@section("content")
<form method="POST" action="" id="form-dang-tin" style="margin: 20px 0px;">
    <div class="col-md-12">
        <legend>Thông tin bắt buộc</legend>
        <i class="describe col-md-12">Bạn vui lòng điền đầy đủ thông tin bên dưới.</i>
        <div class="form-group col-md-12 tieude parent">
            <label for="post_titles">
                Tiêu đề:
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <input type="text" name="post_titles" class="form-control" placeholder="Tiêu đề" required=""/>
        </div>
        <div class="form-group col-md-12 noidung parent">
            <label for="post_contents">
                Nội dung 
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <textarea name="post_contents" class="form-control" required=""></textarea>
        </div>
        <div class="form-group col-md-6 parent">
            <label>
                Tỉnh/Thành phố
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <select name="post_tp" ajax="" class="post_tp form-control" required="">

            </select>
        </div>
        <div class="form-group col-md-6 parent">
            <label>
                Quận/Huyện:
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <select name="post_quan" class="post_quan form-control" required="">
            </select>
        </div>
        <div class="form-group col-md-4 parent">
            <label>
                Địa chỉ:
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <input name="diachi" class="diachi form-control" required=""/>
        </div>
        <div class="form-group col-md-4 parent">
            <label>
                Diện tích (m2):
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <input name="dientich" class="dien-tich form-control" required=""/>
        </div>
        <div class="form-group col-md-4 parent">
            <label>
                Giá tiền (triệu đồng):
            </label><span class="text-danger">*</span><span class="error-place"></span>
            <input name="gia_ban" class="gia form-control" required=""/>
        </div>
    </div>
    <div class="col-md-12">
        <legend>Hình ảnh</legend>
        <i class="describe col-md-12">Hình ảnh thật của bất động sản.</i>
        <div class="col-md-12">
            <button id="media" onclick="return false;" class="btn btn-success">Select Images</button>
            <!-- List of images id to save -->
            <input id="gallery_input" type="hidden" name="images" value="">
            <!-- Show images, use wp_get_attachment_image_src -->
            <ul id="display_gallery"></ul>
        </div>
    </div>
    <div class="col-md-12">
        <legend>Thông tin khác</legend>
        <i class="describe col-md-12">THông tin không bắt buộc,nên điền đầy đủ để máy chủ tìm kiếm bài viết của bạn dễ hơn.</i>
        <div class="form-group col-sm-12 col-md-6 parent">
            <label>
                Chiều dài
            </label><span class="error-place"></span>
            <input name="chieudai" class="form-control chieudai"/>
        </div>
        <div class="form-group col-sm-12 col-md-6 parent">
            <label>
                Chiều rộng
            </label><span class="error-place"></span>
            <input name="chieurong" class="form-control chieurong"/>
        </div>
        <div class="form-group col-sm-12 col-md-6 parent">
            <label>
                Hướng
            </label><span class="error-place"></span>
            <select name="huong" class="form-control">
                <option value="0">--- Chọn Hướng ---</option>
                <option value="Đông">Đông</option>
                <option value="Tây">Tây</option>
                <option value="Nam">Nam</option>
                <option value="Bắc">Bắc</option>
                <option value="Đông Nam">Đông Nam</option>
                <option value="Đông Bắc">Đông Bắc</option>
                <option value="Tây Nam">Tây Nam</option>
                <option value="Tây Bắc">Tây Bắc</option>
            </select>
        </div>
        <div class="form-group col-sm-12 col-md-6 parent">
            <label>
                Pháp lý
            </label><span class="error-place"></span>
            <select name="phaply" class="form-control">
                <option value="0">--- Chọn Pháp lý ---</option>
                <option value="Sổ đỏ/Sổ hồng">Sổ đỏ/Sổ hồng</option>
                <option value="Giấy tờ hợp lệ">Giấy tờ hợp lệ</option>
                <option value="Giấy phép XD">Giấy phép XD</option>
                <option value="Giấy phép KD">Giấy phép KD</option>
            </select>
        </div>
    </div>
    <div class="col-md-12">
        <div class="col-sm-12" style="padding-left:0;">
            <button type="submit" name="dangtin" class="btn btn-primary">Đăng Bài</button>
        </div>
    </div>
</form>
<script type="text/javascript">
    $(document).ready(function () {
        // get_quan_huyen($(".post_tp").val());
        
    });
    function get_quan_huyen(parent) {
        $(".post_quan").empty();
        $.each(khuvuc, function (k1, v1) {
            if (v1['parent'] == parent) {
                $(".post_quan").append("<option value='" + v1['term_taxonomy_id'] + "'>" + v1['name'] + "</option>");
            }
        });

    }
</script>
@stop
