<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Grade;

class GradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('App\Grade');

        // Create Grade Like X, XI, XII
        $x = Grade::insert([
            'grade' => 'X',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        $xi = Grade::insert([
            'grade' => 'XI',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

        $xii = Grade::insert([
            'grade' => 'XII',
            'created_at' => $faker->dateTime(),
            'updated_at' => $faker->dateTime(),
        ]);

    }
}
