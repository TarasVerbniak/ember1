import DS from 'ember-data';

const {Model, attr} = DS;

export default Model.extend({
    owner: attr('string'),
    name: attr('string'),
    type: attr('string'),
    location: attr('string'),
    bedrooms: attr('number'),
    image: attr('string')
});