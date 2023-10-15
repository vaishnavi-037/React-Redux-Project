const redux = require("redux");

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// creating store which accepts reducer function
const store = redux.createStore(counterReducer);

// subscriber to this state
// So this subscription function will soon be triggered whenever the state changes. And then when it is triggered,
// we can get to that latest state after it was changed with the get state method here.
const counterSubscriber = () => {
  // Get state is a method which is available on the store created with create store. And it will give us the latest state snapshot after it was updated.
  const latestStore = store.getState();
  console.log(latestStore);
};

// Now we just need to make Redux aware of this subscriber function and tell it that disfunction should be executed whenever our state changes.
// subscribe method expects a function which Redux will then execute for us whenever the data and the store changed
store.subscribe(counterSubscriber);

// And dispatch is a method which dispatches an action. Now an action is a JavaScript object.
// It's a JavaScript object with a type property, which acts as an identifier.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
