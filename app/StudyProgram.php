<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudyProgram extends Model
{
    //git
    public function user(){
        return $this->belongsTo('App\User');
    }
}