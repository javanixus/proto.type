<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //

    public function ProjectFile()
    {
        return $this->hasOne('App\ProjectFile');
    }

    public function Team()
    {
        return $this->belongsTo('App\Team');
    }
}
