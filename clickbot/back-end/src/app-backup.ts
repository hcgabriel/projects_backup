import { create, Whatsapp, decryptMedia, ev, smartUserAgent } from '../src/index';
const mime = require('mime-types');
const fs = require('fs');
const uaOverride = 'WhatsApp/2.16.352 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15';
const tosBlockGuaranteed = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.88 Safari/537.36";
const ON_DEATH = require('death');
let globalClient: Whatsapp;

const chalk = require('chalk');
const log = console.log;

const cors = require('cors');
const express = require('express');
const http = require('http');
const socket = require('socket.io');
const axios = require('axios');

const port = process.env.PORT || 3333;

const app = express();
app.use(cors());

app.get('/mensagens', async (req: any, res: any) => {
  res.send([]);
});

app.get('/atendentes', async (req: any, res: any) => {
  res.send(atendentes).status(200);
});
app.get('/atendimentos', async (req: any, res: any) => {
  res.send(atendimentos).status(200);
});

const server = http.createServer(app);
const io = socket(server);

let atendentes = [
  {
    id: 1,
    nome: 'João',
    setor: 'financeiro',
    status: 'online'
  },
  {
    id: 2,
    nome: 'Mateus',
    setor: 'financeiro',
    status: 'online'
  },
  {
    id: 3,
    nome: 'Marcos',
    setor: 'comercial',
    status: 'offline'
  },
]

// let atendimentos = [];
let atendimentos = {};

let status_ura = [];

let ura = {
  opcoes: [
    {
      financeiro: ['assunto 1', 'assunto 2', 'assunto 3']
    }, {
      comercial: ['assunto c1', 'assunto c2', 'assunto c3',]
    }
  ]
}

ON_DEATH(async function (signal, err) {
  console.log('killing session');
  if (globalClient) await globalClient.kill();
})

let imgBuff: any;


ev.on('qr.**', async (qrcode, sessionId) => {
  // console.log("TCL: qrcode", qrcode)
  //     console.log("TCL: qrcode,sessioId", qrcode,sessionId)
  //base64 encoded qr code image
  const imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,', ''), 'base64');
  imgBuff = imageBuffer;
  fs.writeFileSync(`qr_code${sessionId ? '_' + sessionId : ''}.png`, imageBuffer);
});

ev.on('**', async (data, sessionId, namespace) => {
  console.log("\n----------")
  console.log('EV', data, sessionId, namespace)
  console.log("----------")
})

ev.on('sessionData.**', async (sessionData, sessionId) => {
  console.log("\n----------")
  console.log('sessionData', sessionId, sessionData)
  console.log("----------")
})

