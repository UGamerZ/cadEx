import { Route, Routes } from "react-router";
import ContactUs from "./pages/ContactUs.tsx";
import Index from "./pages/Index.tsx";
import Layout from "./components/Layout.tsx";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
