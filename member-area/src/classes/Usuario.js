import Plano from './Plano';
import Endereco from './Endereco';

export default class Usuario {
  constructor(nome, email, senha, telefone, cnpj, cpf, plano, endereco){
    this.id = Math.floor(Math.random());
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.cnpj = cnpj;
    this.cpf = cpf;
    this.plano = new Plano(plano);
    this.endereco = new Endereco(endereco);
  }
}