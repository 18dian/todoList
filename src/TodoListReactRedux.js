import React from 'react';
import { connect } from 'react-redux';

// class TodoListReactRedux extends Component {
//   render() {
//     const { inputValue, changeInput, add, list, handleDelete  } = this.props;

//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={changeInput} />
//           <button onClick={add}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map(item => (
//               <li key={item} onClick={() => { handleDelete(item) }}>{item}</li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const TodoListReactRedux = (props) => {
  const { inputValue, changeInput, add, list, handleDelete } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInput} />
        <button onClick={add}>提交</button>
      </div>
      <ul>
        {
          list.map(item => (
            <li key={item} onClick={() => { handleDelete(item) }}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

// 映射数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch props 这一步相当于将这个方法挂载到provider上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInput(e) {
      const action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },

    add() {
      const action = {
        type: 'add'
      }
      dispatch(action)
    },

    handleDelete(item) {
      const action = {
        type: 'delete',
        value: item
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux);