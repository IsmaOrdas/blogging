import type { Component } from 'solid-js';

const Signup: Component = () => {
  return (
    <div class='h-full w-full flex items-center justify-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class='mb-4'>
            <label class='block' for="username">Username</label>
            <input class='input' type="text" name="username"></input>
        </div>
        <div class='mb-4'>
            <label class='block' for="password">Password</label>
            <input class='input' type="text" name="password"></input>
        </div>
        <div class='text-center'>
            <button class='btn'>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
