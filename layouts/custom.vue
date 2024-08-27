<template>
    <div class="flex flex-col w-full h-screen overflow-hidden bg-blue-100">
        <header class="w-full h-16 bg-blue-800">
            <nav class="flex items-center justify-center w-full h-full text-center text-black">
                <img src="/images/logo.png" class="h-16 mr-5" >
                <h2 class="text-3xl font-light text-white">INSTAX</h2> 
            </nav>
        </header>
        <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
            <slot />
        </main>
        <footer class="flex items-center justify-center w-full h-16 text-black">
            <p class="text-gray-700">
                &copy EasyTax - Priyatama Brack - {{ new Date().getFullYear() }}
            </p>
        </footer>
    </div>
</template>

