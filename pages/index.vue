<template>
    <div class="flex flex-col justify-center w-full h-screen max-w-3xl mx-auto space-y-2">
    <div>
        <h1 class="text-2xl">Welcome to the Instax App!</h1>
        <p class="text-lg m-5">Login</p>
    
        <form>
        <fieldset class="mb-4">
            <input 
            type="text" 
            name="username"
            placeholder="username"
            class="w-half h-10 border border-gray-400 rounded-lg px-4"
            />
            
        </fieldset>
        <fieldset>
        <input 
            type="password" 
            name="password"
            placeholder="password"
            class="w-half h-10 border border-gray-400 rounded-lg px-4"
            />
        </fieldset>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
            Login
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
            Register
        </button>
        </form>
        </div>
    </div>
</template>

<script lang="ts">
    definePageMeta({
    layout: 'custom'
    })
</script>
