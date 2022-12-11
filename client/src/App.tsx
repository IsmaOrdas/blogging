import type { Component } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router"
import { lazy } from 'solid-js';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Signup = lazy(() => import("./signup/Signup"));
import Nav from './common/components/Nav/Nav';

const App: Component = () => {
  return <div class="app">
    <Nav></Nav>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
      <Route path="/signup" component={Signup} />
    </Routes>
  </div>
}

export default App;
