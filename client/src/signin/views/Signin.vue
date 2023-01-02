<template>
  <div class='h-full w-full flex items-center justify-center'>
    <div>
      <h1 class='mb-8 text-bolder text-3xl'>Sign in</h1>
      <form @submit.prevent>
        <div class='mb-4'>
            <label class='block' for="username">Username</label>
            <input class='input' type="text" name="username" v-model="form.username" />
        </div>
        <div class='mb-4'>
            <label class='block' for="password">Password</label>
            <input class='input' type="text" name="password" v-model="form.password" />
        </div>
        <div class='text-center' @click="login">
            <button class='btn'>Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { UserForm } from "../../common/types";
import { signinUser } from "../../common/composables/login";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref<UserForm>({
  username: "",
  password: ""
})

async function login() {
  try {
    const logged = await signinUser(form.value);

    if (logged) {
      await router.push("/")
    }
  } catch(e) {
    console.error(e);
  }
}
</script>
