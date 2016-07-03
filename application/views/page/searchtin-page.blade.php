@extends("layouts.right")

@section("title")
Website @parent
@stop
@section("content")
@include("include.searchtin")
@stop
@section("right-side")
@include("include.sidebar-right")
@stop
