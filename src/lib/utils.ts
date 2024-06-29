import { cookiesGet } from './options';
import { ICookie } from './type';

export const parseCookies = (cookies: chrome.cookies.Cookie[]): ICookie => {
  const cookiesParsed: ICookie = {
    ltoken: '',
    ltokenV2: '',
    ltuid: 0,
    ltuidV2: 0,
  };
  Object.entries(cookiesGet).forEach(([key, value]) => {
    const cookieFind = cookies.find((cookie) => cookie.name === value);
    (cookiesParsed as any)[key] = cookieFind?.value || '';
  });

  return cookiesParsed as ICookie;
};
