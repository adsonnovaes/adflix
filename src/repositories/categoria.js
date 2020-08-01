import config from '../config';

const URL_CATEGORIES = `${config.URL_BACK}/categoria`;

function getAll(){
    return fetch(`${URL_CATEGORIES}`).then( async (answerServer) => {
    if(answerServer.ok){
        const answer = await answerServer.json();
        return answer;}
    });

    throw new Error('Não foi possível o acesso');
}

function getAllVideos(){
    return fetch(`${URL_CATEGORIES}/?_embed=videos`).then( async (answerServer) => {
    if(answerServer.ok){
        const answer = await answerServer.json();
        return answer;}
    });

    throw new Error('Não foi possível o acesso');
}

export default {
    getAllVideos,
    getAll,
}