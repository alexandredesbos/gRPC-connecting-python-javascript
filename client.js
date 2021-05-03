const grpc = require('grpc');
//On imoporte les fichiers javascript géneré par le compilateur 
const messages = require('./USMB_pb');
const services = require('./USMB_grpc_pb');

//On se connecte au serveur 
function main() {
  const client = new services.InscriptionClient(
    'localhost:50051', grpc.credentials.createInsecure()
  );

  //On rentre nos valeurs d'entrées
  const InscriptionRequest = new messages.InscriptionRequest();
  InscriptionRequest.setAnnee(2);
  InscriptionRequest.setNom('Alexandre Desbos');

  //On regarde si il y a une erreur
  client.inscriptionUSMB(InscriptionRequest, function (err, response) {
    if (err) {
      console.log('Il y a une erreur', err);
    } else {
      console.log('réponse de python:', response.getMessage());
    }
  })
}

main();