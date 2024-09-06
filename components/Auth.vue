<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
/*   try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  }  */
    try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })}
    catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Registration Form</h1>
      <p class="description">Register your User:</p>
      <div>
        <input class="inputField" type="text" placeholder="First Name" v-model="name" />
      </div>
      <div>
        <input class="inputField" type="text" placeholder="Last Name" v-model="name" />
      </div>
      <div>
        <input class="inputField" type="email" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Register'" 
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>