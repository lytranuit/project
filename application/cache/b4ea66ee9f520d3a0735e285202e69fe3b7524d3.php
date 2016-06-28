<div class="row">
    <div class="col-md-12" style="margin:20px 0px;">
        <button class="btn btn-success">Đăng tin</button>
    </div>
</div>
<table id="quanlytin" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Địa chỉ</th>
            <th>Diện tích</th>
            <th>Duyệt</th>
            <th>Hành động</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($arr_tin as $key=>$tin): ?>
        <tr>
            <td><?php echo e($key+1); ?></td>
            <td><?php echo e($tin->title); ?></td>
            <td><?php echo e($tin->diachi); ?></td>   
            <td><?php echo e(number_format($tin->dientich)); ?> m2</td>
            <td>
                <?php if($tin->active): ?>
                <button class="btn btn-xs btn-success">
                    <i class="ace-icon fa fa-check bigger-120">
                    </i>
                </button>
                <?php else: ?>
                <button class="btn btn-xs btn-danger">
                    <i class="ace-icon glyphicon-remove glyphicon bigger-120">
                    </i>
                </button>
                <?php endif; ?>
            </td>
            <td>
                <button class="btn btn-xs btn-info">
                    <i class="ace-icon fa fa-pencil bigger-120">
                    </i>
                </button>
                <button class="btn btn-xs btn-danger">
                    <i class="ace-icon fa fa-trash-o bigger-120">
                    </i>
                </button>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<script type="text/javascript">
    $(document).ready(function () {
        $('#quanlytin').DataTable();
    });
</script>