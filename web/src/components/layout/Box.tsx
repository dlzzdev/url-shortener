import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface IBox {
  headerTitle: string;
  headerSubtitle?: string;
  input: boolean;
  inputValue?: string;
  inputPlaceholder?: string;
  inputButtonValue?: string;
  textInPlaceInput?: string;
  footerText?: string;
  handleShortenedUrl?(url: string): void;
}

export const Box = ({
  headerTitle,
  headerSubtitle,
  input,
  inputValue,
  inputPlaceholder,
  inputButtonValue,
  textInPlaceInput,
  footerText,
  handleShortenedUrl,
}: IBox) => {
  const [url, setUrl] = useState("");
  const params = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue) {
      const input = document.querySelector("input")!;
      input.select();
      input.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(input.value);
    } else {
      handleShortenedUrl!(url);
      setUrl("");
    }
  };

  return (
    <>
      <div className="max-w-md max-h-64 w-full h-full rounded shadow-lg bg-neutral-100 text-center mt-16">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-neutral-900">
            {headerTitle}
          </div>
          <p className="text-neutral-700 font-light">{headerSubtitle}</p>
        </div>
        <div className="py-2 text-neutral-900">
          {input ? (
            <>
              <input
                type="text"
                className="bg-neutral-400 p-2 rounded-l-md text-xs w-3/5 placeholder:text-white focus:outline-none"
                onChange={handleInputChange}
                value={inputValue ? inputValue : url}
                placeholder={inputPlaceholder}
                disabled={inputValue ? true : false}
              />
              <button
                className="bg-neutral-500 p-2 rounded-r-md text-xs disabled:bg-neutral-300"
                onClick={handleButtonClick}
                disabled={inputValue ? false : url.length < 10 ? true : false}
              >
                {inputButtonValue}
              </button>
            </>
          ) : (
            <>
              <p className="font-bold text-3xl">{textInPlaceInput}</p>
            </>
          )}
        </div>
        <div className="px-6 pt-4 pb-8">
          <p className="text-neutral-700 font-medium">
            {footerText ? (
              footerText
            ) : params.id ? (
              <>
                Acompanhe a{" "}
                <Link
                  to="/hits/"
                  className="text-blue-500"
                >
                  quantidade de cliques
                </Link>{" "}
                feitas em outra URL encurtada
              </>
            ) : (
              <>
                Acompanhe a{" "}
                <Link
                  to={`/hits/${inputValue?.slice(-9)}`}
                  className="text-blue-500"
                >
                  quantidade de cliques
                </Link>{" "}
                feitas em sua URL encurtada
              </>
            )}
          </p>
        </div>
      </div>
      <div className="mt-16 text-center max-w-screen-sm">
        O Encurtador é uma ferramenta grátis para encurtar links de redes
        sociais e sites mais acessados da Internet. Use o nosso Encurtador de
        URL para diminuir uma URL longa e gerar um link curto.
      </div>
    </>
  );
};
