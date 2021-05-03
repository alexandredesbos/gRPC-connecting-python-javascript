// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// version de la syntaxe
'use strict';
var grpc = require('grpc');
var USMB_pb = require('./USMB_pb.js');

function serialize_InscriptionRequest(arg) {
  if (!(arg instanceof USMB_pb.InscriptionRequest)) {
    throw new Error('Expected argument of type InscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InscriptionRequest(buffer_arg) {
  return USMB_pb.InscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InscriptionResponse(arg) {
  if (!(arg instanceof USMB_pb.InscriptionResponse)) {
    throw new Error('Expected argument of type InscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InscriptionResponse(buffer_arg) {
  return USMB_pb.InscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// On définit un service
var InscriptionService = exports.InscriptionService = {
  inscriptionUSMB: {
    path: '/Inscription/InscriptionUSMB',
    requestStream: false,
    responseStream: false,
    requestType: USMB_pb.InscriptionRequest,
    responseType: USMB_pb.InscriptionResponse,
    requestSerialize: serialize_InscriptionRequest,
    requestDeserialize: deserialize_InscriptionRequest,
    responseSerialize: serialize_InscriptionResponse,
    responseDeserialize: deserialize_InscriptionResponse,
  },
};

exports.InscriptionClient = grpc.makeGenericClientConstructor(InscriptionService);
