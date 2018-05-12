<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTException;
use JWTAuth;

class AuthController extends Controller
{
    public function login (Request $request)
    {
        $credentials = $request->all();
         if ( ! $token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
    }
    return response()->json([
            'status' => 'success',
            'token' => $token
        ]);
    }

    public function forgotpasword (Request $request)
    {

    }

    public function changepassword (Request $request)
    {

    }
}
