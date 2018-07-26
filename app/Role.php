<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];
    protected $hidden = ['created_at', 'updated_at', 'id'];

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
