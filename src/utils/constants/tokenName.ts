export function getWithExpiry<T>(key: string): {
    value: T | null;
    expired: boolean;
  } {
    const itemStr = localStorage.getItem(key);
  
    // if the item doesn't exist, return null
    if (!itemStr) {
      return {
        value: null,
        expired: true,
      };
    }
    const item = JSON.parse(itemStr) as {
      value: T;
      expiry: number;
    };
    const now = new Date();
  
    // compare the expiry time of the item with the current time
      if (now.getTime() > item?.expiry) {
          // If the item is expired, delete the item from storage
          // and return null
          localStorage.removeItem(key);
          return {
              value: null,
              expired: true,
          };
      } else {
          return {
              value: item.value,
              expired: false,
          };
      }
  }
  export function removeFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
  
  export function setWithExpiry<T>(key: string, value: T, ttl: number): void {
    const now = new Date();
  
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  export function saveToLocalStorage<T>(key: string, value: T): void{
    localStorage.setItem(key, JSON.stringify(value));
  }
  export function getFromLocalStorage<T>(key: string): T{
    const value = localStorage.getItem(key) as string;
    return JSON.parse(value || '{}') as T;


  }
  export function saveToSessionStorage<T>(key: string, value: T): void {
      const item = {
          value,
      };
    sessionStorage.setItem(key, JSON.stringify(item));
  }
  export function getFromSessionStorage<T>(key: string): {
      value: T | null
  } {
    const data = sessionStorage.getItem(key);
    if (data) {
        const item = JSON.parse(data) as {
              value: T;
        };
        return {
            value: item.value,
        };
    } else {
        return {
            value: null
        };
    }
  }
  
  export function removeFromSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }
  export function clearSessionStorage(): void {
    sessionStorage.clear();
  }