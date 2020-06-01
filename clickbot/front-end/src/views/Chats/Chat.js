import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import UserMessage from '../Components/UserMessage';
import ClientMessage from '../Components/ClientMessage';

import socket from '../../config/socket';

const Chat = (props) => {

  const [novaMensagem, setNovaMensagem] = useState('');

  const enviarMensagem = async (dados) => {

    await Promise.all([
      dados.mensagem = novaMensagem,
      dados.cliente = props.data.numero_cliente,
      dados.atendente = props.data.id_atendente,
      console.log('MENSAGEM SENDO ENVIADA: ', dados),
      socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem }),
      setNovaMensagem(''),
    ]);

  };


  const encerrarAtendimento = async (dados) => {

    await Promise.all([
      console.log('Encerrando atendimento: ', dados),
      socket.emit('encerrarAtendimento', dados),
      // setNovaMensagem(''),
    ]);

  };

  useEffect(() => {

    if (props.data.mensagens.length) document.querySelector("#root > div > div > main > div.container-fluid > div > div.container > div > div > div > div.card-body").scrollTop = document.querySelector("#root > div > div > main > div.container-fluid > div > div.container > div > div > div > div.card-body").scrollHeight
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data.mensagens]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong><i className="icon-info pr-1"></i>Cliente: {props.data.nome_cliente}</strong>
              Atendente: {props.data.nome_atendente}
              <Button onClick={() => { encerrarAtendimento(props.data); }} type="button" color="danger">Encerrar Atendimento</Button>
            </CardHeader>
            <CardBody style={{ height: 400, overflow: 'auto' }}>

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
                onKeyPress={(e) => { if (e.key === 'Enter') enviarMensagem({}) }}
                onChange={(e) => setNovaMensagem(e.target.value)}
                type="text" id="nova-mensagem" name="nova-mensagem" placeholder="Digite uma mensagem..." />
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
