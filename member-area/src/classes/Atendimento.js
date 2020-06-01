import Plataforma from './Plataforma';
import Usuario from './Usuario';
import Contato from './Contato';

export default class Atendimento {
  constructor(atendimento){
    this.id = atendimento.id;
    this.data = { inicio: atendimento.data.inicio, fim: atendimento.data.fim };
    this.cnpj = atendimento.cnpj;
    this.cpf = atendimento.cpf;
    this.contato = new Contato(atendimento.endereco);
    this.plataforma = new Plataforma(atendimento.plataforma);
    this.usuario = new Usuario(atendimento.usuario);
    this.mensagens = [];
  }
}