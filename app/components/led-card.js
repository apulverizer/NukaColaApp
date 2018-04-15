import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  led: null,
  classNames: ['card block trailer-1'],
  store: Ember.inject.service(),
  colorStyle: Ember.computed('led.color', function(){
    return Ember.String.htmlSafe('color:' + this.get('led.color'));
  }),
  paletteString: '[["e57373", "f44336", "d32f2f", "b71c1c"], ["ba68c8", "9c27b0", "7b1fa2", "4a148c"], ["7986cb", "3f51b5", "303f9f", "1a237e"], ["64b5f6", "2196f3", "1976d2", "0d47a1"], ["4dd0e1", "00bcd4", "0097a7", "006064"], ["81c784", "4caf50", "388e3c", "1b5e20"], ["dce775", "cddc39", "afb42b", "827717"], ["fff176", "ffeb3b", "fbc02d", "f57f17"], ["ffb74d", "ff9800", "f57c00", "e65100"], ["a1887f", "795548", "5d4037", "3e2723"], ["e0e0e0", "9e9e9e", "616161", "000000"]]',
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
