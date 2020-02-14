/**
 * @fileoverview gRPC-Web generated client stub for ppconnection
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ppconnection = require('./connection-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppconnection.ConnectionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppconnection.ConnectionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.GetConnectionsRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodDescriptor_ConnectionService_GetConnections = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetConnections',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.GetConnectionsRequest,
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.GetConnectionsRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodInfo_ConnectionService_GetConnections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @param {!proto.ppconnection.GetConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Connections)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Connections>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnections,
      callback);
};


/**
 * @param {!proto.ppconnection.GetConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Connections>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.GetConnectionsRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodDescriptor_ConnectionService_GetLiveConnections = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetLiveConnections',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.GetConnectionsRequest,
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.GetConnectionsRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodInfo_ConnectionService_GetLiveConnections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @param {!proto.ppconnection.GetConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Connections)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Connections>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getLiveConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetLiveConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetLiveConnections,
      callback);
};


/**
 * @param {!proto.ppconnection.GetConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Connections>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getLiveConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetLiveConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetLiveConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.GetConnectionsByTransformerRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodDescriptor_ConnectionService_GetConnectionsByTransformer = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetConnectionsByTransformer',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.GetConnectionsByTransformerRequest,
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsByTransformerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.GetConnectionsByTransformerRequest,
 *   !proto.ppconnection.Connections>}
 */
const methodInfo_ConnectionService_GetConnectionsByTransformer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Connections,
  /**
   * @param {!proto.ppconnection.GetConnectionsByTransformerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connections.deserializeBinary
);


/**
 * @param {!proto.ppconnection.GetConnectionsByTransformerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Connections)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Connections>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getConnectionsByTransformer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnectionsByTransformer',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnectionsByTransformer,
      callback);
};


/**
 * @param {!proto.ppconnection.GetConnectionsByTransformerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Connections>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getConnectionsByTransformer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnectionsByTransformer',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnectionsByTransformer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Empty,
 *   !proto.ppconnection.Connection>}
 */
const methodDescriptor_ConnectionService_GetBlankConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetBlankConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Empty,
  proto.ppconnection.Connection,
  /**
   * @param {!proto.ppconnection.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connection.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Empty,
 *   !proto.ppconnection.Connection>}
 */
const methodInfo_ConnectionService_GetBlankConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Connection,
  /**
   * @param {!proto.ppconnection.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connection.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Connection)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Connection>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getBlankConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetBlankConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetBlankConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Connection>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getBlankConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetBlankConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetBlankConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Identifier,
 *   !proto.ppconnection.Connection>}
 */
const methodDescriptor_ConnectionService_GetConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Identifier,
  proto.ppconnection.Connection,
  /**
   * @param {!proto.ppconnection.Identifier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connection.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Identifier,
 *   !proto.ppconnection.Connection>}
 */
const methodInfo_ConnectionService_GetConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Connection,
  /**
   * @param {!proto.ppconnection.Identifier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Connection.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Identifier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Connection)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Connection>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.Identifier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Connection>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Empty,
 *   !proto.ppconnection.TransformerList>}
 */
const methodDescriptor_ConnectionService_GetTransformers = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetTransformers',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Empty,
  proto.ppconnection.TransformerList,
  /**
   * @param {!proto.ppconnection.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.TransformerList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Empty,
 *   !proto.ppconnection.TransformerList>}
 */
const methodInfo_ConnectionService_GetTransformers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.TransformerList,
  /**
   * @param {!proto.ppconnection.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.TransformerList.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.TransformerList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.TransformerList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getTransformers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetTransformers',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetTransformers,
      callback);
};


/**
 * @param {!proto.ppconnection.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.TransformerList>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getTransformers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetTransformers',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetTransformers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateMountRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateMount = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateMount',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateMountRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateMountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateMountRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateMount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateMountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateMountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateMount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateMount',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateMount,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateMountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateMount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateMount',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateMount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.CreateConnectionRequest,
 *   !proto.ppconnection.Identifier>}
 */
const methodDescriptor_ConnectionService_CreateConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/CreateConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.CreateConnectionRequest,
  proto.ppconnection.Identifier,
  /**
   * @param {!proto.ppconnection.CreateConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifier.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.CreateConnectionRequest,
 *   !proto.ppconnection.Identifier>}
 */
const methodInfo_ConnectionService_CreateConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Identifier,
  /**
   * @param {!proto.ppconnection.CreateConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifier.deserializeBinary
);


/**
 * @param {!proto.ppconnection.CreateConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Identifier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Identifier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.createConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreateConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.CreateConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Identifier>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.createConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreateConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Connection,
 *   !proto.ppconnection.Identifier>}
 */
const methodDescriptor_ConnectionService_CreatePendingConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/CreatePendingConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Connection,
  proto.ppconnection.Identifier,
  /**
   * @param {!proto.ppconnection.Connection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifier.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Connection,
 *   !proto.ppconnection.Identifier>}
 */
