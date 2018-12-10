<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ArticleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i = 1; $i <= 8; $i++) {
            DB::table('article_categories')->insert([
                'title' => $faker->sentence(1),
                'color' => $faker->hexcolor(),
                'description' => $faker->paragraph(),
                'parent' => $faker->numberBetween(0, $i - 1),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime()
            ]);
        }
        //
    }
}
