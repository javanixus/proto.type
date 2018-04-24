<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    // protected $fillable = ['name', 'username', 'password', 'email'];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
