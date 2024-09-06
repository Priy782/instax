<template>
    <div class="flex flex-col w-full min-h-screen bg-blue-100">
        <header class="w-full bg-blue-800">
            <nav class="flex justify-center w-full h-full text-center items-center text-black">
                <img src="/images/logo.png" class="h-16 mr-5" >
                <h2 class="text-3xl font-light text-white">INSTAX</h2> 
                <NuxtLink to="/"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Login
                </button></NuxtLink>
                <NuxtLink to="/home">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Home
                </button></NuxtLink>
            </nav>
            
        </header>
        <main class="flex-grow justify-center items-center align-baseline">
            <slot />
        </main>
        <footer class="flex items-center justify-center w-full h-16 text-black">
            <p class="text-gray-700">
                &copy Instax - Priyatama Brack - {{ new Date().getFullYear() }}
            </p>
        </footer>
    </div>
</template>

