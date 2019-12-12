import { createStore } from 'redux';

const incrementCount = ({incrementBy =1}) => {
    return {
        type:'INCREMENT',
        incrementBy
    };
};

const decrementCount = ({decrementBy=1}) => {
    return {
        type:'DECREMENT',
        decrementBy
    };
};

const setCount = ({count=1}) => {
    return {
        type:'SET',
        count
    };
};

const resetCount = () => {
    return {
        type:'RESET'
    };
};

//Reducers

let res;
const add = (a,b) => {
    res = a+b;      
};

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+action.incrementBy};
        case 'DECREMENT':
            return {count:state.count-action.decrementBy};
        case 'RESET':
            return {count:0}
        case 'SET':
            return {count:action.count}
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy:3}));
store.dispatch(setCount({count:10}));
store.dispatch(resetCount());