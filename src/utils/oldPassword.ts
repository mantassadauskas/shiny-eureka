import { IItem } from '~/services/getUserItems';
import { TimeInMilliseconds } from '../constants';

export const itemHasOldPassword = (item: IItem) => {
  const passwordDateInMilliseconds = new Date(item.createdAt).getTime();
  return Date.now() - passwordDateInMilliseconds > TimeInMilliseconds.Days30
};

export const getOldPasswordsCount = (items: IItem[]) => items.reduce((count, item) => (
  itemHasOldPassword(item) ? (count + 1) : count
), 0)

