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

        $user = User::where('email', '=', $request->email)->first();
        if ($user === null) {
          return response('Usuário não existe', 400);
        }

        if ($user->password !== $request->password) {
          return response('As senhas não batem', 400);
        }

        return response()->json(['user' => $user], 200);
      }
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  public function doRegister(Request $request) {
    try {
      $validator = Validator::make($request->all(), [
        'name' => 'required|max:60',
        'email' => 'required|email|max:60',
        'password' => 'required',
      ], [
        'email.required' => 'Email Necessário',
        'email.email' => 'Email Inválido',
        'email.max' => 'Email Atingiu o valor maximo',
        'name.max' => 'Username Atingiu o valor maximo',
        'name.required' => 'Usuario Necessário',
        'password.required' => 'Senha Necessário',
      ]);

      if ($validator->fails()) {
        return response($validator->errors(), 400);
      } else {

        $exist = User::where('email', '=', $request->email)->first();
        if ($exist !== null) {
          return response('Usuário já cadastrado', 400);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        return response()->json(['user' => $user], 200);
      }
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }
}
