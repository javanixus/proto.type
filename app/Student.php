<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'quotes', 'phone', 'avatar', 'gender',
        'address', 'grade', 'program_id', 'nis'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
