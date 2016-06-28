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
        @foreach($arr_users as $key=>$user)
        <tr>
            <td>{{$key+1}}</td>
            <td>{{$user->username}}</td>
            <td>{{$user->email}}</td>
            <td>
                @foreach ($user->groups as $group)
                <a class="groups_users"style="display:block;" href="#">{{$group->name}}</a>
                @endforeach
            </td>
            <td>
                @if($user->active)
                <a class="acde_user" href="#">Active</a>
                @else
                <a class="acde_user" href="#">Deactive</a>
                @endif
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
        @endforeach
    </tbody>
</table>

<script type="text/javascript">
    $(document).ready(function () {
        $('#quanlyuser').DataTable();
    });
</script>