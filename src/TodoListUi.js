import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, List } from 'antd';

// 无状态组件
const TodoListUi = (props) => {
  return (
    <Fragment>
      <div>
        <Input value={props.inputValue} onChange={props.handleChange} style={{ width: '300px', marginRight: '20px' }} />
        <Button onClick={props.handleAdd}>提交</Button>
      </div>
      <List
        bordered
        style={{ width: '300px' }}
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item key={`${index}`} onClick={() => { props.handleRemove(`${index}`) }}>{item}</List.Item>)}
      />
    </Fragment>
  )
}

export default TodoListUi;