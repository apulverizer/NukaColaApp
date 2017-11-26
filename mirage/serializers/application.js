import { Serializer } from 'ember-cli-mirage';
import Ember from 'ember';

const { dasherize } = Ember.String;

export default Serializer.extend({
  keyForAttribute(key) {
    return dasherize(key);
  }
});
