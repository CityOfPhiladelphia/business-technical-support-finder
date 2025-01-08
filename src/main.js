// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js


// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons';
import { faAngleUp as farAngleUp } from '@fortawesome/pro-regular-svg-icons';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons';
import { faMinus as farMinus } from '@fortawesome/pro-regular-svg-icons';

library.add(faExclamationTriangle, faHandHoldingHeart, farAngleDown, farAngleUp, farTimes, farPlus, farMinus);

// import pinboard
import pinboard from '@phila/pinboard';
// import pinboard from '../node_modules/@phila/pinboard/src/main.js';
import '../node_modules/@phila/pinboard/dist/style.css';

// data-sources
import business from './data-sources/business';

import customGreeting from './components/customGreeting.vue';
const customComps = markRaw({
  'customGreeting': customGreeting,
});

let $config = {
  i18n: {
    data: {
      messages: {
        'en-US': {}
      }
    }
  },
  publicPath: import.meta.env.VITE_PUBLICPATH,
  app: {
    title: 'Resources for businesses',
    subtitle: 'Find services and support for businesses in Philadelphia',
    logoAlt: 'City of Philadelphia',
    type: 'business',
  },
  gtag: {
    category: 'rf-business',
  },
  // printView: false,
  anySearch: true,
  allowZipcodeSearch: true,
  allowPrint: true,
  showBuffers: true,
  resetDataOnGeocode: true,
  retractableRefine: false,
  dropdownRefine: false,
  searchBar: {
    searchTypes: [
      'address',
      'zipcode',
    ],
    searchDistance: 3,
    fuseThreshold: 0.4,
  },
  locationInfo: {
    siteNameField: 'organization_name',
    siteName: function(item, transforms) {
      let value;
      value = item.properties.organization_name;
      if (value.includes('(WORC)')) {
        value = 'Women\'s Opportunity Resource Center (WORC)';
      }
      return value;
    },
  },
  customComps,
  refine: {
    type: 'categoryField_array',
    value: function(item) {
      return item.properties.services_offered;
    },
  },
  dataSources: {
    business,
  },
  router: {
    enabled: false,
  },
  projection: '4326',
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/finder/v1/search/${inputEncoded}`;
    },
    params: {
      include_units: true,
    },
  },
  markerType: 'circle-marker',
  mapLayer: {
    id: 'resources',
    source: 'resources',
    type: 'circle',
    paint: {
      'circle-radius': 7,
      'circle-color': '#9400c6',
      'circle-stroke-width': 1,
      'circle-stroke-color': 'white',
    },
  },
  footer: [
    {
      type: "native",
      href: "https://www.phila.gov/",
      attrs: {
        target: "_blank",
      },
      text: "City of Philadelphia",
    },
    {
      type: "native",
      href: "/commerce/business-resource-finder",
      text: "About",
    },
    {
      type: "native",
      href: "https://www.phila.gov/feedback/",
      attrs: {
        target: "_blank",
      },
      text: "Feedback",
    },
  ],
};

console.log('$config:', $config);

pinboard($config);
export default $config;
