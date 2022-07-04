import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Box } from "../components/layout/Box";

const Home = () => {
  const [originUrl, setOriginUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isShortenedUrl, setIsShortenedUrl] = useState(false);
  const params = useParams();
  console.log(params);

  const handleShortenedUrl = (url: string) => {
    setOriginUrl(url);
  };

  useEffect(() => {
    if (originUrl !== "") {
      const fetch = async (originUrl: string) => {
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_API}/short/`,
            {
              origUrl: originUrl,
            }
          );
          const shortUrl = `${process.env.REACT_APP_URL}/${data.urlId}`;
          console.log(shortUrl);
          setShortenedUrl(shortUrl);
          setIsShortenedUrl(true);
        } catch (err) {
          toast.error("A URL informada é invalida.");
        }
      };
      fetch(originUrl);
    }
  }, [originUrl]);

  useEffect(() => {
    if (params.id) {
      window.location.replace(`${process.env.REACT_APP_API}/${params.id}`);
    }
  }, [params]);

  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center">
        {!isShortenedUrl ? (
          <Box
            headerTitle="Cole a URL que deseja encurtar"
            input={true}
            inputPlaceholder="Cole o link que deseja encurtar"
            inputButtonValue="Encurtar"
            footerText="O Encurtador de URL permite diminuir um link longo tornando-o fácil de lembrar."
            handleShortenedUrl={handleShortenedUrl}
          />
        ) : (
          <Box
            headerTitle="Sua URL encurtada"
            headerSubtitle="Copie o link encurtado e o compartilhe."
            input={true}
            inputValue={shortenedUrl}
            inputPlaceholder="Cole o link que deseja encurtar"
            inputButtonValue="Copiar"
            handleShortenedUrl={handleShortenedUrl}
          />
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Home;
