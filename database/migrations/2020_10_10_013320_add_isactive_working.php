<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsactiveWorking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('working', function (Blueprint $table) {
            //
            $table->enum('isActive', ['yes', 'no']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('working', function (Blueprint $table) {
            //
             // 2. Drop the column
             $table->dropColumn('isActive');
        });
    }
}
