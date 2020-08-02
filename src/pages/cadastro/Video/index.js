import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/ButtonCadastro';
import videosRepository from '../../../repositories/video';
import CategoriasRepository from '../../../repositories/categoria'; 


function CadastrarVideo () {
    const history = useHistory(); 
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo})=> titulo)
    const { values, handleChange} = useForm({
        titulo: 'Reboots desnecessários',
        url: 'https://www.youtube.com/watch?v=LeIWF__fSfo',
        categoria: 'Front End'
    });

    useEffect(()=>{
        CategoriasRepository.getAll().then((categoriaServer)=>{
            setCategorias(categoriaServer);

        })
    },[])

    return ( 
        <PageDefault buttonPage="Nova Categoria" link="/cadastro/categoria">
            <h1>Cadastro de vídeo:</h1>

            <form onSubmit={(event)=>{
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria)=>{
                    return categoria.titulo === values.categoria;
                })

                videosRepository.Create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                }).then(()=>{
                    history.push('/');

                })


            }}>
                <FormField
                    label="Título do Vídeo:"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL:"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria:"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <Button type="submit" >
                    Cadastrar
                </Button>

            </form>
        </PageDefault>
    )
}

export default CadastrarVideo;
