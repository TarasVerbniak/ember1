import Ember from 'ember';

const rentals = [
    {
        "name": "Grand Old Mansion",
        "type": "Estate",
        "location": "San Francisco",
        "bedrooms": 15
    },
    {
        "name": "Urban City",
        "type": "Estate",
        "location": "Kyiv",
        "bedrooms": 2000000
    },
    {
        "name": "Downtown",
        "type": "Estate",
        "location": "Kyiv",
        "bedrooms": 2
    },
];

export default Ember.Route.extend({
    model(){
        return rentals;
    }
});
