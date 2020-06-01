"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var index_1 = require("../src/index");
var utils = require("./utils/tools");
var db = require("./config/database");
var mime = require('mime-types');
var fs = require('fs');
var uaOverride = 'WhatsApp/2.16.352 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15';
var tosBlockGuaranteed = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.88 Safari/537.36";
var ON_DEATH = require('death');
var globalClient;
var chalk = require('chalk');
var log = console.log;
var cors = require('cors');
var express = require('express');
var http = require('http');
var socket = require('socket.io');
var axios = require('axios');
// const port = process.env.PORT || 3333;
var port = 3000;
// let img = require('./qr_code_session.png');
var img = fs.readFileSync('./qr_code_session.png');
var app = express();
app.use(cors());
var baseDir = __dirname + "../../front-end/build/";
app.use(express.static("" + baseDir));
app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, res.sendfile('index.html', { root: baseDir })];
}); }); });
app.get('/atendentes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send(atendentes).status(200);
        return [2 /*return*/];
    });
}); });
app.get('/atendimentos_finalizados', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var atendimentosFinalizados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.pegarAtendimentos()];
            case 1:
                atendimentosFinalizados = _a.sent();
                console.log(atendimentosFinalizados);
                res.send(atendimentosFinalizados).status(200);
                return [2 /*return*/];
        }
    });
}); });
var server = http.createServer(app);
var io = socket(server);
var atendentes = [
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
];
// let atendimentos = [];
var atendimentos = {};
var status_ura = [];
var ura = {
    opcoes: [
        {
            financeiro: ['assunto 1', 'assunto 2', 'assunto 3']
        }, {
            comercial: ['assunto c1', 'assunto c2', 'assunto c3',]
        }
    ]
};
ON_DEATH(function (signal, err) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('killing session');
                    if (!globalClient) return [3 /*break*/, 2];
                    return [4 /*yield*/, globalClient.kill()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
var imgBuff;
index_1.ev.on('qr.**', function (qrcode, sessionId) { return __awaiter(void 0, void 0, void 0, function () {
    var imageBuffer;
    return __generator(this, function (_a) {
        imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,', ''), 'base64');
        imgBuff = imageBuffer;
        fs.writeFileSync("qr_code" + (sessionId ? '_' + sessionId : '') + ".png", imageBuffer);
        return [2 /*return*/];
    });
}); });
app.get('/qr_code', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // res.send(fs.readFileSync('./qr_code_session.png'));
        res.send(imgBuff);
        return [2 /*return*/];
    });
}); });
index_1.ev.on('**', function (data, sessionId, namespace) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("\n----------");
        console.log('EV', data, sessionId, namespace);
        console.log("----------");
        return [2 /*return*/];
    });
}); });
index_1.ev.on('sessionData.**', function (sessionData, sessionId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("\n----------");
        console.log('sessionData', sessionId, sessionData);
        console.log("----------");
        return [2 /*return*/];
    });
}); });
function start(client) {
    return __awaiter(this, void 0, void 0, function () {
        var me;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    globalClient = client;
                    console.log('starting');
                    return [4 /*yield*/, client.getMe()];
                case 1:
                    me = _a.sent();
                    console.log("start -> me", me);
                    client.onStateChanged(function (state) {
                        console.log('statechanged', state);
                        if (state === "CONFLICT")
                            client.forceRefocus();
                    });
                    io.on('connection', function (socketIO) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            log(chalk.blue('New client connected')), setInterval(function () {
                            }, 10000);
                            socketIO.on('disconnect', function () { return log(chalk.red('Client disconnected')); });
                            if (imgBuff)
                                socketIO.emit('qr_code', { image: img });
                            else
                                log(chalk.red('imgBuff not exists! ):'));
                            socketIO.on('enviarMensagemMassa', function (dados) { return __awaiter(_this, void 0, void 0, function () {
                                var res, _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _b = (_a = Promise).all;
                                            _c = [log(chalk.blue('----- ENVIANDO MENSAGEM EM MASSA ------')),
                                                log(chalk.blue('Cliente: ', dados.cliente)),
                                                log(chalk.blue('Mensagem: ', dados.mensagem))];
                                            return [4 /*yield*/, client.getContact(dados.cliente)];
                                        case 1: return [4 /*yield*/, _b.apply(_a, [_c.concat([
                                                    // res = await client.sendText(dados.cliente, dados.mensagem),
                                                    res = _d.sent(),
                                                    console.log('Resposta: ', res ? res.isWAContact : false)
                                                ])])];
                                        case 2:
                                            _d.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            socketIO.on('enviarMensagem', function (dados) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            log(chalk.blue('Atendimento: ', dados.atendimento_id));
                                            log(chalk.blue('Atendente: ', dados.atendente));
                                            log(chalk.blue('Cliente: ', dados.cliente));
                                            log(chalk.blue('Mensagem: ', dados.mensagem));
                                            return [4 /*yield*/, Promise.all([
                                                    atendimentos[dados.cliente].mensagens.push({ atendente: dados.mensagem }),
                                                    console.log('----- ADICIONANDO AOS ATENDIMENTOS ------'),
                                                    console.log(atendimentos),
                                                    io.sockets.emit('atualizarAtendimentos', { atendimentos: atendimentos }),
                                                ])];
                                        case 1:
                                            _a.sent();
                                            client.sendText(dados.cliente, dados.mensagem);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            socketIO.on('encerrarAtendimento', function (dados) { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, db.salvarAtendimento(dados)];
                                        case 1:
                                            res = _a.sent();
                                            if (res) {
                                                atendimentos[dados.numero_cliente] = null;
                                                log(chalk.green('Atendimento ' + dados.id_atendimento + ' salvo e encerrado com sucesso.'));
                                            }
                                            else
                                                log(chalk.red('Erro ao salvar o atendimento.'));
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            client.onMessage(function (message) { return __awaiter(_this, void 0, void 0, function () {
                                var msg_1, i, setor_1, atendente, msg, msg, error_1;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 3, , 4]);
                                            message.body = message.body.toLowerCase();
                                            console.log('Mensagem Recebida: ', message.body, '\nDe: ', message.from);
                                            if (!(message.body != 'sair' && message.body != '99' && atendimentos[message.from])) return [3 /*break*/, 2];
                                            return [4 /*yield*/, Promise.all([
                                                    atendimentos[message.from].mensagens.push({ cliente: message.body }),
                                                    console.log('----- ADICIONANDO MENSAGEM AO ATENDIMENTO ------'),
                                                    console.log(atendimentos),
                                                    io.sockets.emit('atualizarAtendimentos', { atendimentos: atendimentos }),
                                                    log(chalk.green('Socket atualizarAtendimentos emitido...'))
                                                ])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                        case 2:
                                            if (message.body == 'oi' || (status_ura[message.from]) == 0 || message.body == '99') {
                                                if (message.body == '99')
                                                    atendimentos[message.from] = null;
                                                status_ura[message.from] = 1;
                                                msg_1 = '';
                                                ura.opcoes.map(function (key, index) {
                                                    msg_1 += '\n' + (index + 1) + ' - ' + Object.keys(key);
                                                });
                                                msg_1 += '\n\nDigite 99 para voltar ao inicio\nDigite "sair" para encerrar o atendimento';
                                                client.sendText(message.from, 'Olá, ' + message.sender.formattedName + '\n'
                                                    + 'Digite o número da opção desejada:\n' + msg_1);
                                            }
                                            if ((status_ura[message.from]) === 1 && message.body !== 'sair') {
                                                log(chalk.blue('\n------------------------------'));
                                                log(chalk.blue(' ---> status_ura: ' + status_ura[message.from]));
                                                log(chalk.blue('------------------------------\n'));
                                                i = (parseInt(message.body) - 1);
                                                setor_1 = Object.entries(ura.opcoes[i])[0][0];
                                                if (!atendimentos[message.from]) {
                                                    log(chalk.blue('\n------------------------------'));
                                                    log(chalk.blue('Cliente ' + message.sender.formattedName + ' não tem atendente.'));
                                                    log(chalk.blue('------------------------------\n'));
                                                    client.sendText(message.from, 'Buscando atendente disponível...\n');
                                                    io.sockets.emit('atualizarAtendimentos', { atendimentos: atendimentos });
                                                    atendentes.forEach(function (atendente) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (atendimentos[message.from] != null)
                                                                        return [2 /*return*/];
                                                                    if (!(atendente.status == 'online' && atendente.setor == setor_1)) return [3 /*break*/, 2];
                                                                    return [4 /*yield*/, Promise.all([
                                                                            atendimentos[message.from] = {
                                                                                id_atendimento: utils.gerarId(),
                                                                                id_atendente: atendente.id,
                                                                                nome_atendente: atendente.nome,
                                                                                nome_cliente: message.sender.formattedName,
                                                                                numero_cliente: message.from,
                                                                                mensagens: []
                                                                            },
                                                                            log(chalk.blue('\n------------------------------')),
                                                                            log(chalk.blue('Cliente ' + message.sender.formattedName + ' sendo atendido por: ' + atendimentos[message.from].nome_atendente + '\n')),
                                                                            log(chalk.blue('------------------------------\n')),
                                                                            io.sockets.emit('atualizarAtendimentos', { atendimentos: atendimentos }),
                                                                            log(chalk.green('Socket atualizarAtendimentos emitido...')),
                                                                        ])];
                                                                case 1:
                                                                    _a.sent();
                                                                    _a.label = 2;
                                                                case 2: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                }
                                                atendente = atendimentos[message.from].nome_atendente;
                                                atendente = atendente[0].toUpperCase() + atendente.slice(1);
                                                setor_1 = setor_1[0].toUpperCase() + setor_1.slice(1);
                                                msg = 'Você está sendo atendido por: *' + atendente + '* do *Setor ' + setor_1 + '*\n';
                                                msg += '\n\nDigite 99 para voltar ao inicio\nDigite "sair" para encerrar o atendimento';
                                                atendimentos[message.from].mensagens.push({ atendente: msg });
                                                io.sockets.emit('atualizarAtendimentos', { atendimentos: atendimentos });
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
                                                msg = 'Atendimento encerrado com sucesso, até a próxima!\n\n';
                                                // + 'acutistecnologia.com\n'
                                                // + '(83) 9 9927-4262\n'
                                                // + 'Acutis Tecnologia\n'
                                                client.sendText(message.from, msg);
                                                log(chalk.green('\n------------------------------'));
                                                log(chalk.green('ATENDIMENTO ENCERRADO COM SUCESSO'));
                                                log(chalk.green('------------------------------\n'));
                                            }
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_1 = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }); //fim do socket
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
index_1.create({
    sessionId: 'session',
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    useChrome: true,
    headless: false,
    throwErrorOnTosBlock: true,
    killTimer: 300,
    autoRefresh: true,
    qrRefreshS: 15
})
    // create()
    .then(function (client) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, start(client)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); })["catch"](function (e) {
    console.log('Error', e.message);
    // process.exit();
});
//or you can set a 'session id'
// create('newsession').then(client => start(client));
//DO NOT HAVE TO SESSIONS WITH THE SAME ID
//BE WARNED, SETTING THIS UP WITH 2 NUMBERS WILL RESULT IN AN ECHO CHAMBER
//IF YOU SEND AN IMAGE WITH ONE PHONE IT WILL PING PONG THAT IMAGE FOR ETERNITY
server.listen(port, function () {
    log(chalk.blue('Server running on port: ', port));
});
