import Endereco from './Endereco';
import Plataforma from './Plataforma';
import Usuario from './Usuario';

export default class Contato {
  constructor(contato){
    this.id = contato.id;
    this.nome = contato.nome;
    this.email = contato.email;
    this.telefone = contato.telefone;
    this.cnpj = contato.cnpj;
    this.cpf = contato.cpf;
    this.endereco = new Endereco(contato.endereco);
    this.plataforma = new Plataforma(contato.plataforma);
    this.usuario = new Usuario(contato.usuario);
  }
}