export default class Endereco {
  constructor(endereco){
    this.rua = endereco.rua;
    this.numero = endereco.numero;
    this.complemento = endereco.complemento;
    this.bairro = endereco.bairro;
    this.cidade = endereco.cidade;
    this.estado = endereco.estado;
    this.cep = endereco.cep;
  }
}