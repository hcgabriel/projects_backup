import { getRemetenteById } from "./../models/remetente-model";
import * as dataTempo from 'node-datetime';
import { io } from "./../libs/io";


export const updateMessagesId = async (mensagens: any[], remetente_id: number) => {
    let contato = mensagens[0].contactId;
    let remetente = await getRemetenteById(remetente_id);

    let fone = mensagens[0].contactId.substring(0, mensagens[0].contactId.indexOf('@'));
    if (fone.length == 12) fone = fone.substring(0, 4) + '9' + fone.substring(4);
    let dt = dataTempo.create();
    let data = dt.format('Y-m-d H:M:S');
}
export const updateStatusMensagem = async (evento: any) => {
    let mensagemId = evento.id.id;

    let dt = dataTempo.create(new Date(evento.t * 1000));
    let data = dt.format('Y-m-d H:M:S');
}


                                    //novos campos: base64file file_name type_file exists_image exists_document
export const gravaMensagem = async (
    origem: string, 
    mensagem: string, 
    mensagem_id: string, 
    msg_agent_id: number,
    pData: string,
    base64file: string,
    file_name: string,
    type_file: string,
    exists_image: string,
    exists_document: string,
    type_mensagem: string,
    quotedMessage: string
) => {
    let remetente = await getRemetenteById(1);
    let data
    // if (type_mensagem == 'texto' && mensagem) {
    if (mensagem) {
        mensagem = mensagem.replace(/\\/g, '\\\\');
        mensagem = mensagem.replace(/'/g, '');
    }
        
    if (!pData) {
        let dt = dataTempo.create();
        data = dt.format('Y-m-d H:M:S');
    } else {
        data = pData;
    }
                console.log('entrou na msg service')
                //VERIFICAR SE MSG DE IMG OU FILE
                if (exists_image == 'False' && exists_document == 'False') {
                    console.log('deu certo msg texto: ',mensagem);
                    mensagem = mensagem.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&apos;/g, "\\'").replace(/<br>/g, '\\n').replace(/&quot;/g, '"');
                        await remetente.page.evaluate('sendMessageToNumber("5583991725048","' + mensagem + '");');

    }
}
