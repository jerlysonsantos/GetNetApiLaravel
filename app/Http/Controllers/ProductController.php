<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  public function index() {
    $products = Product::orderby('created_at', 'desc')->paginate(10);
    return $products;
  }

  public function createProduct(Request $request) {
    try {
      $exist = Product::where('name', '=', $request->name)->first();
      if ($exist !== null) {
        return response('Produto já cadastrado', 400);
      }

      $product = new Product;
      $product->name = $request->name;
      $product->description = $request->description;
      $product->amount = $request->amount;
      $product->type= $request->type;
      $product->save();
      return response('Produto cadastrado com Sucesso', 200);
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  public function updateProduct(Request $request, $id) {
    try{
      $product = Product::findOrFail($id);

      if ($product == null) {
        return response('Produto não existe', 400);
      }

      $product->name = $request->name;
      $product->description = $request->description;
      $product->amount = $request->amount;
      $product->type= $request->type;
      $product->save();

      return response('Atualizado com Sucesso!', 200);
    }catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  public function destroyProduct($id) {
    $product = Product::findOrFail($id);

    if ($product == null) {
      return response('Produto não existe', 400);
    }

    $product->delete($id);

    return response('Produto apagado com Sucesso!', 200);
  }
}
