<?php

namespace App\Http\Controllers\Knowledgebase;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Article;

class ArticleController extends Controller
{
    public function index() {
        return Article::with('Category')->get();
    }

    public function show(Article $article) {
        return $article->load('Category');
    }

    public function store(Request $request) {
//        dd($request);
        $article = Article::create($request->all());
        return response()->json($article->load('Category'), 201);
    }

    public function update(Request $request, Article $article) {
        $article->update($request->all());

        return response()->json($article->load('Category'), 200);
    }

    public function delete(Article $article) {
        $article->delete();

        return response()->json(null, 204);
    }
}
