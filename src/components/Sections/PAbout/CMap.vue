<template>
    <div class="py-10 map bg-map max-md:bg-none text-white bg-dark-150">
        <div class="container my-5 w-50% max-lg:w-full">
        <p class="text-4xl font-bold max-md:text-center">Our Mission</p>
        <p class="text-lg my-4 w-[60%] max-lg:text-center max-lg:w-full">Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary rulers, artists, and architects who left their mark on the region.</p>
        <p class="text-xl font-semibold">Our supporters</p>
        <ul class="py-4 w-[50%] max-lg:w-full">
            <li class="flex items-center mb-4 p-3 bg-dark-250 border border-gray-20 rounded-xl relative">
                <img src="/images/Sections/CAbout/coat_of_arms.svg" class="mr-2" alt="">
                Ministry of Tourism and Cultural <br> Heritage of the Republic of Uzbekistan 
                <img src="/images/Sections/CAbout/coat_armBg.svg" class="absolute right-0 bottom-0" alt="">
            </li>
            <li class="flex items-center p-3 bg-dark-250 border border-gray-20 rounded-xl relative">
                <img src="/images/Sections/CAbout/Layer 2.svg" class="mr-2" alt="">Organization of Turkic states
                <img src="/images/Sections/CAbout/layerBg.svg" class="absolute right-0 bottom-0" alt="">
            </li>
        </ul>
    </div>
    </div>
</template>
<style>
    .map{
        background-image: url('/images/Sections/CAbout/worldMap.svg');
        background-repeat: no-repeat;
        background-position: right;
        background-size: 65%;
    }
    @media screen and (max-width: 1024px) {
        .map{
            background-image: none;
        }
    }
</style>