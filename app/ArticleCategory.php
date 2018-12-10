<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleCategory extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['title','color','description','parent'];

    public function Articles() {
        return $this->hasMany('App\Article','category','id');
    }

    public function Children() {
        return $this->hasMany('App\ArticleCategory','parent','id');
    }

    public function Parent() {
        return $this->belongsTo('App\ArticleCategory','parent');
    }
}
