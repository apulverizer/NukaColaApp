import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterOutputs() {
      return this.get('store').query('output',{}).then((results) => {
        return {query: '', results: results};})
    }
  }
});
