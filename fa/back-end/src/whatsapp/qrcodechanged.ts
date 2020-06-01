
import { io } from './../libs/io';
import { getRemetenteById, Remetente } from './../models/remetente-model';

export const qrcodechanged = async (evento, remetente_id) => {
    let remetente = await getRemetenteById(remetente_id);
    if(remetente){
        await remetente.page.evaluate('getStatusJson();');
    }
    io.emit('qrcodechanged', JSON.stringify({ success: true, remetente_id: remetente_id }));
}
