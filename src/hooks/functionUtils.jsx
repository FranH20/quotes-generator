import download from "downloadjs";
import html2canvas from "html2canvas";

export function getJsonValues(text, name) {
    return {
        text: text,
        author: name,
      };
}

export async function downloadImage(element) {
  const canvas = await html2canvas(element);
  const dataUrl = canvas.toDataURL('image/png');
  downloadJs(dataUrl, 'quote-generator.png', 'image/png')
}


function downloadJs(data, strFileName, strMimeType) {
  download(data, strFileName, strMimeType)
}


