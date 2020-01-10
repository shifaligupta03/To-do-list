import { dateToTime } from '../helpers/date-to-time';
import { getCurrentdate } from '../helpers/get-current-date';

export const convertTimeInMilliseconds = (): number => {
    const date: Date = getCurrentdate();
    return dateToTime(date);
  };