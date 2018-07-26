<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\User;
use App\Profile;

class UserController extends Controller
{

    public function index()
    {
        $users = User::with('role')->get();
        foreach ($users as $user) {
            if($user->role->name == 'teacher') {
                $profile = $user->load('teacher');
            } elseif($user->role->name == 'student') {
                $profile = $user->load('student');
            }
        }

        return response()->json($users , 200);
    }

    public function store(Request $request)
    {
        // $role tergantung $request->role pada pilihan inputan : 1. admin, 2. teacher, 3.student

        $role = Role::find($request->role);

        $role->users()->create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'avatar' => $request->avatar,
            'password' => $request->password,
        ]);

        return response()->json($role->name . ' created', 200);
    }

    public function show($id)
    {
        $user = User::with('role')->find($id);
        if($user->role->name == 'teacher') {
            $user = $user->load('teacher');
        } elseif($user->role->name == 'student') {
            $user = $user->load('student');
        }

        return response()->json($user, 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->update([
            'name'  => $request->name,
            'username'  => $request->username,
            'password'  => $request->password,
            'email'  => $request->email,
        ]);

        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json('user deleted', 200);
    }
}
