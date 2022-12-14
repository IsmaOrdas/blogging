import { Component, createSignal } from 'solid-js';
import {httpClient} from '../common/http/http-client';

const Signup: Component = () => {
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');

    async function submit() {
        try {
            const form = {
                username: username(),
                password: password()
            }
            const response = await httpClient.post('users', form);
            console.log('response', response);
        } catch(e) {
            console.error('error', e);
        }
    }
  return (
    <div class='h-full w-full flex items-center justify-center'>
      <div style="transform: translateY(-100px)">
        <h1 class='mb-8 text-bolder text-3xl'>Sign up</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div class='mb-4'>
              <label class='block' for="username">Username</label>
              <input class='input' type="text" name="username" value={username()} onInput={(e) => setUsername(e.currentTarget.value)}></input>
          </div>
          <div class='mb-4'>
              <label class='block' for="password">Password</label>
              <input class='input' type="text" name="password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)}></input>
          </div>
          <div class='text-center'>
              <button class='btn' onClick={submit}>Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
