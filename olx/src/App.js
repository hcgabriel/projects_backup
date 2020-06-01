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

          return {
            nome: json.ad.user.name,
            telefone: json.ad.phone.phone,
            cidade: json.ad.location.municipality,
            link: json.ad.friendlyUrl
          }
        });

      if (r) {
        setDados(dados => [...dados, r])
      } else {
        console.log("error")
      }

    });
  }

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

  const [estado, setEstado] = useState(estados[0]);
  const [regiao, setRegiao] = useState(regioes[0]);
  const [tipo, setTipo] = useState(tipos[0]);

  useEffect(() => {
    consulta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const atualizar = async () => {
    setDados([]);
    await consulta();
  };

  const salvar = async () => {
    await axios.post('http://localhost:3001/adicionar', dados)
      .then( () => {
        console.log('Salvou os dados!\n')
      })
      .catch( () => {
        console.log('Erro na gravação de dados.')
      })
  };

  return (
    <div className="App">
      <div className="form" >

        <form >
          <label>
            Tipo do anúncio
          <select onChange={ (e) => { setTipo(e.target.value) }} value={tipo}>
              {tipos.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label>
            Estado
          <select onChange={ (e) => { setEstado(e.target.value) }} value={estado}>
              {estados.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </label>
          <label>
            Região
          <select onChange={ (e) => { setRegiao(e.target.value) }} value={regiao}>
            {
              regioes.map(r => <option key={r} value={r}>{r}</option>)
            }
            </select>
          </label>
          <label>
            Pesquisa
            <input type="text" name="pesquisa" id="pesquisa" />
          </label>
          <button onClick={() => { }}>Pesquisar</button>
        </form>
        <button onClick={() => { atualizar() }}>Atualizar</button>
        <button onClick={() => { salvar() }}>Salvar Dados</button>
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
              <tr key={r.nome + r.telefone}>
                <td>{r.nome}</td>
                <td>{r.telefone}</td>
                <td>{r.cidade}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
