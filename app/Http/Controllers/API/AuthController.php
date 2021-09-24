<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Model\User;
use App\Http\Model\UserDetail;
use Illuminate\Http\Response;
use App\Helper\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

      /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
      try {
        $jsonData=$request->only('name','email','pass');
        $user=User::create([
            'name' => $jsonData['name'],
            'email' => $jsonData['email'],
            'password' => Hash::make($jsonData['pass']),
            'role_id'=>2,
        ]);
       
        if($user){
            UserDetail::create([
                'user_id'=>$user->id
            ]);
            return response()->json(new JsonResponse(["msg"=>"Register Successfull,please login..","success"=>'true']), Response::HTTP_OK);
            
        }
      } catch (\Throwable $th) {
        dd($th);
        return response()->json(new JsonResponse([],'Regist Failed Found'), 500);
      }
        
      

    }

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

       /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $id=Auth::user()->id;
        if($request->user()->tokens()->where('tokenable_id', $id)->delete()){
            return response()->json((new JsonResponse(["success"=>true,"message"=>"Sign Out Success"])), Response::HTTP_OK);
        }else{
            return response()->json((new JsonResponse(["message"=>"Token is not Registered"])), Response::HTTP_UNAUTHORIZED);
        }
        
    }
}
