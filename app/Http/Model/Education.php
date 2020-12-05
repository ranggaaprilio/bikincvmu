<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    //Table's name
    protected $table = 'education';

    protected $fillable = array('user_id', 'options');

    //Accesor set
    public function getOptionsAttribute($value)
    {
        return json_decode($value);
    }
}
