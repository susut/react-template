import * as loginService from '../services/login';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'login',
  state: {
    user: {
      name: '1',
      password: '2'
    }
  },
  reducers: {
    'login'(state, { payload: user}) {
      return { ...state, user};
    },
    'changeInput'(state, { payload: { key, val }}) {
      let newUser = {...state.user};
      newUser[key] = val;
      return {...state, ...{user: newUser}};
    }
  },
  effects: {
    *signIn({ payload: params}, { call, put }) {
      const user = yield call(loginService.login, params);
      yield put({ type: 'login', payload: user});
      yield put( routerRedux.push('/layout/home') );
    }
  }
}
