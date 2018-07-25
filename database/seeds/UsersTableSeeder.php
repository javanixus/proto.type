<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('App\User');

        DB::table('users')->insert([
            'name' => 'choirul',
            'username' => 'irul',
            'email' => 'choirul@gmail.com',
            'avatar' => 'choirul.jpg',
            'password' => 'secret',
            'role_id' => '1',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        DB::table('users')->insert([
            'name' => 'fahmi',
            'username' => 'pampam',
            'email' => 'fahmi@gmail.com',
            'avatar' => 'fahmi.jpg',
            'password' => 'secret',
            'role_id' => '2',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        DB::table('users')->insert([
            'name' => 'hilman',
            'username' => 'maman',
            'email' => 'hilman@gmail.com',
            'avatar' => 'hilman.jpg',
            'password' => 'secret',
            'role_id' => '3',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        DB::table('users')->insert([
            'name' => 'dwiki',
            'username' => 'wiki',
            'email' => 'dwiki@gmail.com',
            'avatar' => 'dwiki.jpg',
            'password' => 'secret',
            'role_id' => '3',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        DB::table('users')->insert([
            'name' => 'arya',
            'username' => 'markoyak',
            'email' => 'arya@gmail.com',
            'avatar' => 'arya.jpg',
            'password' => 'secret',
            'role_id' => '3',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        DB::table('users')->insert([
            'name' => 'dhika',
            'username' => 'cacing',
            'email' => 'dhika@gmail.com',
            'avatar' => 'dhika.jpg',
            'password' => 'secret',
            'role_id' => '3',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

    }
}
