// import { CHANGE_INPUT, ADD, DELETE, INIT_LIST } from './actionType';

// const initValue = {
//   inputValue: '',
//   list: []
// }
// // reducer可以接收state,但是不可以修改state;
// export default (state = initValue, action) => {
//   if(action.type === CHANGE_INPUT) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.inputValue = action.value;
//     return newState;
//   }
//   if(action.type === INIT_LIST) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.list =  action.data
//     return newState
//   }
//   if(action.type === ADD) {
//     const newState = JSON.parse(JSON.stringify(state)); 
//     newState.list.push(newState.inputValue);
//     newState.inputValue = '';
//     return newState;
//   }
//   if(action.type === DELETE) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.list.splice(action.value,1)
//     return newState
//   }
//   return state;
// }
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'changeInput') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === 'delete') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = newState.list.filter(key => key !== action.value);
    return newState;
  }
  return state;
}