<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\JsonResponse;
use App\Models\CryptoData;

class ApiController extends Controller
{
    public function fetchAndSaveCryptoData()
    {
        $response = Http::get('https://api.coincap.io/v2/assets');

        if ($response->successful()) {
            $data = $response->json()['data'];
            return response()->json(['message' => 'Data fetched successfully', 'data' => $data]);
            foreach ($data as $crypto) {
                CryptoData::updateOrCreate(
                    ['id' => $crypto['id']],
                    [
                        'name' => $crypto['name'],
                        'symbol' => $crypto['symbol'],
                        'priceUsd' => $crypto['priceUsd'],
                        'rank' => $crypto['rank'],
                        'supply' => $crypto['supply'],
                        'marketCapUsd' => $crypto['marketCapUsd'],
                        'volumeUsd24Hr' => $crypto['volumeUsd24Hr'],
                        'vwap24Hr' => $crypto['vwap24Hr'],
                        'explorer' => $crypto['explorer']

                    ]
                );
            }
        }

        return response()->json(['message' => 'Failed to fetch data from API'], 500);
    }
}

//     
