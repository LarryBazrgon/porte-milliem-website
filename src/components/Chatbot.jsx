import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: 'Bună ziua! Sunt asistentul virtual Porte Milliem. Cum vă pot ajuta astăzi? Vă pot oferi informații despre colecțiile noastre de uși interioare, prețuri, caracteristici tehnice sau orice altă întrebare aveți.'
};

const CONTEXT = `Ești asistentul virtual pentru Porte Milliem, o companie românească specializată în producția și vânzarea de uși interioare premium.

Informații despre companie:
- Porte Milliem activează din 1980 în sectorul lemnului
- Oferim 6 colecții principale: Lăcuit (finisaje lucioase/mate, personalizare culori RAL), Laminat (rezistent la zgârieturi, efect lemn natural), Cristal (sticlă securizată, design decorativ), Lemn Masiv (lemn natural 100%, esențe nobile), Filo Muro (montaj la nivelul peretelui, design minimalist), Antifoc (certificare REI 30/60/90)
- Toate produsele sunt realizate cu tehnologie modernă și măiestrie artizanală
- Oferim personalizare completă, consultanță gratuită și garanție

Contact:
- Adresă: Strada Industriei Nr. 15, București, România
- Telefon: +40 21 123 4567
- Email: info@portemilliem.ro
- Program: Luni-Vineri 08:00-18:00, Sâmbătă 09:00-14:00

Răspunde în limba română, fii prietenos, profesionist și concis. Dacă nu știi un răspuns exact, direcționează clientul să contacteze echipa direct.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages.map(msg => 
        `${msg.role === 'user' ? 'Client' : 'Asistent'}: ${msg.content}`
      ).join('\n\n');

      const prompt = `${CONTEXT}

Istoric conversație:
${conversationHistory}

Client: ${userMessage.content}

Asistent:`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
        add_context_from_internet: false
      });

      const assistantMessage = {
        role: 'assistant',
        content: response
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Ne cerem scuze, a apărut o eroare. Vă rugăm încercați din nou.');
      
      const errorMessage = {
        role: 'assistant',
        content: 'Ne cerem scuze, am întâmpinat o problemă tehnică. Vă rugăm să ne contactați direct la +40 21 123 4567 sau info@portemilliem.ro pentru asistență.'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#A32035] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#8a1b2d] transition-colors"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#A32035] to-[#8a1b2d] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Asistent Porte Milliem</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online acum
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-[#A32035] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-[#A32035] text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                  
                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-8 h-8 bg-[#A32035] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Scrieți mesajul dvs..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#A32035] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="w-12 h-12 bg-[#A32035] text-white rounded-full flex items-center justify-center hover:bg-[#8a1b2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Asistentul poate face greșeli. Verificați informațiile importante.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}