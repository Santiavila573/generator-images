import OpenAI from 'openai';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error("VITE_OPENAI_API_KEY environment variable not set");
}

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    // Se enriquece el prompt para solicitar una imagen de mayor calidad.
    const hdPrompt = `${prompt}, alta definición, 4k, fotorrealista`;

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: hdPrompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    if (response.data && response.data.length > 0) {
      const base64Image = response.data[0].b64_json;
      return `data:image/png;base64,${base64Image}`;
    } else {
      throw new Error("No se pudo generar la imagen. La respuesta de la API estaba vacía.");
    }
  } catch (error) {
    console.error("Error al generar la imagen con OpenAI:", error);
    throw new Error("Hubo un problema al contactar al servicio de IA. Por favor, inténtalo de nuevo más tarde.");
  }
};