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
                <th>Module</th>
                <th>Class</th>
                <th>Method</th>
                <th>Seo URL</th>
                <th>Template</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            @foreach($arr_page as $key=>$page)
            <tr>
                <td>{{$page['id']}}</td>
                <td><a href="#" data-type="text" data-pk="1" class="edit">{{$page['page']}}</a></td>
                <td>{{$page['module']}}</td>
                <td>{{$page['controller']}}</td>
                <td>{{$page['method']}}</td>
                <td>{{$page['seo_url']}}</td>
                <td>{{$page['template']}}</td>
                <td>
                    <a href="{{base_url()}}member/editpage/{{$page['id']}}">
                        <button class="btn btn-xs btn-info">
                            <i class="ace-icon fa fa-pencil bigger-120">
                            </i>
                        </button>
                    </a>
                    <a href="{{base_url()}}member/remove_page/{{$page['id']}}">
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
        $(".edit").editable();
    });
</script>