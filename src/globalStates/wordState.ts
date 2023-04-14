import { atom } from 'recoil';

export const wordState = atom<string>({
  key: 'wordState',
  default: '',
});
