
import * as puppeteer from 'puppeteer';

export interface Mensagem {
    id: number,
    numero_cliente: string,
    nome_cliente: string,
    mensagem: string,
}

const mensagens: Mensagem[] = [];

export const getMensagens = async () => {
    return mensagens;
}

export const addMensagem = async (mensagem: Mensagem) => {
    mensagens.push(mensagem)
}