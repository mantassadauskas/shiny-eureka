import { IItem } from '~/services/getUserItems';
import { TimeInMilliseconds } from '~/constants';

export const itemHasOldPassword = (item: IItem, itemList: Array<IItem>) => {
  const oldItems = itemList.filter((listItem) => {
      const passwordDateInMilliseconds = new Date(listItem.createdAt).getTime();
      return Date.now() - passwordDateInMilliseconds > TimeInMilliseconds.Days30
    }
  )

  return oldItems.length;
};

export const getOldPasswordsCount = (items: IItem[]) => items.reduce((count, item) => (
  itemHasOldPassword(item, items) ? (count + 1) : count
), 0)

