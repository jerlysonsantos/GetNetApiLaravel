<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  public function doLogin(Request $request) {
    try {
      $validator = Validator::make($request->all(), [
        'email' => 'required|email|max:60',
        'password' => 'required',
      ], [
        'email.required' => 'Email Necessário',
        'email.email' => 'Email Inválido',
        'password.required' => 'Email Necessário',
      ]);

      if ($validator->fails()) {
        return response($validator->errors(), 400);
      } else {
        return response('Works', 200);
      }
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }
}
