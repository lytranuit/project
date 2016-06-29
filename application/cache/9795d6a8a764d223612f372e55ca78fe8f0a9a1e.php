<div style="padding: 10px">
    <table id="quanlyuser" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Groups</th>
                <th>Active</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>STT</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Groups</th>
                <th>Active</th>
                <th>Hành động</th>
            </tr>
        </tfoot>
        <tbody>
            <?php foreach($arr_users as $key=>$user): ?>
            <tr>
                <td><?php echo e($key+1); ?></td>
                <td><?php echo e($user->username); ?></td>
                <td><?php echo e($user->email); ?></td>
                <td>
                    <a class="groups_users" href="#" data-value="<?php echo e($user->groups); ?>"data-type="checklist" data-pk="1" data-url="<?php echo e(base_url()); ?>member/change_group/<?php echo e($user->id); ?>" data-title="Select Group"></a>
                </td>
                <td>
                    <?php if($user->active): ?>
                    <a href="<?php echo e(base_url()); ?>member/deactivate/<?php echo e($user->id); ?>">
                        <button class="btn btn-xs btn-success">
                            <i class="ace-icon fa fa-check bigger-120">
                            </i>
                        </button>
                    </a>
                    <?php else: ?>
                    <a href="<?php echo e(base_url()); ?>member/activate/<?php echo e($user->id); ?>">
                        <button class="btn btn-xs btn-danger">
                            <i class="ace-icon glyphicon-remove glyphicon bigger-120">
                            </i>
                        </button>
                    </a>
                    <?php endif; ?>
                </td>
                <td>
                    <a href="<?php echo e(base_url()); ?>member/remove_user/<?php echo e($user->id); ?>">
                        <button class="btn btn-xs btn-danger">
                            <i class="ace-icon fa fa-trash-o bigger-120">
                            </i>
                        </button>
                    </a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $('#quanlyuser').DataTable();
        $('.groups_users').each(function () {
            $(this).editable({
                source: <?php echo json_encode($arr_groups) ?>
            });
        });

    });
</script>