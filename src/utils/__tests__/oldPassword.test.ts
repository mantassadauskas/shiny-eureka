import { itemHasOldPassword } from '../oldPassword';
import { items } from '../../fixtures';



test('should return true if password is older than 30 days', () => {
  expect(itemHasOldPassword(items[0])).toBe(false);
  expect(itemHasOldPassword(items[1])).toBe(true);
});