import axios from 'axios';

import { API_ENDPOINTS } from '../endpoints/endpoints';

export const API_REQUESTS = {
  UPLOAD_IMAGE_FUNC: async (formData: FormData) => {
    let response = await axios.post(API_ENDPOINTS.UPLOAD_IMAGE, formData);
    return response;
  },
  TEST_FUNC: async (formData: FormData) => {
    let response = await axios.post(API_ENDPOINTS.TEST, formData);
    return response;
  },
};
