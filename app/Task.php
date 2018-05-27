<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    public function Team()
    {
        return $this->hasMany('App\Team');
    }
}
