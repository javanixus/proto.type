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
                $user = $user->load('teacher');
            } elseif($user->role->name == 'student') {
                $user->load('student');
            }
        }

        return response()->json($users , 200);
    }

    public function store(Request $request)
    {
        // $role tergantung $request->role pada pilihan inputan : 1. admin, 2. teacher, 3.student
        $role = Role::find('3');

        $role->users()->create([
            'name' => 'ccccc',
            'username' => 'ccccc',
            'email' => 'ccccc@gmail.com',
            'avatar' => 'ccccc.jpg',
            'password' => 'ccccc123',
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
            'name'  => 'lovebird.jpg',
            'avatar'  => 'lovebird.jpg',
        ]);

            //  membutuhkan validasi pada email
            // 'email'  => 'love',
            // 'password'  => 'love',

        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json('user deleted', 200);
    }
}
