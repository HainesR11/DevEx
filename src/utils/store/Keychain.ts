import EncryptedStorage from 'react-native-encrypted-storage';
import uuid from 'react-native-uuid';

export function createKeychainStorage() {
  return {
    async getItem(key: string) {
      const keychainJSONString = await EncryptedStorage.getItem(key);

      return keychainJSONString;
    },
    async setItem(key: string, item: string) {
      if (typeof item === 'string') {
        const jsonValue = JSON.parse(item);
        await EncryptedStorage.setItem(key, JSON.stringify(jsonValue));
      }
    },
    async removeItem(key: string) {
      await EncryptedStorage.removeItem(key);
    },
  };
}
