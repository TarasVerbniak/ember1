import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let rental = Ember.Object.create({
    "name": "Test City",
    "type": "test",
    "location": "Kyiv",
    "bedrooms": 3,
    "image":'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
});

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should display rental details', function(assert) {
  this.set('rentalItem', rental);
  this.render(hbs`{{rental-listing rental=rentalItem}}`);
  assert.equal(this.$('.listing h1').text(), 'Test City', 'Name: Test City');
});

test('should toggle wide class on click', function(assert) {
  this.set('rentalItem', rental);
  this.render(hbs`{{rental-listing rental=rentalItem}}`);
  assert.equal(this.$('.listing .wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.listing .wide').length, 1, 'Became large after clicking on it');
  this.$('.image').click();
  assert.equal(this.$('.listing .wide').length, 0, 'Revert to small size after clicking on large image');
});
