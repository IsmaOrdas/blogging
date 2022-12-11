import type { Component } from 'solid-js';
import { A } from "@solidjs/router";
import styles from './Nav.module.css'; 

const Nav: Component = () => {
  return (
    <header class={styles.header}>
        <div>
            <h1 class="inline-block my-0 mr-4 font-semibold text-xl">Blogging</h1>
            <nav class='flex'>
                <A class='mr-2' href="/">Home</A>
                <A class="mr-2" href="/about">About</A>
                
            </nav>
        </div>
        <div>
            <A class='btn-secondary' href="/signup">Sign up</A>
        </div>
    </header>
  );
};

export default Nav;
