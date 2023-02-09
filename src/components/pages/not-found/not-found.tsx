import { useGetDicitonaryValue } from '@hooks';

export const NotFound = () => {
  const getDictionaryValue = useGetDicitonaryValue();
  return <>{getDictionaryValue('page-not-found.header')}</>;
};