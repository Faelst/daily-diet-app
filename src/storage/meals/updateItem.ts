import { Props as ItemProps } from '@components/Item';
import Storage from './index';

export async function updateItem(item: ItemProps) {
  try {
    await Storage.removeItem(item);
    await Storage.addItem(item);
  } catch (error) {
    throw error;
  }
}
