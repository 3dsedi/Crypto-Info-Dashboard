<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CryptoData extends Model
{
    use HasFactory;
    protected $table = 'cryptoData';

    protected $fillable = [
        'id',
        'name',
        'symbol',
        'priceUsd',
        'rank',
        'supply',
        'marketCapUsd',
        'volumeUsd24Hr',
        'vwap24Hr',
        'explorer',
    ];


}
