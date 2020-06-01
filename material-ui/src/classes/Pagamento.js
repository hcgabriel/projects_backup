import Plano from './Plano';
import Usuario from './Usuario';

export default class Pagamento {
  constructor(pagamento){
    this.id = pagamento.id;
    this.status = pagamento.status;
    this.valor = pagamento.valor;
    this.data = pagamento.data;
    this.forma_de_pagamento = pagamento.forma_de_pagamento;
    this.usuario = new Usuario(pagamento.usuario);
    this.plano = new Plano(pagamento.plano);
  }
}