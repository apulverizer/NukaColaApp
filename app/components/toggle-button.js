import Component from '@ember/component';
import Ember from 'ember'

export default Component.extend({
  tagName: 'a',
  classNames: ['btn', 'text-center'],
  on: false,

  status: Ember.computed('on', function(){
    return this.get('on') ? 'Turn On' : 'Turn Off'
  })
});
