<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Teacher;
use App\User;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teacher = Teacher::with('user', 'user.role')->get();
        if ($teacher != null) {
            return response()->json($teacher,200);
        } else {
            return response()->json([
                'info' => 'tidak ada data guru',
            ], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Example user_id || aslinya dari id user yang sedang login
        // $id = Auth::user->id;

        $user = User::find(8);
        $user->teacher()->create([
            'nip' => $request->nip,
        ]);

        return response()->json($user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $teacher = Teacher::where('user_id', $id)->with(['user', 'user.role'])->first();
        if ($teacher != null )
        {
            return response()->json($teacher, 200);
        } else {
            return response()->json([
                'info' => 'tidak guru dengan id '.$id,
            ], 200);
        }
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
        $user = User::find($id);
        $user->teacher()->update([
             'nip' => $request->nip,
        ]);

        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         // kosong karena profile hanya bisa dibuat dan diupdate
        // untuk penghapusan menurut pada parent relationya.
    }
}
