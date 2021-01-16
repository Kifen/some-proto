// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var address_pb = require('./address_pb.js');

function serialize_AddressRequest(arg) {
  if (!(arg instanceof address_pb.AddressRequest)) {
    throw new Error('Expected argument of type AddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddressRequest(buffer_arg) {
  return address_pb.AddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddressResponse(arg) {
  if (!(arg instanceof address_pb.AddressResponse)) {
    throw new Error('Expected argument of type AddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddressResponse(buffer_arg) {
  return address_pb.AddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AddressServiceService = exports.AddressServiceService = {
  getAddress: {
    path: '/AddressService/GetAddress',
    requestStream: false,
    responseStream: false,
    requestType: address_pb.AddressRequest,
    responseType: address_pb.AddressResponse,
    requestSerialize: serialize_AddressRequest,
    requestDeserialize: deserialize_AddressRequest,
    responseSerialize: serialize_AddressResponse,
    responseDeserialize: deserialize_AddressResponse,
  },
};

exports.AddressServiceClient = grpc.makeGenericClientConstructor(AddressServiceService);
