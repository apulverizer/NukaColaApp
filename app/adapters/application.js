import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://192.168.0.108:5000',
    namespace: ''
});