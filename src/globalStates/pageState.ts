import { atom } from 'recoil';

type Page = 'top' | 'input' | 'thinking' | 'gotIt' | 'result';

export const pageState = atom<Page>({
  key: 'pageState',
  default: 'top',
});
