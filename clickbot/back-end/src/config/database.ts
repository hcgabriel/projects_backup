// import * as firebase from "firebase/app";
import firebase from "firebase";

try {

  firebase.initializeApp({
    apiKey: "AIzaSyDrRJDLuxcNf5PweCU84Pws_-S3fey-5t4",
    authDomain: "projetopush-fecef.firebaseapp.com",
    databaseURL: "https://projetopush-fecef.firebaseio.com",
    projectId: "projetopush-fecef",
    storageBucket: "projetopush-fecef.appspot.com",
    messagingSenderId: "1040428473466",
    appId: "1:1040428473466:web:0d587c32c4cde685896fc3"
  });

  console.log('Firebase inicializado com sucesso!')
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

export const pegarAtendimentos = async () => {
  return (await firebase.database().ref('clikbot/atendimentos').once('value')).val();
  // return firebase.database().ref('clikbot/atendimentos').on('value', async (snapshot) => {
  //   return [snapshot.val()];
  // });
}

export const salvarAtendimento = async (atendimento: any) => {
  try {

    console.log('\Atendimento sendo adicionado:', atendimento);
    let atendimentos = firebase.database().ref('clikbot/atendimentos/' + atendimento.id_atendimento).set(atendimento);
    // let atendimentos = firebase.database().ref('clikbot/atendimentos');
    console.log('atendimentos', atendimentos)
    // let chave = (await atendimentos.push()).key;
    // console.log('chave', chave)
    // atendimentos.child(chave).set(atendimentos);
    console.log('atendimentos 2', atendimentos);

    return true;

  } catch (error) {
    console.log(error)
    return false;
  }
};