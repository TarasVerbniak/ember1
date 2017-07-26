import { test } from 'qunit';
import moduleForAcceptance from 'test1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(() => {
        assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
});

test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(() => {
        assert.equal(currentURL(), '/about', 'should go to about page');
    });
});

test('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(() => {
        assert.equal(currentURL(), '/contact', 'should go to contact page');
    });
});

test('should list available rentals.', function (assert) {
    visit('/');
    andThen(() => {
        assert.equal(find('.listing').length, 3, 'should display 3 listing');
    });
});

test('should filter the list of rentals by city.', function (assert) {
    visit('/');
    fillIn('input', 'Kyiv');
    keyEvent('input', 'keyup', 69);
    andThen( () => {
        assert.equal(find('.results .location').length, 2, 'should contain 2 listings');
        assert.equal(find('.results .location:contains("Kyiv")').length, 2, 'should contain 2 listings of Kyiv');
    });
});

test('should show details for a specific rental', function (assert) {
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
    assert.equal(find('.listing h1').text(), "Grand Old Mansion", 'should list rental title');
  });
});