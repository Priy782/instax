<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container">
    <Accounts v-if="user" />
    <Auth v-else />

  </div>
</template>


 <!-- <template>
  <div class="registration-form">
    <h1>User Registration</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";

const client = useSupabaseAuthClient();
const email = ref("");
const password = ref("");

async function registerUser() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;


    successMsg.value = "Check your email for confirmation";
  } catch (error) {
    errorMsg.value = "Error signing up";
  }
}
</script> -->