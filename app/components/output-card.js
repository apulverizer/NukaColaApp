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
        if (output.get('on')){
          // Turn off
          output.set('color', "#000000");
        }
        else {
          // turn on
          output.set('color', "#7f7f7f");
        }
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
