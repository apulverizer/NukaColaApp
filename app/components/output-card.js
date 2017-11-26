import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  output: null,
  classNames: ['card block trailer-1'],
  store: Ember.inject.service(),
  colorStyle: Ember.computed('output.color', function(){
    return Ember.String.htmlSafe('color:' + this.get('output.color'));
  }),

  actions: {
    stateChanged(){
      this.get('store').findRecord('output', this.get('output.id')).then(function(output){
        output.set('on', !output.get('on'));
        output.save();
      });
    },
    colorChanged(color){
      this.get('store').findRecord('output', this.get('output.id')).then(function(output){
        output.set('color', color);
        output.save();
      });
    }
  }
});
