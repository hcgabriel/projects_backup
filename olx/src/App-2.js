import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const App = () => {

  let req = async (url) => {


    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    let res = await axios({
      method: 'get',
      url: 'http://localhost:3000' + url,
      responseType: 'json',
    });

    if (res) {
      console.log(res.data.response)
      return (res.data.response)
    } else {
      console.log("error")
    }
  };
  let req2 = async (url) => {



    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    let res = await axios({
      method: 'get',
      url: 'http://localhost:3000' + url,
      responseType: 'json',
    })
      .then(res => {
        const doc = document.createElement("div");
        doc.innerHTML = res.data;

        console.log(doc.querySelectorAll("td"));
        return res;
      }); 

    if (res) {
      console.log(res.data.response)
    } else {
      console.log("error")
    }
  };

  let dados = [];

  const consulta = async () => {

    let links = await req('');

    // if (links) console.log(links);
    // else console.log('not links')

    // links.map(async ([link, i]) => {
    links.map(async (link) => {
      console.log('inside links map2 ', link);

      let r = await axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/' + link,
      })
        .then(async res => {
          console.log('inside then ')
          const doc = document.createElement("div");
          doc.innerHTML = res.data;
          let json = doc.querySelector('#initial-data').getAttribute('data-json');
          
          json = JSON.parse(json);

          if(json) dados.push({
            nome: json.ad.user && json.ad.user.name,
            telefone: json.ad.phone && json.ad.phone.phone,
            cidade: json.ad.location && json.ad.location.municipality
          });

          // console.log(json.ad);
          return res;
        });

      if (r) {
        // console.log(r.data)
      } else {
        console.log("error")
      }
    });
  }


  // req2('/div');
  // req('/div');

  let estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];

  let regioes = [
    'DDD 68 - Acre: Rio Branco',
    'DDD 68 - Acre: Outras cidades',
    'DDD 82 - Alagoas: Maceió',
    'DDD 82 - Alagoas: Outras cidades',
    'DDD 96 - Amapá: Macapá',
    'DDD 96 - Amapá: Outras cidades',
    'DDD 92 - Região de Manaus: Manaus',
    'DDD 92 - Região de Manaus: Outras cidades',
    'DDD 97 - Leste do Amazonas: Região do Centro Amazonense',
    'DDD 97 - Leste do Amazonas: Região do Norte Amazonense',
    'DDD 97 - Leste do Amazonas: Região do Sudoeste Amazonense',
    'DDD 97 - Leste do Amazonas: Região do Sul Amazonense',
    'DDD 71 - Salvador: Salvador',
    'DDD 71 - Salvador: Grande Salvador',
    'DDD 71 - Salvador: Outras cidades',
    'DDD 73 - Sul da Bahia: Todas as cidades',
    'DDD 74 - Juazeiro, Jacobina e região: Todas as cidades',
    'DDD 75 - F. de Santana, Alagoinhas e região: Todas as cidades',
    'DDD 77 - V da Conquista, Barreiras e região: Todas as cidades',
    'DDD 85 - Fortaleza e região: Fortaleza',
    'DDD 85 - Fortaleza e região: Grande Fortaleza',
    'DDD 85 - Fortaleza e região: Outras cidades',
    'DDD 88 - Juazeiro do Norte, Sobral e região: Todas as cidades',
    'DDD 61 - Distrito Federal e região: Brasília',
    'DDD 61 - Distrito Federal e região: Todas as cidades',
  ];

  let tipos = [
    'Profissional',
    'Particular'
  ];

  useEffect( () => {
    consulta();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dados);

  // if (dados.length <= 0) return (
  //   <div>carregando...</div>
  // )
  // else if(dados.length > 0)
  // if(dados.length > 0)
  return (
    <div className="App">
      <div className="form" >

        <form >
          <label>
            Tipo do anúncio
          <select value={tipos[0]}>
              {tipos.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label>
            Estado
          <select value={estados[0]}>
              {estados.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </label>
          <label>
            Região
          <select value='{this.state.value}'>
              <option value="laranja">DDD 68 - Acre: Rio Branco</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>
          {/* <label>
            Cidade
          <select value='{this.state.value}'>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label> */}

          <label>
            Pesquisa
            <input type="text" name="pesquisa" id="pesquisa" />
          </label>
          <button onClick={ () => {}}>Enviar</button>
        </form>
          <button onClick={ () => { console.log(dados)}}>Atualizar</button>
      </div>
      {/* TABELA DE RESULTADOS */}
      <div className="table" style={{ overflow: 'auto' }}>
        <table>
          <thead>
            <th>NOME</th>
            <th>TELEFONE</th>
            <th>CIDADE</th>
          </thead>
          <tbody>
            {dados && dados.map(r =>
              <tr>
                <td>{r.nome}</td>
                <td>{r.telefone}</td>
                <td>{r.cidade}</td>
              </tr>
            )}
            {!dados && 'carregando'}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
