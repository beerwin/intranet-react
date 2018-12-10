<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Knowledgebase\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('articles', 'Knowledgebase\ArticleController@index')->middleware('auth:api');
Route::get('articles/{article}', 'Knowledgebase\ArticleController@show')->middleware('auth:api');
Route::post('articles', 'Knowledgebase\ArticleController@store')->middleware('auth:api');
Route::put('articles/{article}', 'Knowledgebase\ArticleController@update')->middleware('auth:api');
Route::delete('articles/{article}', 'Knowledgebase\ArticleController@delete')->middleware('auth:api');
