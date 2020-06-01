import Usuario from './Usuario';
import Setor from './Setor';

export default class Atendente {
  constructor(nome, senha, setor/*, usuario*/){
    this.id = Math.floor(Math.random());
    this.nome = nome || null;
    this.senha = senha || null;
    this.setor = new Setor(setor || null);
    // this.usuario = new Usuario(usuario || null);
  }
}