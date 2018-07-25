<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $clear = DB::table('users')->delete();
        $clear = DB::table('roles')->delete();
        // $clear = DB::table('grades')->delete();
        // $clear = DB::table('study_programs')->delete();

        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        // $this->call(GradesTableSeeder::class);
        // $this->call(StudyProgramsTableSeeder::class);
    }
}
