import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  searchValue: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },
  filterDelay(param){
    const self = this;
    let filterAction = this.get('filter');
    filterAction(param).then( filterResults => 
      self.set('results', filterResults)
    );
  },

  actions: {
    handleFilterEntry() {  
      this.searchValue = this.get('value');
      Ember.run.later(this, this.filterDelay, this.searchValue, 300);
    }
  }
});