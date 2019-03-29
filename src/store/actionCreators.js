import { CHANGE_INPUT, ADD, DELETE, INIT_LIST, INIT_SAGA } from './actionType';


export const getChangeInput = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const getAdd = () => ({
  type: ADD
})

export const getDelete = (value) => ({
  type: DELETE,
  value
})

export const initList = (data) => ({
  type: INIT_LIST,
  data
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('./list').then((res) => {
//             const data = res.data;
//             const action = initList(data);
//             dispatch(action);
//         })
//     }
// }

export const getInit = () => ({
  type: INIT_SAGA
})