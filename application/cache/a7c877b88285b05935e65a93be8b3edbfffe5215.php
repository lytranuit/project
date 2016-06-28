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
                <?php foreach($user->groups as $group): ?>
                <a class="groups_users"style="display:block;" href="#"><?php echo e($group->name); ?></a>
                <?php endforeach; ?>
            </td>
            <td>
                <?php if($user->active): ?>
                <a class="acde_user" href="#">Active</a>
                <?php else: ?>
                <a class="acde_user" href="#">Deactive</a>
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
        $('#quanlyuser').DataTable();
    });
</script>