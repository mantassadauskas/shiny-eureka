import {IItem} from '~/services/getUserItems';

export const reusedPassword = (item: IItem, itemList: Array<IItem>) => {
  const reusedItems = itemList.filter((listItem) => (
    listItem.password === item.password
  ))

  return reusedItems.length > 1;
};

export const getReusedPasswordsCount = (items: IItem[]) => items.reduce((count, item) => (
  reusedPassword(item, items) ? (count + 1) : count
), 0)
