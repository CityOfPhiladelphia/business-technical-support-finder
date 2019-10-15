export default {
  id: 'business',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://phl.carto.com:443/api/v2/sql',
  options: {
    params: {
      q: 'select * from business_technical_support',
    },
  },
};
