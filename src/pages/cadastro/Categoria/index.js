import React, {useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// quando queremos uma duplicidade de dados e não ter problema com a key, concatena o indice com a informação, uma forma de "burlar";

function CadastroCategoria () {
    const valoresIniciais = {
        nome: '',
        descricao:'',
        cor:'',
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);



    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,

        })

    }

    function handleChange(infoEvento){    
        setValue(
            infoEvento.target.getAttribute('name'), infoEvento.target.value)
    }

    useEffect(()=>{
        const URL = 'http://localhost:8080/categoria';
        fetch(URL).then( async (answerServer) => {
            const answer = await answerServer.json();
            setCategorias([
                ...answer,
            ]);
        });       

    },[]);
 
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit (infoEvento) {
                infoEvento.preventDefault()
                setCategorias([
                    ...categorias, // esses três pontinhos é uma forma de manter todos os dados que já tinham.
                    values
                ]);

                setValues(valoresIniciais)

            }}>

                <FormField
                    label="Nome da Categoria:"
                    type="text"
                    name="nome"
                    value={values.nome}
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
                            {categoria.nome}
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