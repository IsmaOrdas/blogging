import { Component, Suspense } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router"
import { lazy } from 'solid-js';

const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Signup = lazy(() => import("./signup/Signup"));
const Login = lazy(() => import("./login/Login"));
import Nav from './common/components/Nav/Nav';

const App: Component = () => {
  
  return <div class="app h-full w-full">
    <Nav></Nav>
    <Suspense fallback={<div class="container">Loading...</div>}>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" element={<div>This site was made with Solid</div>} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Routes>
    </Suspense>
  </div>
}

export default App;
