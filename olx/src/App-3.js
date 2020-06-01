import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const App = () => {

  const [dados, setDados] = useState([]);

  let req = async (url) => {


    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    let res = await axios({
      method: 'get',
      url: 'http://localhost:3001' + url,
      responseType: 'json',
    });

    if (res) {
      return (res.data.response)
    } else {
      console.log("error")
    }
  };

  const consulta = async () => {

    let links = await req('');

    await links.map(async (link) => {

      let r = await axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/' + link,
      })
        .then(async res => {
          const doc = document.createElement("div");
          doc.innerHTML = res.data;
          let json = doc.querySelector('#initial-data').getAttribute('data-json');

          json = JSON.parse(json);

          json = {
            nome: await json.ad.user.name,
            telefone: await json.ad.phone.phone,
            cidade: await json.ad.location.municipality
          };
          // console.log(json);
          // console.log(dados.push(json))
          setDados( dados => [...dados, json]);
          // json = JSON.parse(await json);


          return json;
        });

      if (r) {
      } else {
        console.log("error")
      }

    });
  }

  useEffect(() => {
    consulta().then((r) => {
      console.log(r)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" onClick={ () => { console.log(dados) }}>
      {dados.map(d => <div>
        <div>{d.nome}</div>
        <div>{d.telefone}</div>
        <div>{d.nome}</div>
      </div >
      )
      }
    </div >
  );
}

export default App;
