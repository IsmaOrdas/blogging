import type { Component } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router"
import { lazy } from 'solid-js';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App: Component = () => {
  return <div class="app">
    <header>
      <h1 class="inline-block">Blogging</h1>
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
    </header>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
  </div>
}

export default App;
