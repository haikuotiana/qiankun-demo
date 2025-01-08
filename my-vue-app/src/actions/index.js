import { initGlobalState } from 'qiankun';
const initialState = {
  msg:""
}
const actions = initGlobalState(initialState);
// actions.onGlobalStateChange((state, prev) => {
//   console.log('主应用监听GlobalState：', state)
// })
export default actions