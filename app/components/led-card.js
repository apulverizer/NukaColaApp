import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  led: null,
  classNames: ['card block trailer-1'],
  store: Ember.inject.service(),
  colorStyle: Ember.computed('led.color', function(){
    return Ember.String.htmlSafe('color:' + this.get('led.color'));
  }),

  actions: {
    stateChanged(){
      this.get('store').findRecord('led', this.get('led.id')).then(function(led){
        if (led.get('on')){
          // Turn off
          led.set('color', "#000000");
        }
        else {
          // turn on
          led.set('color', "#7f7f7f");
        }
        led.save();
      });
    },
    colorChanged(color){
      this.get('store').findRecord('led', this.get('led.id')).then(function(led){
        led.set('color', color);
        led.save();
      });
    }
  }
});
