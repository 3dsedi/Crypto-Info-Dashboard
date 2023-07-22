<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('cryptoData', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name');
            $table->string('symbol');
            $table->decimal('priceUsd', 18, 10);
            $table->unsignedBigInteger('rank');
            $table->decimal('supply', 30, 18);
            $table->decimal('marketCapUsd', 30, 18);
            $table->decimal('volumeUsd24Hr', 30, 18);
            $table->decimal('vwap24Hr', 18, 10)->nullable();
            $table->string('explorer')->nullable(); 
            $table->timestamps();;
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cryptoData');
    }
};
