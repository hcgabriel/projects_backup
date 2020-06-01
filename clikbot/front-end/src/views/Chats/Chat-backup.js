import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import UserMessage from '../Components/UserMessage';
import ClientMessage from '../Components/ClientMessage';

import axios from 'axios';

// const io = require('socket.io-client');
import socket from '../../config/socket';

const Chat = (props) => {

  const [endpoint, setEndpoint] = 'http://localhost:3333';
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');
  const [cliente, setCliente] = useState({});
  const [atendente, setAtendente] = useState([]);

  const [id, setId] = useState(props.data.numero_cliente);

  // const socket = io('http://localhost:3333');
  // socket.on('connect', () => {
  //   console.log('Socket conectado? ', socket.connected);
  // });
  socket.on('atualizarAtendimentos', async (atendimentosAtualizados) => {

    console.log('---> SOCKET atualizarAtendimentos recebido');

    // await Promise.all([
    //   setMensagens([]),
    //   console.log('--------------------------'),
    //   console.log('atendimentosAtualizados() - retorno', atendimentosAtualizados),
    //   // console.log(),
    //   atendimentosAtualizados['atendimentos'][cliente.numero] && setMensagens(atendimentosAtualizados['atendimentos'][cliente.numero].mensagens),
    //   // console.log('mensagens', mensagens),
    //   console.log('--------------------------'),
    // ]);
  });


  // console.log(props.match.params.id);

  // const chat = chatsData.find(chat => chat.id.toString() === props.match.params.id)

  // const chatDetails = chat ? Object.entries(chat) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]



  const enviarMensagem = async (dados) => {

    // await Promise.all([
    //   dados.mensagem = novaMensagem,
    //   dados.cliente = cliente.numero,
    //   dados.atendente = atendente.id,
    //   console.log('MENSAGEM SENDO ENVIADA: ', dados),
    //   setMensagens(mensagens => [...mensagens, { atendente: dados.mensagem }]),
    //   socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem }),
    //   setNovaMensagem(''),
    // ]);
    await Promise.all([
      dados.mensagem = novaMensagem,
      dados.cliente = props.data.numero_cliente,
      dados.atendente = props.data.id_atendente,
      console.log('MENSAGEM SENDO ENVIADA: ', dados),
      setMensagens(mensagens => [...mensagens, { atendente: dados.mensagem }]),
      socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem }),
      setNovaMensagem(''),
    ]);
  };


  const reload = async () => {
    console.log('-> Função reload();');
    // await Promise.all([
    //   // axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3333/atendentes')
    //   axios.get('http://localhost:3333/atendimentos')
    //     .then(r => r.data)
    //     .then(async (json) => {
    //       await Promise.all([
    //         console.log(await json),
    //         setMensagens(json[id].mensagens),
    //         setCliente({
    //           numero: json[id].numero_cliente,
    //           nome: json[id].nome_cliente,
    //         }),
    //         setAtendente({
    //           id: json[id].id_atendente,
    //           nome: json[id].nome_atendente
    //         }),
    //         console.log(mensagens)
    //       ]);
    //     }),
    //   console.log('mensagens: ', mensagens)
    // ]);
  };

  useEffect(() => {
    console.log('ID: ', id);
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Atualização nas mensagens', mensagens)
    if (mensagens.length) document.querySelector("#root > div > div > main > div.container-fluid > div > div > div > div > div.card-body").scrollTop = document.querySelector("#root > div > div > main > div.container-fluid > div > div > div > div > div.card-body").scrollHeight
  }, [mensagens]);










  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <div onClick={reload}>RELOAD</div>
              {/* <strong><i className="icon-info pr-1"></i>Cliente: {cliente.nome}</strong> - Atendente: {atendente.nome} */}
              <strong><i className="icon-info pr-1"></i>Cliente: {props.data.nome_cliente}</strong> - Atendente: {props.data.nome_atendente}
            </CardHeader>
            <CardBody style={{ height: 400, overflow: 'auto' }}>

              {/* {
                mensagens &&
                mensagens.map((m) => {
                  if (m["atendente"]) return (<UserMessage key={m["atendente"] + 'atendente' + Math.random()} message={m["atendente"]} />);
                  else if (m["cliente"]) return (<ClientMessage key={m["cliente"] + 'cliente' + Math.random()} message={m["cliente"]} />);

                })
              } */}
              {
                props.data.mensagens &&
                props.data.mensagens.map((m) => {
                  if (m["atendente"]) return (<UserMessage key={m["atendente"] + 'atendente' + Math.random()} message={m["atendente"]} />);
                  else if (m["cliente"]) return (<ClientMessage key={m["cliente"] + 'cliente' + Math.random()} message={m["cliente"]} />);

                })
              }

            </CardBody>
            <InputGroup>
              <Input value={novaMensagem}
                onKeyPress={(e) => { if (e.key === 'Enter') enviarMensagem({}); }}
                onChange={(e) => { setNovaMensagem(e.target.value); }} type="text" id="nova-mensagem" name="nova-mensagem" placeholder="Digite uma mensagem..." />
              <InputGroupAddon addonType="append">
                <Button onClick={() => { enviarMensagem({}); }} type="button" color="primary">Enviar</Button>
              </InputGroupAddon>
            </InputGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat;
