<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\User;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::get();

        if ($roles != null) {
            return response()->json($roles, 200);
        }

        return response()->json([
            'info' => 'roles is empty',
        ], 200);
    }

    public function store(Request $request)
    {
        $role = Role::create([
            'name' => $request->name,
        ]);

        if ($role ===  $role) {
            return response()->json([
             'info' => $request->name . ' role created',
            ], 201);
        }

        return response()->json([
            'info' => 'creating ' . $request->name . ' role fail',
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::find($id);
        if ($role != false) {
            if ($role->users->count() > 0 ) {
                $data = [
                    'name' => $role->name,
                    'users' => $role->users ,
                ];
            } else {
                $data = [
                    'name' => $role->name,
                    'users' => 'users is empty' ,
                ];
            }
            return response()->json($data, 200);
        }

            return response()->json([
                'info' => 'tidak ada data dengan id '. $id,
            ], 200);
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
        $role = Role::find($id);
        $role->update($request->all());

        return response()->json($role, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::find($id);
        $role->delete();

        return response()->json('role deleted', 200);
    }
}
