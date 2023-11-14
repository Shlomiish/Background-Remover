import axios from 'axios';

import { API_ENDPOINTS } from '../endpoints/endpoints';

export const API_REQUESTS = {
  UPLOAD_IMAGE_FUNC: async (formData: FormData) => {
    let response = await axios.post(API_ENDPOINTS.UPLOAD_IMAGE, formData);
    return response;
  },

  SET_BG_COLOR_FUNC: async (formData: FormData) => {
    let response = await axios.post(API_ENDPOINTS.SET_BG_COLOR, formData);
    return response;
  },
};
