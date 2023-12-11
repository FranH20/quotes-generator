export const copyClipboard = async (texto = "") => {
  await navigator.clipboard.writeText(texto);
  console.log('Contenido copiado al portapapeles');
};
