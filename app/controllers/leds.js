import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterLeds() {
      return this.get('store').query('led',{}).then((results) => {
        return {query: '', results: results};})
    }
  }
});