const methodInfo_ConnectionService_CreatePendingConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Identifier,
  /**
   * @param {!proto.ppconnection.Connection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifier.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Connection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Identifier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Identifier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.createPendingConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreatePendingConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreatePendingConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.Connection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Identifier>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.createPendingConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreatePendingConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreatePendingConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.MultipleConnectionRequest,
 *   !proto.ppconnection.Identifiers>}
 */
const methodDescriptor_ConnectionService_CreateMultiplePendingConnections = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/CreateMultiplePendingConnections',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.MultipleConnectionRequest,
  proto.ppconnection.Identifiers,
  /**
   * @param {!proto.ppconnection.MultipleConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifiers.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.MultipleConnectionRequest,
 *   !proto.ppconnection.Identifiers>}
 */
const methodInfo_ConnectionService_CreateMultiplePendingConnections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Identifiers,
  /**
   * @param {!proto.ppconnection.MultipleConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Identifiers.deserializeBinary
);


/**
 * @param {!proto.ppconnection.MultipleConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Identifiers)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Identifiers>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.createMultiplePendingConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreateMultiplePendingConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreateMultiplePendingConnections,
      callback);
};


/**
 * @param {!proto.ppconnection.MultipleConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Identifiers>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.createMultiplePendingConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/CreateMultiplePendingConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_CreateMultiplePendingConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateConnectionRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateConnectionRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateConnectionRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Identifier,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_DeleteConnection = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/DeleteConnection',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Identifier,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.Identifier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Identifier,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_DeleteConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.Identifier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Identifier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.deleteConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_DeleteConnection,
      callback);
};


/**
 * @param {!proto.ppconnection.Identifier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.deleteConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_DeleteConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateDeviceRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateDevice = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateDevice',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateDeviceRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateDeviceRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateDevice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateDevice',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateDevice,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateDevice',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateConnectionStateRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateConnectionState = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateConnectionState',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateConnectionStateRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateConnectionStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateConnectionStateRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateConnectionState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateConnectionStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateConnectionStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateConnectionState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateConnectionState',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateConnectionState,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateConnectionStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateConnectionState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateConnectionState',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateConnectionState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateJobRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateJob = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateJob',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateJobRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateJobRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateJob',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateJob,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateJob',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.UpdateLinesRequest,
 *   !proto.ppconnection.Response>}
 */
const methodDescriptor_ConnectionService_UpdateLines = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/UpdateLines',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.UpdateLinesRequest,
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateLinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.UpdateLinesRequest,
 *   !proto.ppconnection.Response>}
 */
const methodInfo_ConnectionService_UpdateLines = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Response,
  /**
   * @param {!proto.ppconnection.UpdateLinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Response.deserializeBinary
);


/**
 * @param {!proto.ppconnection.UpdateLinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.updateLines =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateLines',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateLines,
      callback);
};


/**
 * @param {!proto.ppconnection.UpdateLinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Response>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.updateLines =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/UpdateLines',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_UpdateLines);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.GetAddressRequest,
 *   !proto.ppconnection.Location>}
 */
const methodDescriptor_ConnectionService_GetAddress = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetAddress',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.GetAddressRequest,
  proto.ppconnection.Location,
  /**
   * @param {!proto.ppconnection.GetAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Location.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.GetAddressRequest,
 *   !proto.ppconnection.Location>}
 */
const methodInfo_ConnectionService_GetAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Location,
  /**
   * @param {!proto.ppconnection.GetAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Location.deserializeBinary
);


/**
 * @param {!proto.ppconnection.GetAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Location)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Location>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetAddress',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetAddress,
      callback);
};


/**
 * @param {!proto.ppconnection.GetAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Location>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetAddress',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.Address,
 *   !proto.ppconnection.LatLng>}
 */
const methodDescriptor_ConnectionService_Geocode = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/Geocode',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.Address,
  proto.ppconnection.LatLng,
  /**
   * @param {!proto.ppconnection.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.LatLng.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.Address,
 *   !proto.ppconnection.LatLng>}
 */
const methodInfo_ConnectionService_Geocode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.LatLng,
  /**
   * @param {!proto.ppconnection.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.LatLng.deserializeBinary
);


/**
 * @param {!proto.ppconnection.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.LatLng)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.LatLng>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.geocode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/Geocode',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_Geocode,
      callback);
};


/**
 * @param {!proto.ppconnection.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.LatLng>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.geocode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/Geocode',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_Geocode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.GetDeviceBySerialNumberRequest,
 *   !proto.ppconnection.Device>}
 */
const methodDescriptor_ConnectionService_GetDeviceBySerialNumber = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetDeviceBySerialNumber',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.GetDeviceBySerialNumberRequest,
  proto.ppconnection.Device,
  /**
   * @param {!proto.ppconnection.GetDeviceBySerialNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Device.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.GetDeviceBySerialNumberRequest,
 *   !proto.ppconnection.Device>}
 */
