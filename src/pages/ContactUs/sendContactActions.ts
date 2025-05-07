import axios from "axios";

let Data: Element | null = null;

export const sendContactAction = async () => {
  const response = await axios.post(
    "https://cadexhir.netlify.app/.netlify/functions/contact",
    Data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};

export const setData = () => {
  Data = document.querySelector("#contact-form");
};
