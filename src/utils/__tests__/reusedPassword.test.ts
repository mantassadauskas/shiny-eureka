import { itemHasReusedPassword } from '../reusedPassword';
import { items } from '../../fixtures';

test('should return true if there is more than one item with same password', () => {
   expect(itemHasReusedPassword(items[0], items)).toBe(false);
   expect(itemHasReusedPassword(items[3], items)).toBe(true);
});