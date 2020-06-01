import { 
    Remetente, 
    addRemetente, 
    RemetenteTipo
} from './models/remetente-model';
import { 
    getBrowser, 
} from './controllers/remetente-controller';

export default async (remetente_id?: number) => {

        const item = {
            
            id: 1,
            empresa_id: 1,
            descricao: 'desc teste',
            grupo_id: 1,
            grupo_nome: '1',
            tipo: 'WHATSAPP',
            status: 'DESCONECTADO',
            remetente: '558391725048',
            palavra_chave: '1',
            impulsionar: '1',
            redirect: 1,
            mynumber: '558391725048',
            token: '1',
            whatsapp_fixo_movel: '1'
        }
        const remetente: Remetente = {
            id: item.id,
            empresa_id: item.empresa_id,
            descricao: item.descricao,
            grupo_id: item.grupo_id,
            grupo_nome: item.grupo_nome,
            tipo: (item.tipo == 'WHATSAPP' ? RemetenteTipo.WHATSAPP : (item.tipo == 'FACEBOOK' ? RemetenteTipo.FACEBOOK : RemetenteTipo.WEB)),
            // status: 'DESCONECTADO',
            status: (item.tipo == 'FACEBOOK' ? 'CONECTADO' : 'DESCONECTADO'),
            remetente: item.remetente,
            palavra_chave: item.palavra_chave,
            impulsionar: item.impulsionar,
            redirect: item.redirect,
            mynumber: item.mynumber,
            token: item.token,
            tipo_phone_whatsapp: item.whatsapp_fixo_movel
        }
         
        if (remetente.tipo == RemetenteTipo.WHATSAPP) {
            console.log( 'getBrowser(); -> ' , await getBrowser(remetente));
        }

        console.log( 'addRemetente(); -> ', await addRemetente(remetente));


    if (remetente_id) return;



} 