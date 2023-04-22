import { useRecoilValue } from 'recoil';

import { resultState } from '@/globalStates/resultState';

function nl2br(str: string) {
  str = str.replace(/\r\n/g, '<br />');
  str = str.replace(/(\n|\r)/g, '<br />');
  return str;
}

const ResultPanel = () => {
  const result = useRecoilValue(resultState);
  return (
    <p
      className={'rounded-md border border-gray-600 p-2'}
      dangerouslySetInnerHTML={{ __html: nl2br(result) }}
    ></p>
  );
};

export default ResultPanel;
