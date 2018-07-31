<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{

    protected $hidden = ['created_at', 'updated_at', 'id', 'user_id'];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
