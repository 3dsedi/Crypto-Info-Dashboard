<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use App\Models\CryptoData;

class ApiController extends Controller
{
    public function fetchAndSaveCryptoData()
    {
        try {
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
            } else {
                $databaseData = $this->getDatabaseData();
                if (!empty($databaseData)) {
                    return response()->json(['message' => 'Using data from database', 'data' => $databaseData]);
                } else {
                    return response()->json(['message' => 'Failed to fetch data from API and no data available in the database'], 500);
                }
            }
        } catch (\Exception $e) {
            $databaseData = $this->getDatabaseData();
            if (!empty($databaseData)) {
                return response()->json(['message' => 'An error occurred but using data from the database', 'data' => $databaseData]);
            } else {
                return response()->json(['message' => 'An error occurred and no data available in the database'], 500);
            }
        }
    }

    private function getDatabaseData()
    {
        return CryptoData::all()->toArray();
    }
}
