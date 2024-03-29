import download from "downloadjs";
import html2canvas from "html2canvas";

export function getJsonValues(text, name) {
  return {
    quote: text,
    author: name,
  };
}

export async function downloadImage(element) {
  const canvas = await html2canvas(element, {
    scale: 1,
    onclone: (_, actualElement) => {
      actualElement.style.width =
      actualElement.getAttribute("original-width") + "px";
      actualElement.style.height =
      actualElement.getAttribute("original-height") + "px";
    },
  });
  const dataUrl = canvas.toDataURL("image/png");
  downloadJs(dataUrl, "quote-generator.png", "image/png");
}

function downloadJs(data, strFileName, strMimeType) {
  download(data, strFileName, strMimeType);
}
