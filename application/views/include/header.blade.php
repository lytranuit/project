<header id="header">
    <nav class="navbar navbar-inverse content-underlay" role="banner" style="    background-image: linear-gradient(to bottom,#428bca,#2d7da4);
         box-shadow: 0px 7px 52px rgba(243, 243, 243, 0.62);
         z-index: 2;
         background: #428bca;">
        <div class="container" style="position: relative;">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{base_url()}}"><img style='width:100px;vertical-align: baseline;' src="{{base_url()}}public/img/logo.jpg" alt="logo"></a>
            </div>

            <div class="collapse navbar-collapse navbar-right">
                <ul class="nav navbar-nav">
                    <li><a href="{{base_url()}}">Trang chủ</a></li>
                    <li><a href="{{get_url_seo("index/gioithieu")}}">Giới thiệu</a></li>
                    <li><a href="{{get_url_seo("index/searchtin")}}">Bất động sản</a>

                    </li>
                    <li><a href="{{get_url_seo("index/searchtintuc")}}">Tin tức</a></li>
                    @if(!$is_login)
                    <li class="dangnhap">
                        <a data-toggle="modal" data-target="#myModal"class="btn btn-success">Đăng nhập</a>
                    </li>
                    @else
                    <li class="account dropdown">
                        <a id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <img src="{{base_url()}}public/img/testimonial-dummy1.jpg" style='width:30px;height: 30px;border-radius: 50%;'/>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dLabel">
                            <li> 
                                <a href="{{get_url_seo("member/index")}}">Quản lý tài khoản</a>
                            </li>
                            <li>
                                <a href="{{get_url_seo("member/dangtin")}}">Đăng tin</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="{{get_url_seo("index/logout")}}">Đăng xuất</a>
                            </li>

                        </ul>
                    </li>
                    @endif
                </ul>
            </div>
            <?php
//            echo $widget->searchtop();
            ?>
        </div><!--/.container-->
    </nav><!--/nav-->
    <div class="modal fade" id="myModal" tabindex="10" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">x</button>
                    <h3>Đăng nhập</h3>
                </div>
                <div class="modal-body">
                    <form role="form" action="{{get_url_seo("index/login")}}" method="post">
                        <!--                        <div class="alert alert-danger">
                                                    <a class="close" data-dismiss="alert" href="#">×</a>Incorrect Username or Password!
                                                </div>-->
                        <div style="margin-bottom: 12px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="login-username" type="text" class="form-control" name="identity" value="" placeholder="username or email">                                        
                        </div>

                        <div style="margin-bottom: 12px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input id="login-password" type="password" class="form-control" name="password" placeholder="password">
                        </div>

                        <div class="input-group">
                            <div class="checkbox" style="margin-top: 0px;">
                                <label>
                                    <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-success">Đăng nhập</button>

                        <hr style="margin-top:10px;margin-bottom:10px;" >

                        <div class="form-group">

                            <div style="font-size:85%">
                                Bạn chưa có account? 
                                <a href="{{get_url_seo("index/signin")}}">
                                    Đăng ký ở đây
                                </a>
                            </div>

                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</header><!--/header-->
<script type="text/javascript">
    $(document).ready(function () {
        $("#header .navbar-nav > li a[href='{{current_url()}}']").parent().addClass("active");
    });
</script>