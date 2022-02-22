const template = `<ItemList v-bind:title="title" v-bind:config="localConfig"></ItemList>`

import ItemList from './item_list.js';

export default {
  template,
  components: {
    'ItemList': ItemList
  },
  props: ['config', 'title'],
  data: function() {
    return {
      localConfig: {
        items: [
          { brand: 'Chanel', price_with_tax: '¥3,000', image: 'b80b5f50-92ec-449f-9792-85a0b7f102d9' },
          { brand: 'SAINT JAMES', price_with_tax: '¥5,300', image: '768b2d15-66ae-4f56-8e34-69315ea50f7b' },
          { brand: 'Adam et Rope', price_with_tax: '¥13,400', image: '6c27211e-73af-42e7-828a-876650d43d02' },
          { brand: 'JOURNAL STANDARD', price_with_tax: '¥3,400', image: '6e2fa2b7-79cb-4bf0-8f11-f93125c7af48' },
          { brand: 'JOURNAL STANDARD', price_with_tax: '¥43,400', image: 'df59875e-ee99-43ce-82ad-9e6bc13d4f19' },
        ]
      }
    }
  }
}