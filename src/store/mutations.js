import * as types from './mutation-types'

const mutations = {
  [types.SET_COLLAPSE](state, flag) {
    state.isCollapse = flag;
  },
  [types.SET_MENU_LIST](state, menuList) {
    state.menuList = menuList;
  },
  [types.SET_SKIN](state, skin) {
    state.skin = skin;
  },
  [types.SET_USER_INFO](state, userinfo) {
    state.userinfo = userinfo;
  },
  [types.SET_TREE_LIST](state, treeList) {
    state.treeList = treeList;
  },
}
export default mutations
