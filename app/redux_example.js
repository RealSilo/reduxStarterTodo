var redux = require('redux');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configure_store').configure();

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  // console.log('name is', state.name)
  // document.getElementById('app').innerHTML = state.name;

  console.log('new state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="blank">View your location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Sean'));

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Star Wars', 'Action'));
store.dispatch(actions.removeMovie(1));
