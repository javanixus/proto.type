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

    public function setPasswordAttribute($value)
    {
        return $this->attributes['password'] = bcrypt($value);
    }

    protected $fillable = [
        'name', 'role', 'username', 'password','email'
    ];

    public function student()
    {
        return $this->hasOne(Student::class);
    }

    public function studyprogram()
    {
        return $this->hasOne(StudyProgram::class);
    }

    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }

    public function team()
    {
        return $this->belongsToMany(Team::class);
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'user_id'
    ];
}
