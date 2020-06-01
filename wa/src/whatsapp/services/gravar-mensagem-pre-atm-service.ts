import { gravaMensagem } from './../../controllers/mensagem-service';

export const gravarMensagemPreAtm = async (atendimento_id: number, mensagem) => {
    console.log('gravar msg pre atm');
    let atendimento = '1';
    if (mensagem.messages[0].type == 'chat') {
        await gravaMensagem(atendimento, 'CLIENTE', mensagem.messages[0].message.trim(), mensagem.messages[0].id, '0', null,'', '', '', 'False', 'False','texto');
    } else if (mensagem.messages[0].type == 'chat') {
        
    }
} 