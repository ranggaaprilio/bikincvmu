<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Model\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
   public function login(Request $request)
   {
    try {
        
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
          return response()->json([
            'status_code' => 500,
            'message' => 'Unauthorized'
          ]);
        }
        $user = User::where('email', $request->email)->first();
        if ( ! Hash::check($request->password, $user->password, [])) {
           throw new \Exception('Error in Login');
        }
        $tokenResult = $user->createToken('authToken')->plainTextToken;
        return response()->json([
          'status_code' => 200,
          'success'=>'true',
          'user'=>Auth::user(),
          'access_token' => $tokenResult,
          'token_type' => 'Bearer',
        ]);
      } catch (Exception $error) {
        return response()->json([
          'status_code' => 500,
          'message' => 'Error in Login',
          'error' => $error
        ]);
      }
    
   }

   public function CheckToken($id)
   {
    try {
        $user=User::where('id', $id)->first();
        return response()->json([
          'status_code' => 200,
          'success'=>'true',
          'user'=> $user,
        ]);
      } catch (Exception $error) {
        return response()->json([
          'status_code' => 500,
          'message' => 'Error in Login',
          'error' => $error
        ]);
      }
    
   }
}
