import { Route, Routes } from "react-router";
import ContactUs from "./pages/ContactUs.tsx";
import Index from "./pages/Index.tsx";
import Layout from "./components/Layout.tsx";
import ContactSuccess from "./pages/ContactUs/ContactSuccess.tsx";
import ContactUsForm from "./pages/ContactUs/ContactUsForm.tsx";
import { useState } from "react";
const RouterRoutes = () => {
  const [formData, setFormData] = useState<string | undefined>();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="contact-us" element={<ContactUs />}>
          <Route index element={<ContactUsForm setFormData={setFormData} />} />
          <Route
            path="success"
            element={<ContactSuccess response={formData} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
