export const base44 = {
  integrations: {
    Core: {
      InvokeLLM: async (message) => {
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
          });
          
          const data = await response.json();
          return data.reply;
        } catch (error) {
          console.error("Eroare Chatbot:", error);
          return "Momentan am o mică problemă tehnică. Te rog să ne contactezi telefonic pentru asistență!";
        }
      }
    }
  }
};