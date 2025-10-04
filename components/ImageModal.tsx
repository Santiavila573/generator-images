import React from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ai-image-${Date.now()}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div 
        className="bg-gray-900 p-4 rounded-lg shadow-2xl relative max-w-[95vw] max-h-[95vh] flex flex-col gap-4 transform transition-transform duration-300 animate-scaleIn"
        onClick={stopPropagation}
      >
        <h2 id="image-modal-title" className="sr-only">Vista ampliada de la imagen</h2>
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg z-10 hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <div className="overflow-auto">
          <img src={imageUrl} alt="Vista ampliada generada por IA" className="max-w-full max-h-[85vh] object-contain mx-auto rounded-md" />
        </div>
        <button 
          onClick={handleDownload} 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Descargar Imagen
        </button>
      </div>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ImageModal;