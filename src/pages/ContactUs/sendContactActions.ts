import axios from "axios";

export const sendContactAction = async () => {
  const response = await axios.post(
    "https://functions.yandexcloud.net/d4egbnedt4b58pmh8p0o",
    {
      firstName: "Fred",
      lastName: "Flintstone",
      orders: [1, 2, 3],
    },
    {
      headers: {
        "content-type": "application/json",
      },
    },
  );
  return response.data;
};
