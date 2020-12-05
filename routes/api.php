<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('API')->group(function() {

    Route::post('auth/login', 'AuthController@login');
    Route::post('auth/regist', 'AuthController@register');
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('auth/check/{id}', 'AuthController@CheckToken');
        Route::resource('user', 'CustomerController');
        Route::post('auth/logout', 'AuthController@logout');
        Route::put('education/{id}','CustomerController@update_educate');
        Route::get('education/{id}','CustomerController@get_educate');
        Route::get('working/{id}','CustomerController@get_working');
        Route::post('working','CustomerController@post_working');
        Route::delete('working/{id}','CustomerController@del_working');
        Route::put('picture/{id}','CustomerController@post_picture');
        Route::post('skill','CustomerController@post_skill');
        Route::get('skill/{id}','CustomerController@get_skill');
        Route::delete('skill/{id}','CustomerController@del_skill');
    });
});
