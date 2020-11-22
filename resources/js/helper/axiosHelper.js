import axios from 'axios';

// eslint-disable-next-line max-len
const crsf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const api = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': crsf,
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
