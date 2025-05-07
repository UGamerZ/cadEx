import axios from "axios";

export const sendContactAction = async () => {
  const response = await axios.post(
    "https://cadexhir.netlify.app/.netlify/functions/contact",
    document.querySelector("#contact-form"),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};
