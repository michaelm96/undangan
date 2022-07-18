// upgrade your code, and put your code to change API network, sat!

// const API_BASE_URL_DEV = "http://144.91.77.116:3000";
// const API_BASE_URL_SIT = "http://144.91.77.116:3001";
// const API_BASE_URL_DEV = "https://launchpad-be.nefti.id"; // or use localhost:3737
const API_BASE_URL_DEV = process.env.NEXT_PUBLIC_BACKEND_API; // or use localhost:3737

const ENDPOINT = {
  acara: '/api/acaras',
  hero: '/api/heroes',
  regard: '/api/regards',
  bride_and_groom: '/api/bride-and-grooms',
  time_and_place: '/api/time-and-places',
  countdown: '/api/countdowns',
  gallery: '/api/galleries',
  comment: '/api/comments',
  footer: '/api/footers',
  upload: '/api/upload',
  project: '/api/projects',
  groom: '/api/grooms',
  bride: '/api/brides',
  auth: '/api/auth/local',
  admin: '/api/admins',
  tema: '/api/tema',
  populate: 'populate=',
  sortAsc: '&sort[0]=createdAt%3Aasc'
};

let BASE_URL = API_BASE_URL_DEV;

const api = {
  BASE_URL: BASE_URL,
  ENDPOINT: ENDPOINT,
};

export default api;
