import DS from 'ember-data';
import ENV from 'nuka-cola/config/environment';

export default DS.RESTAdapter.extend({
    host: ENV['api-host'],
    namespace: ''
});