import {getTranslations, getLocale} from 'next-intl/server';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const ns = searchParams.get('ns') ?? 'common';
  const key = searchParams.get('key') ?? 'title';
  const locale = await getLocale();
  
  try {
    const t = await getTranslations({locale, namespace: ns});
    const value = t.optional(key) ?? null;
    
    return new Response(JSON.stringify({
      locale,
      ns,
      key,
      value,
      status: 'success'
    }), {headers: {'content-type': 'application/json'}});
  } catch (error) {
    return new Response(JSON.stringify({
      locale,
      ns,
      key,
      value: null,
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {headers: {'content-type': 'application/json'}});
  }
}

