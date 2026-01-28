export const base44 = {
  integrations: {
    Core: {
      InvokeLLM: async (message) => {
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
          });
          
          const data = await response.json();

          if (data.error) {
            return `Ups! Chatbot-ul spune: ${data.error}`;
          }
          
          return data.reply || "Nu am primit un răspuns de la AI.";
        } catch (error) {
          return "Serverul chatbot-ului nu răspunde. Verifică dacă folderul 'api' este la locul lui!";
        }
      }
    }
  }
};