import { getRemetenteByMyNumber } from "../../models/remetente-model";
import { getRemetenteById } from './../../models/remetente-model';


export const sendMessageToApi = async (parametros) => {
    console.log('##### Disparo via API - Tronco: '+parametros.trunk);
    // console.log('parametros: ',parametros);
    // let tronco = await getRemetenteByMyNumber(parametros.trunk); 
    let tronco = await getRemetenteById(parametros.trunk); 
    if (!tronco) {
        return {
            statusCode: 404,
            status: false,
            msg: 'Tronco não encontrado no sistema!',
            data: []
        }
    }
    
    if (!parametros.type_message) {
        return {
            statusCode: 404,
            status: false,
            msg: 'Não existe o tipo da mensagem!',
            data: []
        }
    }

    // ## checar se destino está em atendimento ##

    // ## checar tronco qtd envios ##
    
    // let exEnvioTronco = await getListTroncoEnvioApiByTroncoId(tronco.id);
    // console.log('exEnvioTronco: ',exEnvioTronco);

      
    let message: string = "";
    if (parametros.type_message == 'texto') {
               
        message = 'teste'
        await tronco.page.evaluate('sendMessageToNumber("' + parametros.destiny + '","' + message + '");');
        
    } else {
        
        let montaBase64 = 'data:';
        montaBase64 = montaBase64+(parametros.type_message == 'documento' ? (parametros.type_file == 'txt' ? 'text/plain' : 'application/') : 'image/');
        montaBase64 = montaBase64+(parametros.type_file == 'txt' ? '' : 
                (parametros.type_file == 'xlsx' ? 'vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 
                (parametros.type_file == 'docx' ? 'vnd.openxmlformats-officedocument.wordprocessingml.document' : 
                (parametros.type_file == 'jpg' ? 'jpeg' : parametros.type_file))));
        montaBase64 = montaBase64+';base64,';

        // let base64file = montaBase64+parametros.message;
        let base64file = parametros.message;
                
        if (parametros.type_message == 'imagem') {
            await tronco.page.evaluate('sendBase64MediaToNumber("' + parametros.destiny + '","' + base64file.replace(/(?:\r\n|\r|\n)/g, '') + '", "' + parametros.trunk + '", "image/' + parametros.type_file + '", "");');
        } else if (parametros.type_message == 'documento') {
            await tronco.page.evaluate('sendBase64MediaToNumber("' + parametros.destiny + '","' + base64file.replace(/(?:\r\n|\r|\n)/g, '') + '", "' + parametros.trunk+'.'+parametros.type_file +  '", "", "");');
        } else {
            return {
                statusCode: 404,
                status: false,
                msg: 'Esse tipo de documento não pode ser enviado!',
                data: []
            }
        }
    } 
      
    
    let paramsListTronco = {
        empresa_id: tronco.empresa_id,
        tronco_id: tronco.id,
        trunk: tronco.mynumber,
        destiny: parametros.destiny
    }
    
    let params = {
        empresa_id: tronco.empresa_id,
        tronco_id: tronco.id,
        destiny: parametros.destiny,
        trunk: tronco.mynumber,
        key_integration: parametros.key_integration,
        message: parametros.message,
        type_message: parametros.type_message,
        type_file: parametros.type_file
    }    
    
    return {
        statusCode: 201,
        status: true,
        msg: 'Mensagem enviada com sucesso!',
        data: []
    }
}