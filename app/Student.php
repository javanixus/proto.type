<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $touches = ['user'];

    protected $fillable = ['nis'];

    protected $hidden = ['created_at', 'updated_at','id', 'user_id'];

    public function user(){
        return $this->belongsTo('App\User');
    }

}
