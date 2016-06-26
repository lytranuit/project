@extends("layouts.template")

@section("title")
Trang Đăng nhập
@stop
@section("content")
<div class="container">
    <div class="row">
        <div id="loginbox" class="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
            <div class="panel panel-default" >
                <div class="panel-heading">
                    <div class="panel-title text-center">Đăng nhập</div>
                </div>     
                <div class="panel-body" >
                    <form name="form" id="form" action="{{base_url()}}admin/login" class="form-horizontal"method="POST">
                        @if($message != '')
                        <div class="alert alert-danger">
                            <a class="close" data-dismiss="alert" href="#">×</a>{{$message}}
                        </div>
                        @endif
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="user" type="text" class="form-control" name="identity" value="" placeholder="User">                                        
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                        </div>                                                                  

                        <div class="form-group">
                            <!-- Button -->
                            <div class="col-sm-12 controls">
                                <button type="submit" href="#" class="btn btn-success pull-right"><i class="glyphicon glyphicon-log-in"></i> Đăng nhập</button>                          
                            </div>
                        </div>
                    </form>     
                </div>                     
            </div>  
        </div>
    </div>
</div>
@stop
