import inicializacao from './inicializacao';
import { app } from './libs/io';
import { io } from './libs/io';

inicializacao()
    .then(() => {
        console.log('inicializacao ok')
    })
    .catch(error => {
        console.log('Erro na inicialização!', error);
    });