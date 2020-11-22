<?php

use Illuminate\Database\Seeder;
use \App\Http\Model\User;

class UsersTableSeeder extends Seeder
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
            'name'  => 'user',
            'email' => 'user@bikincvmu.com',
            'password'  => bcrypt('password')
    ]);
    }
}
