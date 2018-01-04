import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(/* transition */) {
    this.transitionTo('leds'); // Implicitly aborts the on-going transition.
  }
});