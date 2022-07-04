import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box } from "../../components/layout/Box";

const Hits = () => {
  const [data, setData] = useState({
    hits: "0",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      const fetch = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/info/${params.id}`
        );
        setData(data);
      };
      fetch();
    }
  }, [params]);

  const handleShortenedUrl = (url: string) => {
    navigate(`/hits/${url.slice(-9)}`);
  };

  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center">
        {params.id ? (
          <Box
            headerTitle="Total de Cliques da URL"
            headerSubtitle="O número total de cliques que seu link recebeu até agora."
            input={false}
            textInPlaceInput={data.hits}
          />
        ) : (
          <Box
            headerTitle="Contador de Cliques da URL"
            headerSubtitle="Digite a URL curta abaixo para descobrir quantos cliques ela recebeu até agora."
            input={true}
            inputPlaceholder="Digite a sua URL encurtada"
            inputButtonValue="Visualizar"
            footerText="Exemplo: encurtadorbla.com/xDeFzL"
            textInPlaceInput={data.hits}
            handleShortenedUrl={handleShortenedUrl}
          />
        )}
      </div>
    </section>
  );
};

export default Hits;
