
export async function POST(request: Request) {
  try {

    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response((e as any).message, { status: 500 });
  }
}




