<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use User;
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
            $role = 0;
        if (Auth::user()->role == 1) :
            $role = 1;
        elseif(Auth::user()->role == 2) :
            $role = 2;
        endif;

        return response()->json([
                'status' => 'success',
                'token' => $token,
                'role' => $role,
            ]);
    }

    public function forgotpasword (Request $request)
    {

    }

    public function changepassword (Request $request)
    {

    }
}
