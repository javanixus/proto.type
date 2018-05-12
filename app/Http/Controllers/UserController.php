<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User as User;
use App\Teacher as Teacher;
// use App\Student as Student;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->role == 0) {

            $user = User::create($request->all());

        } elseif($request->role == 1) {

            $userid = User::create($request->all())->id;
            $userfind = User::find($userid);
            $teacher = New Teacher($request->only([
                'phone',
                'gender',
                'avatar',
                'user_id' => $userid,
            ]));

            $insert = $userfind->teacher()->save($teacher);

        } else {

            $userid = User::create($request->all())->id;
            $userfind = User::find($userid);
            $teacher = New Teacher($request->only([
                'phone',
                'gender',
                'avatar',
                'user_id' => $userid,
            ]));

        }
        return response()->json($teacher, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = User::findOrFail($id);

        return response()->json($user, 200);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
