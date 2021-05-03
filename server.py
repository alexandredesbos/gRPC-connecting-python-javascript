import grpc
import concurrent
from concurrent import futures

#On importe les fichiers généré par le compilateur protoc
import USMB_pb2
import USMB_pb2_grpc


#On définit la fonction réponse du serveur
class InscriptionServicer(USMB_pb2_grpc.InscriptionServicer):
  def InscriptionUSMB(self, request, context):
    print('requête reçu')
    response = USMB_pb2.InscriptionResponse()
    response.message = f"Bonjour {request.nom}, vous êtes inscrit en {request.annee}ème année à l'univesité de Savoie"
    return response


#On définit un serveur sur le port 50051
def main():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=5))
  USMB_pb2_grpc.add_InscriptionServicer_to_server(InscriptionServicer(), server)
  print('Serveur lancé. En écoute sur le port 50051')
  server.add_insecure_port('[::]:50051')
  server.start()
  server.wait_for_termination()

main()