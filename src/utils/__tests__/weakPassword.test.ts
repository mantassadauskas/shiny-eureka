import { itemHasWeakPassword } from '../weakPassword';
import { items } from '../../fixtures';

test('should return true if password do not match requirements', () => {
  expect(itemHasWeakPassword(items[0])).toBe(true);
  expect(itemHasWeakPassword(items[1])).toBe(false);
  expect(itemHasWeakPassword(items[2])).toBe(true);
});