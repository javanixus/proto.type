<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{

    protected $hidden = ['created_at', 'updated_at', 'id'];

    public function user(){
        return $this->belongsTo('App/User');
    }

    public function profile()
    {
        return $this->morphMany('App\Profile', 'profileable');
    }
}
