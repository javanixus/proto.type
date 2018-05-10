<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login (Request $request)
    {
        $data = $request->only(['username' => 'username', 'password' => 'password']);

        return response()->json($data, 200);
    }

    public function forgotpasword (Request $request)
    {

    }

    public function changepassword (Request $request)
    {

    }
}
