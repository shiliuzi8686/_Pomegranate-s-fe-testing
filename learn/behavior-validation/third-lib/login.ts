// 第三方库
import { lytLogin } from 'lyt';

const state = {
  tipString: '',
}

export function login(name, pwd) {
  lytLogin(name, pwd)
}

export function setTipString(tipString) {
  state.tipString = tipString
}