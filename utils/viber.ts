export const sendViberMessage = async (text: string) => {
  const messageData = {
    receiver: "7wmYW23Ddo46PlaTeQj09Q==",
    type: "text",
    text
  };

await fetch('https://chatapi.viber.com/pa/send_message', {
    method: 'POST',
    headers: {
      'X-Viber-Auth-Token' : '512e33906867e3dc-f3cf1fd5857baf6f-ed18aca7d282b85b'
    },
    body: JSON.stringify(messageData)
  }, )

};