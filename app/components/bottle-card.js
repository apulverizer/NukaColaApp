import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  bottle: null,
  classNames: ['card block trailer-1'],
  store: Ember.inject.service(),
  colorStyle: Ember.computed('bottle.color', function(){
    return Ember.String.htmlSafe('color:' + this.get('bottle.color'));
  }),

  actions: {
    stateChanged(){
      this.get('store').findRecord('output', this.get('bottle.id')).then(function(output){
        output.set('on', !output.get('on'));
        output.save();
      });
    },
    colorChanged(color){
      this.get('store').findRecord('output', this.get('bottle.id')).then(function(output){
        output.set('color', color);
        output.save();
      });
    }
  }
});
