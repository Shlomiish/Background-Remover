import axios from 'axios';

import { API_ENDPOINTS } from '../endpoints/endpoints';

export const API_REQUESTS = {
  UPLOAD_IMAGE_FUNC: async (file: File | undefined, formData: FormData) => {
    console.log(file, formData);

    await axios
      .post(API_ENDPOINTS.UPLOAD_IMAGE, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
