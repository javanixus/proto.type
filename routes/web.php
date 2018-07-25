<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// role
Route::get('role', 'RoleController@index');
Route::get('role/create', 'RoleController@store');
Route::get('role/show/{id}', 'RoleController@show');
Route::get('role/update/{id}', 'RoleController@update');
Route::get('role/delete/{id}', 'RoleController@destroy');

// user
Route::get('user', 'UserController@index');
Route::get('user/create', 'UserController@store');
Route::get('user/show/{id}', 'UserController@show');
Route::get('user/delete/{id}', 'UserController@destroy');
Route::get('user/update/{id}', 'UserController@update');

// student
Route::get('student', 'StudentController@index');
Route::get('student/create', 'StudentController@store');
Route::get('student/update/{id}', 'StudentController@update');
Route::get('student/show/{id}', 'StudentController@show');
// buat nis->profile idnya dan type orm , dengan user_id

// FRONT END
Route::get('/{any}', 'SpaController@index')->where('any', '.*');
