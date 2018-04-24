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

            $table->string('nis');
            $table->string('avatar')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('bio')->nullable();
            $table->enum('gender',['male', 'female']);


            $table->timestamps();
        });

        Schema::table('students', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
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
