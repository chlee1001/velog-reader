import distanceInWords from 'date-fns/distance_in_words';
import koLocale from 'date-fns/locale/ko';

export const fromNow = d => {
  return distanceInWords(new Date(), d, { locale: koLocale, addSuffix: true });
};
