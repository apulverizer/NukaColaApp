import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "color": DS.attr(),
  "on": Ember.computed('color', function(){
    return this.get('color') != '#000000';
  })
});
