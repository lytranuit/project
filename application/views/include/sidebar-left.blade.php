<div class="profile-sidebar">
    <!-- SIDEBAR USERPIC -->
    <div class="profile-userpic">
        <img src="{{base_url()}}public/img/testimonial-dummy1.jpg" class="img-responsive" alt="">
    </div>
    <!-- END SIDEBAR USERPIC -->
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">
            {{$_SESSION['identity']}}
        </div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR BUTTONS -->
    <div class="profile-userbuttons">
        <button type="button" class="btn btn-success btn-sm">Follow</button>
        <button type="button" class="btn btn-danger btn-sm">Message</button>
    </div>
    <!-- END SIDEBAR BUTTONS -->
    <!-- SIDEBAR MENU -->
    <div class="profile-usermenu">
        <ul class="nav">
            <li>
                <a href="{{base_url()}}member">
                    <i class="glyphicon glyphicon-lock"></i>
                    Thông tin tài khoản </a>
            </li>

            <li>
                <a href="{{base_url()}}member/quanlytin">
                    <i class="glyphicon glyphicon-flag"></i>
                    Quản lý tin đăng</a>
            </li>
            @if($is_admin)
            <li>
                <a href="{{base_url()}}member/editgioithieu">
                    <i class="glyphicon glyphicon-flag"></i>
                    Trang Giới thiệu </a>
            </li>
            <li>
                <a href="{{base_url()}}member/quanlyuser">
                    <i class="glyphicon glyphicon-user"></i>
                    Quản lý người dùng </a>
            </li>
            <li>
                <a href="{{base_url()}}member/quanlytintuc">
                    <i class="glyphicon glyphicon-flag"></i>
                    Quản lý tin tức </a>
            </li>
            @endif
        </ul>
    </div>
    <!-- END MENU -->
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $(".profile-usermenu a[href='{{current_url()}}']").parent().addClass("active");
    });
</script>