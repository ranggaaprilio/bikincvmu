<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
   public function login(Request $request)
   {
       # code...
       $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            // dd($user->name);
            return response()->json([
                'success' => 'true',
                'data'=>['name'=>$user->name,'id'=>Auth::id()],
                'message' => 'Login Accepted'
            ],200);
        }

        return response()->json([
            'success' => 'false',
        ],401);
   }
}
