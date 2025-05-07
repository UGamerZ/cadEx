import axios from "axios";

export let Data = undefined;

const sendContactAction = async () => {
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

export const setData = async () => {
  Data = await sendContactAction();
};
