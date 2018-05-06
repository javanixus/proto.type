<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\StudyProgram as Program;

class StudyProgramsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker::create('Program');

      // Create StudyProgram like Rekayasa Perangkat Lunak.
      Program::insert([
         'program'    => 'Rekayasa Perangkat Lunak',
         'created_at' => $faker->dateTime(),
         'updated_at' => $faker->dateTime(),
      ]);

      Program::insert([
         'program'    => 'Tehnik Komputer Jaringan',
         'created_at' => $faker->dateTime(),
         'updated_at' => $faker->dateTime(),
      ]);

      Program::insert([
         'program'    => 'Multimedia',
         'created_at' => $faker->dateTime(),
         'updated_at' => $faker->dateTime(),
      ]);
    }
}
