import axios from 'axios';

//https://unsplash.com/documentation#schema
axios.defaults.baseURL = 'https://api.unsplash.com';

const perPage = 12;

const options = {
  headers: {
    Authorization: 'Client-ID vbAmyXXO_MqgsG_IVuzENMjv6wsuvM1txOkMUcxMAJc'
  }
};

export const searchPhotos = async (query, page = 1) => {
  const response = await axios.get(
    `/search/photos?page=${page}&query=${query}&per_page=${perPage}`,
    options
  );
  return response.data;
};
