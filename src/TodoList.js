import React, { Component } from 'react';
import store from './store';
import TodoListUi from './TodoListUi';
import { getChangeInput, getAdd, getDelete, getInit } from './store/actionCreators'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange.bind(this)}
        handleAdd={this.handleAdd.bind(this)}
        handleRemove={this.handleRemove.bind(this)}
      />
    )
  }
  componentDidMount() {
    const action = getInit();
    store.dispatch(action)

  }
  handleChange(e) {
    // 这种写法以后项目大了会很乱，并且action的type写错了也不易查找错误，所以创建actionType文件
    // 后来将action改成函数并导出，直接在页面调用函数就会获得action返回的对象
    // const action = {
    //   type: 'llt',
    //   value: e.target.value
    // }
    // store.dispatch(action)
    const action = getChangeInput(e.target.value);
    store.dispatch(action)
  }
  handleAdd() {
    const action = getAdd();
    store.dispatch(action)
  }
  handleRemove(key) {
    const action = getDelete(key);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;