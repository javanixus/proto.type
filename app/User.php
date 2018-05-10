<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;



class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'name', 'email', 'password',
    ];


    public function student(){
        return $this->hasOne('App/Student');
    }

    public function studyprogram(){
        return $this->hasOne('App/StudyProgram');
    }

    public function teacher(){
        return $this->hasOne('App/Teacher');
    }

    public function grade(){
        return $this->hasOne('App/Grade');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