const methodInfo_ConnectionService_GetDeviceBySerialNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.Device,
  /**
   * @param {!proto.ppconnection.GetDeviceBySerialNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.Device.deserializeBinary
);


/**
 * @param {!proto.ppconnection.GetDeviceBySerialNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.Device)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.Device>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getDeviceBySerialNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetDeviceBySerialNumber',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetDeviceBySerialNumber,
      callback);
};


/**
 * @param {!proto.ppconnection.GetDeviceBySerialNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.Device>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getDeviceBySerialNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetDeviceBySerialNumber',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetDeviceBySerialNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.InstMsgData>}
 */
const methodDescriptor_ConnectionService_GetInstMsgData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetInstMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataMsgRequest,
  proto.ppconnection.InstMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.InstMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.InstMsgData>}
 */
const methodInfo_ConnectionService_GetInstMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.InstMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.InstMsgData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.InstMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.InstMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getInstMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetInstMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetInstMsgData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.InstMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getInstMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetInstMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetInstMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.ProcMsgData>}
 */
const methodDescriptor_ConnectionService_GetProcMsgData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetProcMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataMsgRequest,
  proto.ppconnection.ProcMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.ProcMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.ProcMsgData>}
 */
const methodInfo_ConnectionService_GetProcMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.ProcMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.ProcMsgData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.ProcMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.ProcMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getProcMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetProcMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetProcMsgData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.ProcMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getProcMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetProcMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetProcMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.PQMsgData>}
 */
const methodDescriptor_ConnectionService_GetPQMsgData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetPQMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataMsgRequest,
  proto.ppconnection.PQMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.PQMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.PQMsgData>}
 */
const methodInfo_ConnectionService_GetPQMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.PQMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.PQMsgData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.PQMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.PQMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getPQMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetPQMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetPQMsgData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.PQMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getPQMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetPQMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetPQMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.GeoscanMsgData>}
 */
const methodDescriptor_ConnectionService_GetGeoscanMsgData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetGeoscanMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataMsgRequest,
  proto.ppconnection.GeoscanMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.GeoscanMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.GeoscanMsgData>}
 */
const methodInfo_ConnectionService_GetGeoscanMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.GeoscanMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.GeoscanMsgData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.GeoscanMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.GeoscanMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getGeoscanMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetGeoscanMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetGeoscanMsgData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.GeoscanMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getGeoscanMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetGeoscanMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetGeoscanMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.UplinkMsgData>}
 */
const methodDescriptor_ConnectionService_GetUplinkMsgData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetUplinkMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataMsgRequest,
  proto.ppconnection.UplinkMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.UplinkMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataMsgRequest,
 *   !proto.ppconnection.UplinkMsgData>}
 */
const methodInfo_ConnectionService_GetUplinkMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.UplinkMsgData,
  /**
   * @param {!proto.ppconnection.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.UplinkMsgData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.UplinkMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.UplinkMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getUplinkMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetUplinkMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetUplinkMsgData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.UplinkMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getUplinkMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetUplinkMsgData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetUplinkMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataQueryRequest,
 *   !proto.ppconnection.UplinkDayData>}
 */
const methodDescriptor_ConnectionService_GetUplinkDayData = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetUplinkDayData',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataQueryRequest,
  proto.ppconnection.UplinkDayData,
  /**
   * @param {!proto.ppconnection.DataQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.UplinkDayData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataQueryRequest,
 *   !proto.ppconnection.UplinkDayData>}
 */
const methodInfo_ConnectionService_GetUplinkDayData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.UplinkDayData,
  /**
   * @param {!proto.ppconnection.DataQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.UplinkDayData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.UplinkDayData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.UplinkDayData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getUplinkDayData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetUplinkDayData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetUplinkDayData,
      callback);
};


/**
 * @param {!proto.ppconnection.DataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.UplinkDayData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getUplinkDayData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetUplinkDayData',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetUplinkDayData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppconnection.DataQueryRequest,
 *   !proto.ppconnection.OpAlarmData>}
 */
const methodDescriptor_ConnectionService_GetOpAlarms = new grpc.web.MethodDescriptor(
  '/ppconnection.ConnectionService/GetOpAlarms',
  grpc.web.MethodType.UNARY,
  proto.ppconnection.DataQueryRequest,
  proto.ppconnection.OpAlarmData,
  /**
   * @param {!proto.ppconnection.DataQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.OpAlarmData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppconnection.DataQueryRequest,
 *   !proto.ppconnection.OpAlarmData>}
 */
const methodInfo_ConnectionService_GetOpAlarms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppconnection.OpAlarmData,
  /**
   * @param {!proto.ppconnection.DataQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppconnection.OpAlarmData.deserializeBinary
);


/**
 * @param {!proto.ppconnection.DataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppconnection.OpAlarmData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppconnection.OpAlarmData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppconnection.ConnectionServiceClient.prototype.getOpAlarms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetOpAlarms',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetOpAlarms,
      callback);
};


/**
 * @param {!proto.ppconnection.DataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppconnection.OpAlarmData>}
 *     A native promise that resolves to the response
 */
proto.ppconnection.ConnectionServicePromiseClient.prototype.getOpAlarms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppconnection.ConnectionService/GetOpAlarms',
      request,
      metadata || {},
      methodDescriptor_ConnectionService_GetOpAlarms);
};


module.exports = proto.ppconnection;

