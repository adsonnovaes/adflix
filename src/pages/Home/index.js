import React, {useEffect, useState} from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault'
import categoriesRepository from '../../repositories/categoria'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(()=>{
    categoriesRepository.getAllVideos().then((categoriesVideos)=>{
      console.log(dadosIniciais)
      setDadosIniciais(categoriesVideos);

    })

  }, []);
  // http://localhost:8080/categoria?_embed=video 

  return (
    <PageDefault paddingAll={0} buttonPage="Novo Vídeo" link="/cadastro/video">
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}    


    </PageDefault>
  );
}

export default Home;