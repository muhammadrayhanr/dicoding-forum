import { useSelector } from 'react-redux';
import localeData from '../utils/localeData';

function useLocale() {
  const { locale = 'id' } = useSelector((states) => states);

  return localeData[locale];
}
export default useLocale;
