import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

const ITEMS = [{location: 'San Francisco'}, {location: 'Kyiv'}, {location: 'Seattle'}];
const FILTERED_ITEMS = [{location: 'San Francisco'}];

moduleForComponent('list-filter', 'Integration | Component | list filter', {
  integration: true
});

test('should initially load all listings', function (assert) {
   // we want our actions to return promises,
  //since they are potentially fetching data asynchronously
  this.on('filterByCity', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  })
  // with an integration test,
  // you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
  {{#list-filter
    filter=(action 'filterByCity')
    as |rentals|
  }}
      <ol class="results">
        {{#each rentals as |rentalItem|}}
          <li class="city">{{rentalItem.location}}</li>
        {{/each}}
      </ol>
  {{/list-filter}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.city').length, 3);
    assert.equal(this.$('.city').first().text().trim(), 'San Francisco');
  });
});

test('should update the listings by search value', function (assert) {
   // we want our actions to return promises,
  //since they are potentially fetching data asynchronously
  this.on('filterByCity', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  })
  // with an integration test,
  // you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
  {{#list-filter
    filter=(action 'filterByCity')
    as |rentals|
  }}
      <ol class="results">
        {{#each rentals as |rentalItem|}}
          <li class="city">{{rentalItem.location}}</li>
        {{/each}}
      </ol>
  {{/list-filter}}
  `);
  this.$('input').val('San').keyup();

  return wait().then(() => {
    assert.equal(this.$('.city').length, 1);
    assert.equal(this.$('.city').first().text().trim(), 'San Francisco');
  });
});
