import * as express from "express";
export const app = express();
import { SocketConfig } from './../globais/configs';
import * as fs from 'fs';
const cors = require('cors');
const bodyParser = require('body-parser');
import { execSQL } from '../globais/dbconn';
//app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//set port
app.set("port", SocketConfig.socket_porta);
//cors credentials
app.use(cors({ credentials: true }));

//routers api integration
import routeApiCompanyIntegration from './../integration-company-api/route-api-company-integration';
routeApiCompanyIntegration(app);

//routes api whatssap
// import { routesApiWhatssap } from './../whatsappApi/routes-api-whatssap';
// routesApiWhatssap(app);

//routers facebook
// routers-facebook
// import { routersFacebook } from './../facebook/routers-facebook';
// routersFacebook(app);


var https = require('http').Server(app);

if (SocketConfig.ssl) {
  // const privateKey = fs.readFileSync(SocketConfig.privateKey, 'utf8');
  // const certificate = fs.readFileSync(SocketConfig.certificate, 'utf8');
  // const ca = fs.readFileSync(SocketConfig.ca, 'utf8');
  // const credentials = {
  //   key: privateKey,
  //   cert: certificate,
  //   ca: ca
  // };

  // https = require('https').Server(credentials, app);
  https = require('https').Server(app);
}

export const io = require('socket.io')(https);
import * as dataTempo from 'node-datetime';
import inicializacao from "./../inicializacao";
import {
  getRemetenteById,
  RemetenteTipo
} from "./../models/remetente-model";
import { gravaMensagem } from './../controllers/mensagem-service';

import { finalizarAtmClientWeb } from './../services/finaliza-atendimento-web';
import { setTimeout } from "timers";

io.on('connection', function (socket: any) {
  console.log('Nova conexão: ' + socket.id);
  socket.emit('connection_success');

  socket.on('reinicializar', (empresa_id) => {
    console.log('reinicializar')
  });

  socket.on('openBrowser', operacao => {
    inicializacao(operacao.id);
  });

  socket.on('reqIniciarWhatsAppChatWeb', (cliente, tronco_id) => {
    console.log('cliente: ', cliente);
    console.log('config: ', tronco_id);
  });

  socket.on("updateQrCode", (tronco_id) => {
    // console.log('update qrCode: ',tronco_id);
    (async () => {
      let tronco = await getRemetenteById(tronco_id);
      // await inicializacao(tronco_id);
      if (tronco.page) {
        tronco.page.close();
      }
      if (tronco.browser) {
        tronco.browser.close();
      }

      console.log('### updateQrCode');
      // getBrowser(tronco);
      // reinicializar(tronco.empresa_id);
    })()
  });

  socket.on("beginNewAtendimento", (iniciaNewAtm) => {
    console.log('destinoNovoAtm: ', iniciaNewAtm.destino);
  });

https.listen(SocketConfig.socket_porta, function () {
  console.log('Servidor iniciado na porta: ' + SocketConfig.socket_porta);
});

});