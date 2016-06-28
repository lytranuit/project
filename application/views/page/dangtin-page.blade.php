@extends("layouts.left")

@section("title")
Website @parent
@stop
@section("content")
@include("include.dangtin")
@stop
@section("left-side")
<div class="profile-sidebar">
    <!-- SIDEBAR USERPIC -->
    <div class="profile-userpic">
        <img src="{{base_url()}}public/img/tran.jpg" class="img-responsive" alt="">
    </div>
    <!-- END SIDEBAR USERPIC -->
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">
            Marcus Doe
        </div>
        <div class="profile-usertitle-job">
            Developer
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
                <a href="{{base_url()}}member/quanlyuser">
                    <i class="glyphicon glyphicon-user"></i>
                    Quản lý người dùng </a>
            </li>
            <li>
                <a href="{{base_url()}}member/quanlytin">
                    <i class="glyphicon glyphicon-flag"></i>
                    Quản lý tin </a>
            </li>
            <li>
                <a href="{{base_url()}}member">
                    <i class="glyphicon glyphicon-lock"></i>
                    Thông tin cá nhân </a>
            </li>
        </ul>
    </div>
    <!-- END MENU -->
</div>
@stop
