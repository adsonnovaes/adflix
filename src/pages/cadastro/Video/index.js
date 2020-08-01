import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/video'


function CadastrarVideo () {
    const history = useHistory(); 
    const { values, handleChange} = useForm({
        titulo: 'Video avulso',
        url: 'https://www.youtube.com/watch?v=zum3Ez8VgkY',
        categoria: 'Front End'
    });

    return (
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event)=>{
                event.preventDefault();

                //videosRepository.Create() parei aqui!!!


                history.push('/');
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
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria

            </Link>
        </PageDefault>
    )
}

export default CadastrarVideo;
