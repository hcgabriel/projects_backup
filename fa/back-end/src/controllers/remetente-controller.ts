import * as puppeteer from 'puppeteer';
import * as fs from 'fs'; 
import * as path from 'path';
import * as dataTempo from 'node-datetime';

import {
    Remetente,
    getRemetenteById,
    addRemetente,
    RemetenteTipo,
    getRemetentes,
    getRemetenteByEmpresaId,
    delRemetente
} from './../models/remetente-model';
import { CheckEvent } from './../whatsapp/console-service';
import { io } from './../libs/io';


export const getBrowser = async (remetente: Remetente) => {
    console.log('entrou no get browser')

    remetente.browser = await puppeteer.launch({
        headless: false,
        args: [
            '--user-data-dir=' + './cache/' + remetente.empresa_id.toString() + '/' + remetente.id.toString(),
            '--no-sandbox',
        ],
        // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });

    remetente.page = await remetente.browser.newPage();
    console.log('passou do remetente.page newpage')

    await remetente.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    await remetente.page.setViewport({ width: 960, height: 768 });
    await remetente.page.goto('https://web.whatsapp.com');
    console.log('kjashdkjahskjdhasjkdh')
    await remetente.page.evaluate(fs.readFileSync(path.join(__dirname, '..', 'libs', 'inject.js'), 'utf8'));
    console.log('kjashdkjahskjdhasjkdh')

    // await remetente.page.evaluate('startMonitoring();');
    console.log(await remetente.page.evaluate('startMonitoring();'));
    // await remetente.page.evaluate('startQrCodeMonitoring();');
    console.log(await remetente.page.evaluate('startQrCodeMonitoring();'));

    remetente.page.on('load', function (e) {
        remetente.page.evaluate(fs.readFileSync(path.join(__dirname, '..', 'libs', 'inject.js'), 'utf8'));
    });

    remetente.page.on('console', function (e) {
        try {
            //let remetenteImpusinamento = await database.query("");
            let evento = JSON.parse(e.text());
            CheckEvent(evento,remetente.id);
        }
        catch (e) {
            console.log('Erro no console! Mensagem inválida (Remetente: ' + remetente.id + ")" + '\n' + 'Texto: ' + e.text(), e);
        }
    });

    remetente.page.on('error', function (e) {
        console.log('Erro na página! (Remetente: ' + remetente.id + ")", e);
    });

    remetente.browser.on('disconnected', function (e) {
        console.log('Fechou Browser! (Remetente: ' + remetente.id + ")");
    });

    remetente.page.on('close', function (e) {
        console.log('Pagina Fechou! (Remetente: ' + remetente.id + ")");
    });
}

// #### criar um atulaizar remetente

export const updateRemetente = async (remetente: Remetente, evento) => {

    await remetente.page.evaluate('getStatusJson();');

    // Log('Monitoramento! | Remetente: ' + remetente.id + ' | ' + JSON.stringify(evento.monitoring_phone));
    io.emit('monitoring', JSON.stringify({ success: true, remetente_id: remetente.id }));

    //Atualizando objeto local da empresa(remetente) 
    // console.log('evento monitoring: ', evento.monitoring_phone.authenticated + ' id remetente: ', remetente.id);
    (evento.monitoring_phone.authenticated) ? remetente.status = 'CONECTADO' : remetente.status = 'DESCONECTADO';
    if (!evento.monitoring_phone.authenticated) remetente.mynumber = '';
}

export const reniciarTronco = async (tronco_id) => {
    // console.log('id remetente: ' + remetente_id);
    let remetente = await getRemetenteById(tronco_id);
    // console.log('lista remetente: ' + remetente);
    if (remetente == undefined || remetente == null) {
        // await remetente.page.evaluate('logout();');
    } else {
        if (remetente.tipo == RemetenteTipo.WHATSAPP) {
            await remetente.page.evaluate('logout();');
    
            await remetente.page.close();
            await remetente.browser.close();
        }
        await delRemetente(remetente);
    }
}