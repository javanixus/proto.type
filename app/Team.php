<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    //


    public function Project()
    {
        return $this->hasOne('App\Project');
    }

    public function Task()
    {
        return $this->belongsTo('App\Task');
    }

    public function User()
    {
        return $this->hasMany('User');
    }
}
