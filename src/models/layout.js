export default {
  namespace: 'layouts',
  state: {
    collapsed: false
  },
  reducers: {
    'toggleMenu'(state) {
      return {...state, ...{ collapsed: !state.collapsed }};
    }
  }
}
