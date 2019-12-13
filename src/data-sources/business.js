export default {
  id: 'business',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://phl.carto.com:443/api/v2/sql',
  options: {
    params: {
      q: 'select * from test_business_technical_support where hide_on_finder is null or hide_on_finder::text in (\'FALSE\', \'false\')',
    },
  },
};
