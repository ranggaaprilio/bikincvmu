<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProfilePicColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('users_information', function (Blueprint $table) {
            //
            $table->string('ProfilePic')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('users_information', function (Blueprint $table) {
            //
             // 2. Drop the column
             $table->dropColumn('ProfilePic');
        });
    }
}
