<template>
    <div class="flex flex-col justify-center align-middle w-full min-h-screen max-w-3xl mx-auto space-y-2">
   
     <div class="flex flex-col justify-center align-middle">
        <h1 class="text-2xl">Welcome to the Instax App!</h1>
        <p class="text-lg m-5">Login</p>
    
        <form>
        <fieldset class="mb-4 justify-center align-middle">
            <input 
            type="text" 
            name="username"
            placeholder="username"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
            
        </fieldset>
        <fieldset>
        <input 
            type="password" 
            name="password"
            placeholder="password"
            class=" h-10 border border-gray-400 rounded-lg px-4"
            />
        </fieldset>
        <NuxtLink to="/home">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
                Login
            </button>
        </NuxtLink>
        <NuxtLink to="/register">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
                Register
            </button>
        </NuxtLink>
        <NuxtLink to="/about">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
                About
            </button>
         </NuxtLink>
        </form>
        </div>
        </div>

</template>

<script lang="ts">
    definePageMeta({
    layout: 'default'
    })
</script>
