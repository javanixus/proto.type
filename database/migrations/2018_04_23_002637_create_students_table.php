<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->string('nis')->nullable();
            $table->string('avatar')->nullable();
            $table->string('quotes')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('grade');

            $table->unsignedInteger('study_program_id')->nullable();
            $table->foreign('study_program_id')->references('id')->on('study_programs');

            $table->enum('gender',['male', 'female']);

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
