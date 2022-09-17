<?php

use Illuminate\Database\Seeder;
use \App\Http\Model\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name'  => 'admin',
            'email' => 'admin@bikincvmu.com',
            'password'  => bcrypt('password'),
            'role_id'=>1
    ]);
    }
}