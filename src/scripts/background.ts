import { parseCookies } from '../lib/utils';

chrome.runtime.onMessageExternal.addListener(async (request, sender, sendResponse) => {
  const { action } = request;

  switch (action) {
    case 'syncCookies': {
      const cookies = await chrome.cookies.getAll({ domain: '.hoyolab.com' });
      const cookiesParsed = parseCookies(cookies);
      sendResponse({ cookies: cookiesParsed });
      break;
    }
    default: {
      sendResponse('Unknown action');
      break;
    }
  }
});
