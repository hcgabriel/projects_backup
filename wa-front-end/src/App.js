import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './index.css';

const io = require('socket.io-client');

function App() {

  const [endpoint, setEndpoint] = 'http://localhost:3333';

  const socket = io('http://localhost:3333');
  socket.on('connect', () => {
    console.log('Socket conectado? ', socket.connected);
  })

  const [mensagens, setMensagens] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [chat, setChat] = useState([]);

  const reload = async () => {
    console.log('reload!!!')
    await fetch('http://localhost:3333/mensagens')
      .then(r => r.json())
      .then(async (json) => {
        console.log(json)
        setMensagens(await json);
        return json
      });

  };
  useEffect(() => {

    // const socket = io(endpoint);

    // socket.on('')
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enviarMensagem = async (dados) => {
    socket.emit('enviarMensagem', { atendente: dados.atendente, cliente: dados.cliente, mensagem: dados.mensagem });
  };

  useEffect(() => {
    console.log('Carregando mensagens...')

    mensagens.map(async m => {
      console.log(m.nome_cliente);
      if (clientes.indexOf(m.nome_cliente) === -1) {
        setClientes([...clientes, m.nome_cliente]);
      } else {
      }
    })
  }, [clientes, mensagens]);

  useEffect(() => {
    if (chat.length) document.querySelector("#root > div > div.scroll > div:nth-child(1)").scrollTop = document.querySelector("#root > div > div.scroll > div:nth-child(1)").scrollHeight
  }, [chat]);

  // reload();


  if (mensagens.length > 0) return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '90%', height: 500, borderColor: '#FFF', borderWidth: 2, borderRadius: 10,
      margin: 30, padding: 30, backgroundColor: "#e3e3e3", flexDirection: 'row', flexWrap: 'nowrap'
    }}>
      <div style={{ width: '30%', height: '100%', maxHeight: '100%' }}>
        {clientes && clientes.map(c =>
          <div style={{ width: '90%', margin: 5, backgroundColor: '#fff', borderRadius: 10, cursor: 'pointer', padding: 10 }} key={c} onClick={() => {
            let m = mensagens.filter(m => m.nome_cliente == c)
            setChat(m)
          }}>{c}</div>
        )}
      </div>
      <div className="scroll" style={{
        display: 'flex', flexDirection: 'column', margin: 5, padding: 10, width: '70%', minWidth: '70%', height: '100%', minHeight: '100%', borderRadius: 10, backgroundColor: '#c5c5c5'
      }}>
        <div style={{ height: '90%', overflow: 'auto', scrollPadding: 200 }}>
          {chat && chat.map(c =>
            <div
              style={{ fontSize: 14, borderRadius: 10, padding: 5, margin: 5, backgroundColor: '#eee' }}
            >{c.mensagem}</div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', height: '10%' }}>
          <div onClick={() => {
            setMensagens([]);
            reload();
          }} style={{ /*height: '10%',*/ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 5, margin: 5, backgroundColor: 'green' }}>ATUALIZAR</div>
          <div style={{ /*height: '10%',*/ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 5, margin: 5, backgroundColor: 'green' }}>akljsd</div>
        </div>
      </div>

    </div>
  );
  else return (
    <div>Carregando...{mensagens}</div>
  );

}

export default App;
