
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PageWrapper } from "./components/PageWrapper";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Examples from "./pages/Examples";
import QuickFacts from "./pages/QuickFacts";
import Reflection from "./pages/Reflection";
import References from "./pages/References";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-4 z-[100] w-max max-w-[min(100%,calc(100vw-2rem))] -translate-y-[180%] rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg transition focus:pointer-events-auto focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/quick-facts" element={<QuickFacts />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/references" element={<References />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
