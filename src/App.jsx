import React, { Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/css/main.scss"; // All of our styles
import Main from "./components/layout/Main";

const Index = lazy(() => import("./components/pages/Index"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const NotFound = lazy(() => import("./components/pages/NotFound"));
const Project = lazy(() => import("./components/pages/Project"));
const Resume = lazy(() => import("./components/pages/Resume"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
