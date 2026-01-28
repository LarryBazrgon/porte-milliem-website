export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Folosește POST' });
  }

  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  // Verificăm dacă cheia există în server
  if (!apiKey) {
    console.error("EROARE: Cheia OPENAI_API_KEY lipsește din Vercel Settings!");
    return res.status(500).json({ error: 'Cheia API nu a fost găsită pe server.' });
  }

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
          { role: "system", content: "Ești asistentul virtual Porte Milliem. Vorbești politicos și elegant despre uși premium." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    // Dacă OpenAI dă eroare (ex: n-ai bani în cont)
    if (data.error) {
      console.error("OpenAI Error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: 'Eroare de conexiune la OpenAI' });
  }
}