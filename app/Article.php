<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use SoftDeletes;

    protected $table = 'articles';

    protected $dates = ['deleted_at'];

    protected $fillable = ['name','slug','content','category'];

    public function Category() {
        return $this->belongsTo('App\ArticleCategory','category');
    }
}
