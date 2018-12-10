<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i = 0; $i < 50; $i++) {
            $title = $faker->sentence();
            DB::table('articles')->insert([
                'name' => $title,
                'slug' => str_slug($title,'-'),
                'content' => implode(' ',$faker->paragraphs()),
                'category' => $faker->numberBetween(1,8),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime()
            ]);
        }
    }
}
