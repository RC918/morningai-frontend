import {getLocale, getMessages} from 'next-intl/server';

export async function GET() {
  const locale = await getLocale();
  const messages = await getMessages();
  return Response.json({
    runtimeLocale: locale,
    langCheck: messages?.LANG_CHECK,
  });
}

