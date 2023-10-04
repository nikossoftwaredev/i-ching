import { sendViberMessage } from "@/utils/viber";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if(body.event === 'message') {
      const {  sender } = body;
      const { id } = sender;

      await sendViberMessage(id)

    }


    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response((e as any).message, { status: 500 });
  }
}




