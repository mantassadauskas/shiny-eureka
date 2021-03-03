import {IItem} from "~/services/getUserItems";

export const weakPassword = (item: IItem) => {
  const { password } = item;

  const strength = [
    password.match(/[a-z]/) != null,
    password.match(/[A-Z]/) != null,
    password.match(/[!@#$%^&*]/) != null,
    password.match(/[0-9]/) != null,
  ].filter(Boolean).length;

  return strength > 2;
};

export const getWeakPasswordsCount = (items : IItem[]) => items.reduce((count, item) => (
  weakPassword(item) ? (count + 1) : count
), 0)
