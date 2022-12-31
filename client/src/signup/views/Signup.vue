<template>
    <div class='h-full w-full flex items-center justify-center'>
      <div style="transform: translateY(-100px)">
        <h1 class='mb-8 text-bolder text-3xl'>Sign up</h1>
        <form>
          <div class='mb-4'>
              <label class='block' for="username">Username</label>
              <input class='input' type="text" name="username" />
          </div>
          <div class='mb-4'>
              <label class='block' for="password">Password</label>
              <input class='input' type="text" name="password" />
          </div>
          <div class='text-center'>
              <button class='btn'>Create account</button>
          </div>
        </form>
      </div>
    </div>
</template>