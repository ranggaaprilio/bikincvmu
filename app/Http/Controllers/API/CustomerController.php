<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Model\User;
use App\Http\Model\Education;
use App\Http\Model\UserDetail;
use App\Http\Model\Working;
use App\Http\Model\Skill;
use App\Helper\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user=User::with('generalDetail')->get()
        ->find($id);

        return response()->json(new JsonResponse($user), Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $body=$request->all();
        $userInformation=UserDetail::where('user_id',$id)
        ->update([
            "DOB"=>$body["DOB"],
            "POB"=>$body["POB"],
            "gender"=>$body["gender"],
            "address"=>$body["address"],
            "phone"=>$body["phone"],
            "facebook"=>$body["facebook"],
            "twitter"=>$body["twitter"],
            "instagram"=>$body["instagram"],
            "desc"=>$body["desc"]

        ]);
        if($userInformation){
            $user=User::where('id',$id)
            ->update([
                "email"=>$body["email"],
                "name"=>$body["name"]
            ]);
            return response()->json(new JsonResponse(["Status"=>'Updated',"message"=>'Update Success']), Response::HTTP_OK);
        }else{
            return response()->json(new JsonResponse([],'ID Not Found'), 500);
        }
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Insert or Update table Educate.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_educate(Request $request, $id)
    {
        $body=$request->all();
        // dd(json_encode($body['data']));
      
            $qry=Education::updateOrCreate( ['user_id' => $id],['user_id' => $id,'options' => json_encode($body['data'])]);
            if ($qry) {
                return response()->json(new JsonResponse(["Status"=>'Updated',"message"=>'Update Success']), Response::HTTP_OK);
            } else {
                return response()->json(new JsonResponse(["Status"=>'false']), 500);
            }
        
    }

      /**
     * Display the specified Education.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get_educate($id)
    {
        $user=Education::where('user_id', $id)->first();
        // dd($user);
        if ($user==null) {
            return response()->json(new JsonResponse(["options"=>[]]), Response::HTTP_OK);
        }
        return response()->json(new JsonResponse($user), Response::HTTP_OK);
    }


       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function post_working(Request $request)
    {
        //
        $body=$request->all();
        $working=Working::create([
            'user_id'=>$body['user_id'],
            'company'=>$body['company'],
            'position'=>$body['position'],
            'joindate'=>$body['joindate'],
            'outdate'=>$body['outdate'],
            'isActive'=>$body['isActive']
        ]);
        if($working){
            return response()->json(new JsonResponse($working), Response::HTTP_OK);
        } 
        return response()->json(new JsonResponse([],'Something wrong'), 500);
        

    }


      /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function del_working($id)
    {
        //
        $working=Working::find($id);
        $working->delete();

        if($working){
            return response()->json(new JsonResponse($working), Response::HTTP_OK);
        } 
        return response()->json(new JsonResponse([],'Something wrong'), 500);
        
    }

      /**
     * Display the specified Education.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get_working($id)
    {
        
        $working=Working::all()->where('user_id', $id);

        // dd($working);

        return response()->json(new JsonResponse($working), Response::HTTP_OK);
    }

    public function post_picture(Request $request, $id)
    {
        # code...

         $request->validate([
            'file' => 'required|file|image|mimes:png,jpg,jpeg|max:2048',
        ]);

        $fileName = time().'.'.$request->file->extension();  
   
        //Use Storage Link Before
        
        $userInformation=UserDetail::where('user_id',$id)
        ->update([
            "ProfilePic"=>$fileName,
        ]);
        if($userInformation){
            $request->file->move(public_path('storage/profilPic'), $fileName);
            return response()->json(new JsonResponse($userInformation), Response::HTTP_OK);
        }
        return response()->json(new JsonResponse([],'id not Found'), 500);

        
    }

      /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function post_skill(Request $request)
    {
        //
        $body=$request->all();
        $skill=Skill::create([
            'user_id'=>$body['user_id'],
            'skill'=>$body['skill'],
            'value'=>$body['value'],
            'desc'=>$body['desc'],
        ]);
        if($skill){
            return response()->json(new JsonResponse($skill), Response::HTTP_OK);
        } 
        return response()->json(new JsonResponse([],'Something wrong'), 500);
        

    }

      /**
     * Display the specified Education.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get_skill($id)
    {
        
        $skill=Skill::all()->where('user_id', $id);

        // dd($working);

        return response()->json(new JsonResponse($skill), Response::HTTP_OK);
    }

      /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function del_skill($id)
    {
        //
        $skill=Skill::find($id);
        $skill->delete();

        if($skill){
            return response()->json(new JsonResponse($skill), Response::HTTP_OK);
        } 
        return response()->json(new JsonResponse([],'Something wrong'), 500);
        
    }
}
