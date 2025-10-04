import React, { useState, useEffect, useRef } from 'react';
import type { Message } from './types';
import { generateImage } from './services/openaiService';
import ChatInput from './components/ChatInput';
import MessageBubble from './components/MessageBubble';
import ImageModal from './components/ImageModal';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'bot',
      text: '¡Hola! Soy tu asistente de IA para crear imágenes en alta definición. Describe la escena que tienes en mente y la haré realidad para ti. \n\nPor ejemplo: "Un astronauta montando un caballo en Marte, estilo fotorrealista".',
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const botWelcomePhrases = [
      "¡Claro! Aquí tienes una imagen en alta definición basada en tu idea:",
      "¡Entendido! Creando algo especial y detallado para ti...",
      "¡A la orden! He generado esta obra de arte a partir de tu descripción:",
      "¡Perfecto! Echa un vistazo a esta creación en alta resolución:",
  ];

  const botErrorPhrases = [
      "¡Vaya! Parece que mis pinceles digitales se atascaron. ¿Podrías intentar con otra idea?",
      "Lo siento, no pude procesar esa solicitud. ¿Quizás algo un poco diferente?",
      "Hmm, algo no salió como esperaba. Por favor, reformula tu petición.",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (prompt: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
    };

    const loadingMessage: Message = {
        id: `bot-loading-${Date.now()}`,
        sender: 'bot',
        isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setIsLoading(true);

    try {
      const imageUrl = await generateImage(prompt);
      const randomWelcome = botWelcomePhrases[Math.floor(Math.random() * botWelcomePhrases.length)];
      
      const botTextMessage: Message = {
        id: `bot-text-${Date.now()}`,
        sender: 'bot',
        text: randomWelcome,
      };

      const botImageMessage: Message = {
        id: `bot-image-${Date.now()}`,
        sender: 'bot',
        imageUrl: imageUrl,
      };
      
      setMessages((prev) => [...prev.filter(m => !m.isLoading), botTextMessage, botImageMessage]);

    } catch (error) {
        const randomError = botErrorPhrases[Math.floor(Math.random() * botErrorPhrases.length)];
        const errorMessage: Message = {
            id: `bot-error-${Date.now()}`,
            sender: 'bot',
            text: `${randomError}\n\n${error instanceof Error ? error.message : 'Error desconocido'}`,
        };
        setMessages((prev) => [...prev.filter(m => !m.isLoading), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const openImageModal = (url: string) => {
    setModalImageUrl(url);
  };

  const closeImageModal = () => {
    setModalImageUrl(null);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 overflow-hidden">
        <header className="p-4 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 shadow-lg text-center">
            <h1 className="text-xl font-bold tracking-wider">Creador de Imágenes con IA</h1>
            <p className="text-sm text-blue-300">Potenciado por OpenAI</p>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} onImageClick={openImageModal} />
            ))}
            <div ref={chatEndRef} />
            </div>
        </main>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        {modalImageUrl && (
          <ImageModal imageUrl={modalImageUrl} onClose={closeImageModal} />
        )}
    </div>
  );
};

export default App;