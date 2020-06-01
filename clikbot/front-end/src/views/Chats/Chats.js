import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import axios from 'axios';

import Chat from './Chat';

import chatsData from './ChatsData';

// const io = require('socket.io-client');
import socket from '../../config/socket';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const Chats = () => {
  const [endpoint, setEndpoint] = 'http://34.230.71.19:3000';
  const [chatVisivel, setChatVisivel] = useState(false);
  let imagem;

  // const socket = io('http://localhost:3333');
  socket.on('connect', () => {
    console.log('Socket conectado? ', socket.connected);
  });

  socket.on("qr_code", function (info) {
    console.log('QR CODE RECEBIDO!!!!')
    if (info.image) {
      var img = new Image();
      img.src = 'data:image/jpeg;base64,' + info.buffer;
      imagem = 'data:image/jpeg;base64,' + info.buffer;
    }
  });


  socket.on('atualizarAtendimentos', async (atendimentosAtualizados) => {
    await Promise.all([
      // alert('ATENDIMENTOS ATUALIZADOS'),
      console.log('atendimentosAtualizados() - retorno', [atendimentosAtualizados.atendimentos]),
      atendimentosAtualizados && setAtendimentos([atendimentosAtualizados.atendimentos]),
    ]);
  });

  // socket.on('message', (message) => console.log(message))

  const [atendimentosVisiveis, setAtendimentosVisiveis] = useState([])
  const [atendimentos, setAtendimentos] = useState([]);
  const [atendentes, setAtendentes] = useState([]);
  const [image, setImage] = useState(false);

  const reload = async () => {
    console.log('-> Função reload();');
    await Promise.all([
      // axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3333/mensagens')
      axios.get('http://34.230.71.19:3000/qr_code', { responseType: 'arraybuffer' })
        .then(r => {
          const base64 = btoa(
            new Uint8Array(r.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '',
            ),
          );

          // imagem = 'data:image/png;base64,' + base64;
          setImage('data:image/png;base64,' + base64);


          // imagem = r.data;
          console.log('image...', image)
        }),
      // axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3333/atendentes')
      axios.get('http://34.230.71.19:3000/atendimentos')
        .then(r => r.data)
        .then(async (json) => {
          console.log(json)
          setAtendimentos([json]);
          // setAtendimentosVisiveis([json]);
          return json
        }),
      // axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3333/atendentes')
      axios.get('http://34.230.71.19:3000/atendentes')
        .then(r => r.data)
        .then(async (json) => {
          await Promise.all([
            console.log(json),
            setAtendentes(await json),
            showAtendimentosDoAtendente(json[0].id)
            // showAtendimentosDoAtendente(atendentes[0].id),
          ]);
          return json
        }),
    ]);
  };

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAtendimentosDoAtendente = (id_atendente) => {
    console.log('showAtendimentosDoAtendente(): ', id_atendente);
    Object.entries(atendimentos).map(async (a) => {

      setAtendimentosVisiveis([]);
      Object.entries(a[1]).map(async (at) => {

        if (at[1].id_atendente === id_atendente) {

          await Promise.all([
            // console.log('atendimentosVisiveis: ', atendimentosVisiveis),
            console.log('at: ', [at]),
            setAtendimentosVisiveis(atendimentosVisiveis => [...atendimentosVisiveis, at]),
            console.log('atendimentosVisiveis: ', atendimentosVisiveis)
          ]);

        }

      });

    });
    // if(atendimentos.lenght > 0 || atendimentos)
    // atendimentos.forEach( (element, index, array) => {
    //   if (element.id_atendente == id_atendente) setAtendimentosVisiveis(atendimentosVisiveis => [...atendimentosVisiveis, element])
    // })
  };

  const enviarMensagem = async (dados) => {
    console.log(dados)
    // socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem });
    socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem });
  };

  const atualizarQrCode = async () => {
    await axios.get('http://34.230.71.19:3000/qr_code', { responseType: 'arraybuffer' })
      .then(r => {
        const base64 = btoa(
          new Uint8Array(r.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        setImage('data:image/png;base64,' + base64);
        console.log('image...', image)
      });
  };















  useEffect(() => {
    console.log('Atualizou atendimentos', atendimentos)
  }, [atendimentos]);

  useEffect(() => {
    console.log('Atualizou chatVisivel', chatVisivel)
  }, [chatVisivel]);

  return (
    <div className="animated fadeIn">
      <div id="canvas">
        <img src={image} alt="QR CODE" />
      </div>
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-comment-o"></i> Conversas <Button type="button" color="primary" onClick={atualizarQrCode}> ATUALIZAR QR CODE </Button>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">ATENDENTE</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {atendentes && atendentes.map(a => {
                    return (
                      <tr onClick={() => { showAtendimentosDoAtendente(a.id) }} key={a.id} style={{ cursor: 'pointer' }}>
                        <td>{a.id}</td>
                        <td>{a.nome}</td>
                        {a.status === 'online' && <td style={{ color: 'green' }}>{a.status}</td>}
                        {a.status === 'offline' && <td style={{ color: 'red' }}>{a.status}</td>}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardHeader>
            <CardBody>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">CLIENTE</th>
                    <th scope="col">NÚMERO</th>
                    {/* <th scope="col">útima mensagem</th> */}
                    {/* <th scope="col">atendido por</th> */}
                  </tr>
                </thead>
                <tbody>

                  {atendimentosVisiveis && atendimentosVisiveis.map((a) => {
                    Object.entries(a).map((elem) => {
                      a = elem[1];
                    });
                    console.log(a)

                    return (
                      <tr style={{ cursor: 'pointer' }} key={a.numero_cliente} onClick={() => { setChatVisivel(a.numero_cliente) }}>
                        <td><strong>{a.nome_cliente}</strong></td>
                        <td>{a.numero_cliente}</td>
                      </tr>
                    )

                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {(chatVisivel && atendimentos) && <Chat data={atendimentos[0][chatVisivel]} />}

    </div>
  )

}

export default Chats;
