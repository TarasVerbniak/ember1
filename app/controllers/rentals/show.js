import Ember from 'ember';

export default Ember.Controller.extend({
    isWide: false,
    actions: {
        toggleImageSize(){
            this.toggleProperty('isWide');
        }
    }
});
