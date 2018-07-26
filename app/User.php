<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    protected $fillable = [
        'name', 'username', 'avatar',
        'email', 'password', 'role_id',
    ];

    protected $hidden = ['password','role_id'];

    public function profile()
    {
        return $this->hasOne('App\Profile');
    }

    public function student()
    {
        return $this->hasOne('App\Student');
    }

    public function teacher()
    {
        return $this->hasOne('App\Teacher');
    }

    public function role()
    {
        return $this->belongsTo('App\Role');
    }
}
