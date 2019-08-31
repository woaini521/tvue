import Vue from 'vue'
import { IRootState } from '@/store/index'
import * as types from '@/store/mutation-types'

const getters = {
  sidebar: (state: IRootState) => state.app.sidebar,
  device: (state: IRootState) => state.app.device,
  fixSiderbar: (state: IRootState) => state.app.fixSiderbar,
  layoutMode: (state: IRootState) => state.app.layoutMode,
  navTheme: (state: IRootState) => state.app.navTheme,
  language: (state: IRootState) => state.app.language,
  primaryColor: (state: IRootState) => state.app.primaryColor,
  colorWeak: (state: IRootState) => state.app.colorWeak,
  notices: (state: IRootState) => state.app.notices,
  unreadCount: (state: IRootState) => state.app.unreadCount,
  multiTab: (state: IRootState) => state.app.multiTab,
  fetchingNotices: (state: IRootState) =>
    (state.app.fetchingStatus as any).notice,
  userInfo: () => {
    console.log(Vue.ls.get(types.USER_INFO, {}))
    return Vue.ls.get(types.USER_INFO, {})
  }
}

export default getters
