import { atom } from 'recoil';

export const resultState = atom<string>({
  key: 'resultState',
  default: '',
});
