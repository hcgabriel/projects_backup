import { getRemetentes } from './../models/remetente-model';
import * as dataTempo from 'node-datetime';
import { io } from './../libs/io';

export const statusTronco = async () => {
    // console.log('entrei no status do tronco');
    let empresas = [];
    let troncos: any = await getRemetentes();

    for (let index = 0; index < troncos.length; index++) {
        const tronco = troncos[index];
        
        let empresa = empresas.find(x => x.empresa_id == tronco.empresa_id);
        if (!empresa) {
            empresa = {
                empresa_id: tronco.empresa_id,
                troncos: []
            }
        }

        empresas.push(empresa);
    }

    for (let index = 0; index < empresas.length; index++) {
        const empresa = empresas[index];
    }
}