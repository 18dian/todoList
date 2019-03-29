import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { initList } from './actionCreators';
import { INIT_SAGA } from './actionType';
import axios from 'axios';

function* getInitSaga() {
  try {
    const res = yield axios.get('./list');
    const action = initList(res.data);
    yield put(action)
  } catch (e) {
    console.log('获取数据失败')
  }

  // axios.get('./list').then((res) => {
  //     const data = res.data;
  //     const action = initList(data);
  // })
}

function* mySaga() {
  yield takeEvery(INIT_SAGA, getInitSaga);
}

export default mySaga;