import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;