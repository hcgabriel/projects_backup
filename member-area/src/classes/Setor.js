import Usuario from './Usuario';

export default class Setor {
  constructor(nome){
    this.id = Math.floor(Math.random());
    this.nome = nome;
    // this.usuario = new Usuario(setor.usuario);
  }
}