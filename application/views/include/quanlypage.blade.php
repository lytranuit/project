<div style="padding: 10px">
    <div class="row">
        <div class="col-md-12" style="margin:20px 0px;">
            <a class="btn btn-success" href="{{base_url()}}member/dangtin">Đăng tin</a>
        </div>
    </div>
    <table id="quanlytin" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tiêu đề</th>
                <th>Link</th>
                <th>Seo URL</th>
                <th>Template</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            @foreach($arr_page as $key=>$page)
            <tr>
                <td><span class="id">{{$page['id']}}</span></td>
                <td><a href="#" data-type="text" data-pk="1" class="page">{{$page['page']}}</a></td>
                <td><a href="#" class="link" data-type="select" data-pk="1" data-title="Link" data-value="{{$page['link']}}"></a></td>
                <td><a href="#" class="seo" data-type="text" data-pk="1" data-title="Seo">{{$page['seo_url']}}</a></td>
                <td><a href="#" class="template" data-type="select" data-pk="1" data-title="Template" data-value="{{$page['template']}}">{{$page['template']}}</a></td>
                <td>
                    <a href="#" class="edit">
                        <button class="btn btn-xs btn-info">
                            <i class="ace-icon fa fa-pencil bigger-120">
                            </i>
                        </button>
                    </a>
                    <a href="#" class="remove">
                        <button class="btn btn-xs btn-danger">
                            <i class="ace-icon fa fa-trash-o bigger-120">
                            </i>
                        </button>
                    </a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
<script type="text/javascript">

    $(document).ready(function () {
        $('#quanlytin').DataTable();
        $(".page,.seo").editable({
            mode: 'inline'
        });

        $(".link").editable({
            mode: 'inline',
            source: [
<?php echo $link; ?>
            ]
        });
        $(".template").editable({
            mode: 'inline',
            source: [
                {'value': 'box', 'text': 'box'},
                {'value': 'left', 'text': 'left'},
                {'value': 'right', 'text': 'right'},
                {'value': 'template', 'text': 'template'},
            ]
        });
        $(document).on("click", '.edit', function () {
            var tr = $(this).parents("tr");
            var id = $(".id", tr).text();
            var page = $(".page", tr).text();
            var link = $(".link", tr).text();
            var seo = $(".seo", tr).text();
            var template = $(".template", tr).text();
            $.ajax({
                url: '{{base_url()}}ajax/editpage',
                data: {id: id, page: page, link: link, seo: seo, template: template},
                success: function () {
                    location.reload();
                }
            })
        })
        $(document).on("click", '.remove', function () {

        })
    });
</script>