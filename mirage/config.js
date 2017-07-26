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
            "image":'https://image.shutterstock.com/z/stock-photo-low-angle-view-of-skyscrapers-in-shenzhen-china-526689706.jpg'
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
            "image":'https://image.shutterstock.com/z/stock-photo-empty-brick-floor-front-of-modern-building-in-shanghai-505622722.jpg'
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

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });
  
}
