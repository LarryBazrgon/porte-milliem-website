export default async function handler(req, res) {
  // Permitem doar cereri de tip POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY; // Vercel o va lua automat din setări

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system", 
            content: "Ești asistentul virtual Porte Milliem. Vinzi uși premium de interior și exterior. Ești politicos, elegant și ajuți clienții cu informații despre colecțiile noastre." 
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Eroare la comunicarea cu AI-ul' });
  }
}