# Generator-Images AI
# Generador de Imágenes con React y OpenAI DALL·E
<br>
<img width="1594" height="836" alt="image" src="https://github.com/user-attachments/assets/5f1c1b4b-0fb3-4375-afc4-3b787915edf7" />
<br>
<img width="1597" height="833" alt="image" src="https://github.com/user-attachments/assets/716df93e-edf0-4b57-8cdc-653650cd844e" />
<br>
<img width="1583" height="819" alt="image" src="https://github.com/user-attachments/assets/043fd102-8393-47e6-a779-2d02a93b9ad1" />
<br>
<img width="753" height="704" alt="image" src="https://github.com/user-attachments/assets/d3aaa0df-d535-4e44-8fc8-a4568b34ee56" />
<br>
<br>
📌 Descripción
<br>
Generator-images es una aplicación web desarrollada con React que permite a los usuarios generar imágenes personalizadas a partir de descripciones de texto. Utiliza la API de OpenAI DALL·E para transformar ideas creativas en imágenes de alta calidad. Los usuarios pueden ajustar parámetros como el estilo, la resolución y el número de imágenes generadas, y descargar los resultados para su uso en proyectos personales o profesionales.
Con una interfaz intuitiva y moderna, ImageGen-AI está diseñado para artistas, diseñadores, desarrolladores y cualquier persona que necesite generar imágenes de manera rápida y creativa.

✨ Características Principales
<br>
CaracterísticaDescripciónGeneración de imágenesCrea imágenes a partir de descripciones de texto utilizando la API de OpenAI DALL·E.PersonalizaciónAjusta parámetros como estilo, resolución (256x256, 512x512, 1024x1024) y cantidad de imágenes.Vista previaMuestra las imágenes generadas en una galería interactiva.Descarga de imágenesPermite descargar las imágenes en formato PNG o JPEG.Historial de generacionesGuarda un historial de las imágenes generadas para referencia futura.Interfaz con ReactDiseño responsivo y fácil de usar, con componentes reutilizables y gestión de estado.

🔧 Tecnologías Utilizadas
<br>
TecnologíaDescripciónReactBiblioteca para construir interfaces de usuario dinámicas y escalables.OpenAI DALL·E APIAPI para generar imágenes a partir de descripciones de texto.AxiosBiblioteca para realizar llamadas HTTP a la API de OpenAI.CSS ModulesEstilos modulares para mantener el código organizado y escalable.React RouterManejo de rutas para navegación entre secciones (generador, historial, configuración).
<br>
<img width="655" height="319" alt="image" src="https://github.com/user-attachments/assets/81e4cdbc-728d-45c3-a721-a22d69c187a3" />
<br>

⚙️ Instalación y Configuración
1. Requisitos previos

Node.js (v18 o superior)
Cuenta en OpenAI para obtener una API key de DALL·E

2. Clonar el repositorio
 Copygit clone https://github.com/Santiavila573/generator-images.git
cd imagegen-ai/client
3. Instalar dependencias
 Copynpm install
4. Configurar la API key
Crea un archivo .env en la raíz del proyecto client/ y agrega tu API key de OpenAI:
 CopyREACT_APP_OPENAI_API_KEY=tu_api_key_de_openai
5. Ejecutar la aplicación
 Copynpm start

La aplicación estará disponible en http://localhost:3000.


🎯 Funcionalidades Clave

Generación de imágenes: Los usuarios ingresan una descripción de texto, y la aplicación genera imágenes basadas en esa descripción.
Personalización: Se pueden ajustar parámetros como el estilo artístico, la resolución y el número de imágenes generadas.
Vista previa: Las imágenes generadas se muestran en una galería interactiva para que el usuario pueda revisarlas.
Descarga: Las imágenes pueden descargarse en alta resolución para su uso en proyectos.
Historial: Todas las imágenes generadas se guardan en un historial para referencia futura.


📊 Ejemplo de Uso

Ingresar descripción: El usuario escribe una descripción detallada de la imagen que desea generar (ej: "Un paisaje futurista con montañas flotantes y un cielo morado al atardecer").
Ajustar parámetros: Selecciona la resolución y el estilo deseado.
Generar imágenes: La aplicación envía la solicitud a la API de OpenAI y muestra las imágenes generadas.
Descargar imágenes: El usuario puede descargar las imágenes que más le gusten.


🔗 Integración con la API de OpenAI DALL·E
Para generar imágenes, la aplicación realiza llamadas a la API de OpenAI DALL·E. Aquí tienes un ejemplo de cómo implementar esta funcionalidad en JavaScript:
 Copyimport axios from 'axios';

const generarImagen = async (descripcion, resolucion = '512x512') => {
  const response = await axios.post(
    'https://api.openai.com/v1/images/generations',
    {
      prompt: descripcion,
      n: 1, // Número de imágenes a generar
      size: resolucion, // Resolución de la imagen (256x256, 512x512, 1024x1024)
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.data[0].url; // URL de la imagen generada
};

export default generarImagen;

📝 Contribuciones
¡Las contribuciones son bienvenidas! Para colaborar:

Abrir un issue con la propuesta.
Crear un fork del repositorio.
Enviar un pull request con los cambios.


📜 Licencia
Este proyecto está bajo la licencia Apache 2.0. Consulta el archivo LICENSE para más detalles.

📬 Contacto

Autor: Santiago Avila
<br>
Correo: avilasantiago917@ngmail.com
<br>
Linkedin: https://www.linkedin.com/in/santiago-ávila-301047200
