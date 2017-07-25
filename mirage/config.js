export default function() {

  this.namespace = '/api';
  
  let rentals = [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: { 
            "owner": "I am",
            "name": "Grand Old Mansion",
            "type": "Estate",
            "location": "San Francisco",
            "bedrooms": 15,
            "image":'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
        }, {
          type: 'rentals',
          id: 'urban-city',
          attributes: {
            "owner": "I am",
            "name": "Urban City",
            "type": "Estate",
            "location": "Kyiv",
            "bedrooms": 2000000,
            "image":'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
          }
        }, {
          type: 'rentals',
          id: 'downtown',
          attributes: {
            "owner": "I am",
            "name": "Downtown",
            "type": "Estate",
            "location": "Kyiv",
            "bedrooms": 2,
            "image":'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.location !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.location.toLowerCase().indexOf(request.queryParams.location.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
