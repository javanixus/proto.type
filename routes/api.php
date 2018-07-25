<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteerviceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix'=>'v1'], function(){
    // role
    Route::get('roles', 'RoleController@index');
    Route::get('roles/{id}', 'RoleController@show');
    Route::post('roles/create', 'RoleController@store');
    Route::patch('roles/update/{id}', 'RoleController@update');
    Route::delete('roles/delete/{id}', 'RoleController@destroy');

    // user
    Route::get('users', 'UserController@index');
    Route::get('users/{id}', 'UserController@show');
    Route::post('users/create', 'UserController@store');
    Route::patch('users/update/{id}', 'UserController@update');
    Route::delete('users/delete/{id}', 'UserController@destroy');
});


