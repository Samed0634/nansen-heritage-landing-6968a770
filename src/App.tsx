import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SiteChrome } from "@/components/SiteChrome";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import FAQPage from "@/pages/FAQPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SiteChrome>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sss" element={<FAQPage />} />
        <Route path="/:slug" element={<ServicePage />} />
      </Routes>
    </SiteChrome>
  );
}