import axios from 'axios';

export function track(name: string): void {
  // eslint-disable-next-line no-undef
  someRandomFunction(name);
}

export async function apiCall(): Promise<any> {
  try {
    const data = axios.request({
      url: 'url',
    });
    return data;
  } catch (error) {
    throw error;
  }
}
