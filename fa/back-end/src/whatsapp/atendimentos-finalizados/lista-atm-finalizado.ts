import { database } from './../../libs/conexao';
import { io } from './../../libs/io';

export const listAtendimentosFinalizados = async (agente_id: number, empresa_id: number) => {
    // console.log('agente id: '+agente_id+', e empresa id: '+empresa_id);
    // let dadosAtmFinalizados: any = await database.query("select a.*, r.descricao, c.nome, c.cpf, c.telefone, c.email, c.whatsapp_url_avatar from tb_atendimento a "+
    // " left join tb_remetente r on r.id = a.remetente_id left join tb_cliente c on c.id = a.cliente_id where a.agente_id = "+agente_id+" and a.empresa_id = "+empresa_id+" "+
    // " and datahora_fim is not null GROUP BY a.cliente_id");
    // if (dadosAtmFinalizados[0][0]) {
    //     // emitindo a lista de array finalizados   987400061 -- albeneir   || 98731-9817 -- fabia show tecnologia  
    //     for (let index = 0; index < dadosAtmFinalizados[0].length; index++) {
    //         const atm = dadosAtmFinalizados[0][index];
            
    //         io.emit('arrayAtendimentoFinalizados', JSON.stringify({
    //             usuario_id: atm.agente_id,
    //             remetente_id: atm.remetente_id,
    //             tronco: atm.descricao,
    //             cliente_id: atm.cliente_id,
    //             cliente_nome: atm.nome,
    //             cliente_cpf: atm.cpf,
    //             cliente_telefone: atm.telefone,
    //             cliente_email: atm.email,
    //             avatar: atm.whatsapp_url_avatar,
    //             protocolo: atm.protocolo,
    //             atendimento_id: atm.id,
    //             id: atm.id,
    //             datahora_inicio: atm.datahora_inicio,
    //             datahora_fila: atm.datahora_fila,
    //             tipo: atm.tipo,
    //             intervencao: atm.intervencao,
    //             liberar_intervencao: atm.liberar_intervencao,
    //             atm_finalizado: true
    //         }));
    //     }
    // }
}