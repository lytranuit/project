
<div class="col-md-12 alert box-{{$id}}">
    <a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>
    <h2>Slider</h2>
    <div class="col-md-12">
        <div class="form-group">
            <input id="hinh-anh{{$id}}" name="hinhanh[]" type="file" multiple class="file">
        </div>
    </div>
    <div class="form-group col-md-4 parent">
        <label for="text1">
            Text1:
        </label><span class="text-danger">*</span><span class="error-place"></span>
        <input type="text" name="text1[]" value="" class="form-control" placeholder="Text1"/>
    </div>
    <div class="form-group col-md-4 parent">
        <label for="text2">
            Text2:
        </label><span class="text-danger">*</span><span class="error-place"></span>
        <input type="text" name="text2[]" value="" class="form-control" placeholder="Text2"/>
    </div>
    <div class="form-group col-md-4 parent">
        <label for="text3">
            Text3:
        </label><span class="text-danger">*</span><span class="error-place"></span>
        <input type="text" name="text3[]" value="" class="form-control" placeholder="Text3"/>
    </div>
    <input type="hidden" name="id[]" value="{{$id}}"/>
    <script type="text/javascript">
        $("#hinh-anh{{$id}}").fileinput({
            uploadUrl: '<?php echo base_url() . "member/uploadhinhanh"; ?>', // you must set a valid URL here else you will get an error
            allowedFileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
            maxFileSize: 10000,
            maxFileCount: 1,
            overwriteInitial: false,
            validateInitialCount: true
        });
        $("#hinh-anh{{$id}}").on('fileuploaded', function (event, data, previewId, index) {
            var id = data.response.key;
            var add = "<input type='hidden' name='id_hinhanh[]' value='" + id + "' class='hinhanh'>";
            $("#form-slider .box-{{$id}}").append(add);
        });
        $('#hinh-anh{{$id}}').on('filedeleted', function (event, key) {
            $(".hinhanh[value='" + key + "'").remove();
        });
    </script>
</div>