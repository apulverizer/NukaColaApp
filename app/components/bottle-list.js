import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],

  init() {
    this._super(...arguments);
    this.get('filter')().then((resultsObj) => {
      this.set('results', resultsObj.results);
    });
  },

});
