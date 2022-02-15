<template>
  <div
    class="custom-greeting content"
  >
    <div class="has-text-centered container">
      <button
        class="button open-list-button is-primary"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>

    <div
      class="main-area"
    >
      <h3>About this finder</h3>
      <p>This tool can help you connect with organizations that offer guidance on starting, running, and growing a business.  You can:</p>
      <div class="callout list-div">
        <ul>
          <li>Browse the list of organizations.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by the type of help you need.</li>
        </ul>
      </div>

      <h3>Adding your organization</h3>
      <p>
        Does your organization offer free or low-cost services to Philadelphia businesses?
        To learn how to be added to this finder, contact the Department of Commerce at
        <a href="mailto:business@phila.gov">business@phila.gov</a>.
      </p>

      <h3>Additional resources</h3>
      <ul>
        <li>
          For the latest webinars and events, visit <a
            target="_blank"
            href="https://www.phila.gov/the-latest/all-events/?category=Department%20of%20Commerce"
          >Commerce's event page</a>.
        </li>
        <li>
          For the latest programs and services for businesses, visit <a
            target="_blank"
            href="https://www.phila.gov/departments/department-of-commerce/"
          >Commerce's homepage</a>.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomGreeting',
  props: {
    'message': {
      type: String,
      default: function() {
        return 'defaultMessage';
      },
    },
  },
  data() {
    let data = {
      sections: {},
      subsections: {},
    };
    return data;
  },
  computed: {
    i18nEnabled() {
      if (this.$config.i18n) {
        return true;
      }
      return false;

    },
    calloutOptions() {
      return {};
    },
    calloutSlots() {
      return {
        text: 'test',
      };
    },
    database() {
      if (this.$store.state.sources[this.$appType].data) {
        return this.$store.state.sources[this.$appType].data.rows || this.$store.state.sources[this.$appType].data.features || this.$store.state.sources[this.$appType].data;
      }
      return [];

    },
    hasError() {
      return this.$store.state.geocode.status === 'error';
    },
    errorMessage() {
      const input = this.$store.state.geocode.input;
      return `
          <p>
            We couldn't find
            ${input ? '<strong>' + input + '</strong>' : 'that address'}.
            Are you sure everything was spelled correctly?
          </p>
          <p>
            Here are some examples of things you can search for:
          </p>
          <ul>
            <li>1234 Market St</li>
            <li>1001 Pine Street #201</li>
            <li>12th & Market</li>
            <li>883309050 (an OPA number with no hyphens or other characters)</li>
          </ul>
        `;
    },
  },
  // watch: {
  //   database() {
  //     let subsections = this.getCounts();
  //     this.subsections = subsections;
  //     this.$store.commit('setSubsections', subsections);
  //   },
  // },
  // mounted() {
  //   this.sections = this.$config.sections;
  // },
  // methods: {
  //   getCounts() {
  //     // console.log('customGreeting.vue getCounts is running');
  //     const refineData = this.database;
  //     // const refineData = this.sources[this.$appType].data.rows;
  //
  //     let service = '';
  //
  //     // console.log('in getRefineSearchList, refineData:', refineData);
  //     refineData.forEach((arrayElem) => {
  //       // console.log('arrayElem:', arrayElem);
  //       if (arrayElem.services_offered) {
  //         service += `${arrayElem.services_offered},`;
  //       } else if (arrayElem.attributes.CATEGORY) {
  //         service += `${arrayElem.attributes.CATEGORY},`;
  //       }
  //     });
  //
  //     // TODO: break this into smaller chunks
  //     // let serviceArray = service.split(/(,|;)/);
  //     let serviceArray = service.split(',');
  //     serviceArray = serviceArray.map(s => s.trim());
  //
  //     // const uniqArray = [ ...new Set(serviceArray) ];
  //     // console.log('serviceArray:', serviceArray, 'uniqArray:', uniqArray);
  //     //
  //     // // clean up any dangling , or ;
  //     // let uniq = uniqArray.filter(a => a.length > 2);
  //     //
  //     // uniq.filter(Boolean); // remove empties
  //
  //     let countObject = serviceArray.reduce(function (acc, curr) {
  //       if (typeof acc[curr] == 'undefined') {
  //         acc[curr] = 1;
  //       } else {
  //         acc[curr] += 1;
  //       }
  //       return acc;
  //     }, {});
  //
  //     return countObject;
  //   },
  // },
};
</script>

<style scoped>

  .container {
    margin-bottom: 1rem;
  }

  .list-div {
    margin-bottom: 1rem;
  }

  .open-list-button {
    text-transform: uppercase;
  }

  .custom-greeting {
    padding: 2rem;
  }


  /* h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
  }

  ul {
    margin-bottom: 6px;
  }

  .main-area {
    padding: 10px;
  }

  .custom-callout {
    border-style: solid;
    border-width: 1px;
    padding: 10px;
  }

  .no-margin {
    margin: 0px;
  }

  .open-list-div {
    margin: 0 auto;
  }

  .open-list-button {
    margin-top: 6px;
    margin-bottom: 14px;
    width: 200px;
  }

  .exclamation-holder {
    display: flex;
    align-items: center;
    margin-top: 6px;
    margin-bottom: 14px;
  }

  .fa-icon-class {
    margin: 0 auto;
    display: block;
  }

  .exclamation-details {
    margin-left: 14px;
    font-size: 14px;
  }

  .mb-panel-topics-greeting {
    padding-top: 20px;
  }

  .greeting {
    font-size: 20px;
    color: #444;
    padding: 14px;
  }

  .greeting-error {
    border-left-color: #ff0000;
  }

  .custom-section {
    margin-left: 8px;
    margin-top: 4px;
  }

  .custom-ul {
    margin-left: 4rem;
    font-size: 14px;
  }

  @media screen and (min-width: 750px) {
    .mb-panel-topics-greeting {
      height: calc(100vh - 120px);
      overflow: auto;
    }
  } */
</style>
