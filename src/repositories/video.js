import config from '../config';

const URL_VIDEOS = `${config.URL_BACK}/videos`

function Create(infoVideo){
    return fetch(`${URL_VIDEOS}/?_embed=videos`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(infoVideo),
    }).then( async (answerServer) => {
    if(answerServer.ok){
        const answer = await answerServer.json();
        return answer;}
    });

    throw new Error('Não foi possível o acesso');
}

export default {
    Create,
}