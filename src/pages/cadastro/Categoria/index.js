import React, {useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../config';

// quando queremos uma duplicidade de dados e não ter problema com a key, 
//concatena o indice com a informação, uma forma de "burlar";
function CadastroCategoria () {
    const valoresIniciais = {
        titulo: '',
        descricao:'',
        cor:'',
    }
    const {values, handleChange, clearForm} = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        const URL = `${config.URL_BACK}/categoria`;
        fetch(URL).then( async (answerServer) => {
            const answer = await answerServer.json();
            setCategorias([
                ...answer,
            ]);
        });       

    },[]);
 
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.titulo}</h1>

            <form onSubmit={function handleSubmit (infoEvento) {
                infoEvento.preventDefault()
                setCategorias([
                    ...categorias, // esses três pontinhos é uma forma de manter todos os dados que já tinham.
                    values
                ]);

                clearForm();

            }}>

                <FormField
                    label="Título da Categoria:"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="textarea"
                    name="descricao"
                    value= {values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor:"
                    type="color"
                    name="cor"
                    value= {values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 &&(
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice)=>{
                    return (
                        <li key={`${categoria}${indice} `}> 
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;