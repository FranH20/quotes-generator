import React from "react";
import { CardQuoteSkeleton } from "../../components/ui/skeletons";
import { useSelector } from "react-redux";
import { ContentQuoteSelector, CopyButtonQuoteSelector } from "./twinStyle";
import { copyClipboard } from "../../utils/functions/copyClipboard";
import toast, {Toaster} from "react-hot-toast";
const QuoteSelector = () => {
  const { loading, data } = useSelector((state) => state.quote);

  const copyTextIntoClipboard = () => {
    const texto = data.quote + "\n- " + data.author;
    copyClipboard(texto)
      .then(() => toast.success("Contenido copiado al portapapeles"))
      .catch((error) => toast.error("Error al copiar: ", error.toString()));
  };

  if (loading) {
    return <CardQuoteSkeleton />;
  }

  if (!loading && data.quote !== "") {
    const author = data.author ? `- ${data.author}` : "- Anonimo";
    return (
      <ContentQuoteSelector>
        <span>{data.quote}</span>
        <em>{author}</em>
        <CopyButtonQuoteSelector onClick={copyTextIntoClipboard}>
          <img src="/img/copy-alt.svg" alt="Copy clipboard icon" />
          Copiar cita
        </CopyButtonQuoteSelector>
        <Toaster />
      </ContentQuoteSelector>
    );
  }

  return (
    <picture>
      <img
        src="/img/cita-derecha-90.svg"
        alt="Image quote description"
        className="flex items-center h-full"
      />
    </picture>
  );
};

export default QuoteSelector;
