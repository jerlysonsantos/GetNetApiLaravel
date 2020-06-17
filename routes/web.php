<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'app');

Route::prefix('auth')->group(function () {
  Route::post('doLogin', 'AuthController@doLogin');
});

Route::prefix('getnetapi')->group(function () {
  Route::get('index', 'GetNetAPI@index');
  Route::post('transaction', 'GetNetAPI@buyTest');
});

Route::prefix('product')->group(function () {
  Route::get('index', 'ProductController@index');
  Route::post('createProduct', 'ProductController@createProduct');
  Route::post('updateProduct/{id}', 'ProductController@updateProduct');
  Route::get('destroyProduct/{id}', 'ProductController@destroyProduct');
});
