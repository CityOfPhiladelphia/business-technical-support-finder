<script setup>

import $config from '../main.js';

const props = defineProps({
  database: {
    type: Array,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});
  
// computed
const i18nEnabled = computed(() => {
  if (this.$config.i18n) {
    return true;
  }
  return false;
});

// hasError() {
//   return this.$store.state.geocode.status === 'error';
// }
// errorMessage() {
//   const input = this.$store.state.geocode.input;
//   return `
//       <p>
//         We couldn't find
//         ${input ? '<strong>' + input + '</strong>' : 'that address'}.
//         Are you sure everything was spelled correctly?
//       </p>
//       <p>
//         Here are some examples of things you can search for:
//       </p>
//       <ul>
//         <li>1234 Market St</li>
//         <li>1001 Pine Street #201</li>
//         <li>12th & Market</li>
//         <li>883309050 (an OPA number with no hyphens or other characters)</li>
//       </ul>
//     `;
// }
</script>

<template>
  <div
    class="main-greeting"
  >
    <div class="has-text-centered container">
      <button
        class="button greeting-button"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
      <button
        v-if="isMobile"
        class="button greeting-button"
        @click="$emit('view-map')"
        v-html="$t('app.viewMap')"
      />
    </div>

    <div
      class="main-area"
    >
      <h3>About this finder</h3>
      <p>This tool can help you connect with organizations that offer guidance on starting, running, and growing a business.  You can:</p>
      <div class="callout intro-list">
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
      <div class="intro-list">
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
  </div>
</template>
