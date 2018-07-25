<?php

/*
|--------------------------------------------------------------------------
| Web Routes Prefix
|--------------------------------------------------------------------------
| create = To create a resource
| update = To update the existing resource
| show = To get specific resource
| delete = To delete the existing resource
|
*/
Route::prefix('v1')->group(function () {
    // role
    Route::get('roles', 'RoleController@index');
    Route::get('roles/create', 'RoleController@store');
    Route::get('roles/show/{id}', 'RoleController@show');
    Route::get('roles/update/{id}', 'RoleController@update');
    Route::get('roles/delete/{id}', 'RoleController@destroy');

    // user
    Route::get('users', 'UserController@index');
    Route::get('users/create', 'UserController@store');
    Route::get('users/show/{id}', 'UserController@show');
    Route::get('users/delete/{id}', 'UserController@destroy');
    Route::get('users/update/{id}', 'UserController@update');

    // student
    Route::get('students', 'StudentController@index');
    Route::get('students/create', 'StudentController@store');
    Route::get('students/update/{id}', 'StudentController@update');
    Route::get('students/show/{id}', 'StudentController@show');
    // buat nis->profile idnya dan type orm , dengan user_id

});

// FRONT END
Route::get('/{any}', 'SpaController@index')->where('any', '.*');
