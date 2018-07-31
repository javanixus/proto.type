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
    // ROLE
    Route::get('roles', 'RoleController@index');
    Route::post('roles/create', 'RoleController@store');
    Route::get('roles/{id}', 'RoleController@show');
    Route::patch('roles/{id}', 'RoleController@update');
    Route::delete('roles/{id}', 'RoleController@destroy');

    // USERS
    Route::get('users', 'UserController@index');
    Route::post('users/create', 'UserController@store');
    Route::get('users/{id}', 'UserController@show');
    Route::patch('users/{id}', 'UserController@update');
    Route::delete('users/{id}', 'UserController@destroy');

    // STUDENT
    Route::get('students', 'StudentController@index');
    Route::post('students/create', 'StudentController@store');
    Route::get('students/{id}', 'StudentController@show');
    Route::patch('students/{id}', 'StudentController@update');
    // buat nis->profile idnya dan type orm , dengan user_id

    // TEACHER
    Route::get('teachers', 'TeacherController@index');
    Route::post('teachers/create', 'TeacherController@store');
    Route::get('teachers/{id}', 'TeacherController@show');
    Route::patch('teachers/{id}', 'TeacherController@update');
});