async function start(client: Whatsapp) {

  globalClient = client;
  console.log('starting');
  const me = await client.getMe();
  console.log("start -> me", me);
  // const chats = await client.getAllChatsWithMessages(false);
  // console.log("TCL: start -> chats", chats)
  // console.log("TCL: getAllChatsWithMessages ->", chats.length, chats[0]);
  // console.log("TCL: start ->chats", chats[0].msgs);

  // const newMessages = await client.getAllUnreadMessages();
  // console.log("TCL: start -> newMessages", newMessages)
  // console.log("TCL: getAllNewMessages ->", newMessages.length, newMessages[0]);

  //Returns 'CONNECTED' or 'TIMEOUT' or 'CONFLICT' (if user opens whatsapp web somewhere else)
  client.onStateChanged(state => {
    console.log('statechanged', state)
    if (state === "CONFLICT") client.forceRefocus();
  });

  // setTimeout(_=> client.kill(), 3000);

  io.on('connection', async (socketIO: any) => {
    log(chalk.blue('New client connected')), setInterval(() => {

    }, 10000);
    socketIO.on('disconnect', () => log(chalk.red('Client disconnected')));

    if (imgBuff) socketIO.emit('qr_code', { image: imgBuff })
    else log(chalk.red('imgBuff not exists! ):'))


    socketIO.on('enviarMensagem', async (dados: any) => {
      log(chalk.blue('Atendente: ', dados.atendente));
      log(chalk.blue('Cliente: ', dados.cliente));
      log(chalk.blue('Mensagem: ', dados.mensagem));
      await Promise.all([
        atendimentos[dados.cliente].mensagens.push({ atendente: dados.mensagem }),
        console.log('----- ADICIONANDO AOS ATENDIMENTOS ------'),
        console.log(atendimentos),
        io.sockets.emit('atualizarAtendimentos', { atendimentos }),
        // io.sockets.emit('atualizarAtendimentos', { atendimentos }),
      ]);
      // socketIO.send(atendimentos);


      client.sendText(dados.cliente, dados.mensagem);
    });

    // setInterval( () => {
    //   socketIO.send('Opa...')
    // }, 3000);


    // client.onAnyMessage(message => console.log(message.type));
    client.onMessage(async message => {
      try {
        message.body = message.body.toLowerCase();
        console.log('Mensagem Recebida: ', message.body, '\nDe: ', message.from);

        if (message.body != 'sair' && message.body != '99' && atendimentos[message.from]) {
          await Promise.all([
            atendimentos[message.from].mensagens.push({ cliente: message.body }),
            console.log('----- ADICIONANDO MENSAGEM AO ATENDIMENTO ------'),
            console.log(atendimentos),
            io.sockets.emit('atualizarAtendimentos', { atendimentos }),
            log(chalk.green('Socket atualizarAtendimentos emitido...'))
          ]);
          // socketIO.send(atendimentos);

          return;
        }

        const isConnected = await client.isConnected();
        // console.log("TCL: start -> isConnected", isConnected)

        // if(message.from == '558391725048@c.us') client.sendText(message.from, 'testando;;;');
        if (message.body == 'oi' || (status_ura[message.from]) == 0 || message.body == '99') {
          if (message.body == '99') atendimentos[message.from] = null;
          status_ura[message.from] = 1;

          let msg = '';
          ura.opcoes.map((key, index) => {
            msg += '\n' + (index + 1) + ' - ' + Object.keys(key);
          });

          msg += '\n\nDigite 99 para voltar ao inicio\nDigite "sair" para encerrar o atendimento';
          client.sendText(message.from, 'Olá, ' + message.sender.formattedName + '\n'
            + 'Digite o número da opção desejada:\n' + msg);
        }

        if ((status_ura[message.from]) === 1 && message.body !== 'sair') {

          log(chalk.blue('\n------------------------------'));
          log(chalk.blue(' ---> status_ura: ' + status_ura[message.from]));
          log(chalk.blue('------------------------------\n'));

          let i = (parseInt(message.body) - 1);
          let setor = Object.entries(ura.opcoes[i])[0][0];

          if (!atendimentos[message.from]) {
            log(chalk.blue('\n------------------------------'));
            log(chalk.blue('Cliente ' + message.sender.formattedName + ' não tem atendente.'));
            log(chalk.blue('------------------------------\n'));

            client.sendText(message.from, 'Buscando atendente disponível...\n');
            // io.sockets.emit('atualizarAtendimentos', { atendimentos });

            atendentes.forEach(async (atendente) => {
              if (atendimentos[message.from] != null) return;
              if (atendente.status == 'online' && atendente.setor == setor) {
                await Promise.all([

                  atendimentos[message.from] = {
                    id_atendente: atendente.id,
                    nome_atendente: atendente.nome,
                    nome_cliente: message.sender.formattedName,
                    numero_cliente: message.from,
                    mensagens: [],
                  },
                  log(chalk.blue('\n------------------------------')),
                  log(chalk.blue('Cliente ' + message.sender.formattedName + ' sendo atendido por: ' + atendimentos[message.from].nome_atendente + '\n')),
                  log(chalk.blue('------------------------------\n')),
                  io.sockets.emit('atualizarAtendimentos', { atendimentos }),
                  log(chalk.green('Socket atualizarAtendimentos emitido...')),
                ]);
              }

            });

          }

          let atendente = atendimentos[message.from].nome_atendente;
          atendente = atendente[0].toUpperCase() + atendente.slice(1);
          setor = setor[0].toUpperCase() + setor.slice(1);

          let msg = 'Você está sendo atendido por: *' + atendente + '* do *Setor ' + setor + '*\n';
          // let op = Object.entries(ura.opcoes[i])[0][1];

          // op.map((key, index) => {
          //   msg += '\n' + (index + 1) + ' - ' + key;
          // });

          msg += '\n\nDigite 99 para voltar ao inicio\nDigite "sair" para encerrar o atendimento';
          atendimentos[message.from].mensagens.push({ atendente: msg });
          io.sockets.emit('atualizarAtendimentos', { atendimentos });
          client.sendText(message.from, '\n' + msg);
        }

        if (message.body === 'sair') {
          log(chalk.red('\n------------------------------'));
          log(chalk.red('ENCERRANDO ATENDIMENTO'));
          log(chalk.red('Cliente: ' + message.sender.formattedName));
          log(chalk.red('Atendente: ' + atendimentos[message.from].nome_cliente));
          log(chalk.red('------------------------------'));
          status_ura[message.from] = 0;
          atendimentos[message.from] = null;
          let msg = 'Atendimento encerrado com sucesso, até a próxima!\n\n'
          // + 'acutistecnologia.com\n'
          // + '(83) 9 9927-4262\n'
          // + 'Acutis Tecnologia\n'
          client.sendText(message.from, msg);
          log(chalk.green('\n------------------------------'));
          log(chalk.green('ATENDIMENTO ENCERRADO COM SUCESSO'));
          log(chalk.green('------------------------------\n'));
        }


      } catch (error) {
        // console.log("TCL: start -> error", error)
      }
    });//fim do socket

  });

}


create({
  sessionId: 'session',
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  useChrome: true,
  headless: false,
  throwErrorOnTosBlock: true,
  killTimer: 40,
  autoRefresh: true, //default to true
  qrRefreshS: 15, //please note that if this is too long then your qr code scan may end up being invalid. Generally qr codes expire every 15 seconds.
})
  // create()
  .then(async client => await start(client))
  .catch(e => {
    console.log('Error', e.message);
    // process.exit();
  });

//or you can set a 'session id'
// create('newsession').then(client => start(client));

//DO NOT HAVE TO SESSIONS WITH THE SAME ID

//BE WARNED, SETTING THIS UP WITH 2 NUMBERS WILL RESULT IN AN ECHO CHAMBER
//IF YOU SEND AN IMAGE WITH ONE PHONE IT WILL PING PONG THAT IMAGE FOR ETERNITY



server.listen(port, () => {
  log(chalk.blue('Server running on port: ', port));
});