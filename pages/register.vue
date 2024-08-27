<template>
    <div class="flex flex-col justify-center h-screen max-w-3xl mx-auto space-y-2">
    <div>
        <h1 class="text-2xl">Register @ Instax!</h1>
    </div>
    <fieldset class="mb-4 flex-col justify-center align-middle">
        <input 
            type="text" 
            name="Surname"
            placeholder="Surname"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
            <input 
            type="text" 
            name="Name"
            placeholder="Name"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
     </fieldset> 
     <fieldset class="mb-4 flex-col justify-center align-middle w-full">
        <input 
            type="text" 
            name="Street"
            placeholder="Street"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
     </fieldset> 
     <fieldset class="mb-4 flex-col justify-center align-middle">
        <input 
            type="text" 
            name="PLZ"
            placeholder="PLZ"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
            <input 
            type="text" 
            name="Location"
            placeholder="Location"
            class="h-10 border border-gray-400 rounded-lg px-4"
            />
     </fieldset>      
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded">
                Submit
            </button>

    </div>
</template>