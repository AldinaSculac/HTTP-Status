// Built-in HTTP exceptions in Nest.js
// https://docs.nestjs.com/exception-filters#built-in-http-exceptions

export const statusCodeSupported = [
  '200',
  '201',
  '202',
  '203',
  '204',
  '205',
  '206',
  '400',
  '401',
  '402',
  '403',
  '404',
  '405',
  '406',
  '407',
  '408',
  '409',
  '410',
  '411',
  '412',
  '413',
  '414',
  '415',
  '416',
  '417',
  '418',
  '421',
  '422',
  '424',
  '428',
  '429',
  '500',
  '501',
  '502',
  '503',
  '504',
  '505',
];

export const statusCodeToMessage: Record<string, string> = {
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Request Entity Too Large',
  '414': 'Request-URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Requested Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': "I'm a teapot",
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '424': 'Failed Dependency',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
};

export const statusCodeToReason: Record<string, string> = {
  '200': 'OK',
  '201': 'CREATED',
  '202': 'ACCEPTED',
  '203': 'NON_AUTHORITATIVE_INFORMATION',
  '204': 'NO_CONTENT',
  '205': 'RESET_CONTENT',
  '206': 'PARTIAL_CONTENT',
  '400': 'BAD_REQUEST',
  '401': 'UNAUTHORIZED',
  '402': 'PAYMENT_REQUIRED',
  '403': 'FORBIDDEN',
  '404': 'NOT_FOUND',
  '405': 'METHOD_NOT_ALLOWED',
  '406': 'NOT_ACCEPTABLE',
  '407': 'PROXY_AUTHENTICATION_REQUIRED',
  '408': 'REQUEST_TIMEOUT',
  '409': 'CONFLICT',
  '410': 'GONE',
  '411': 'LENGTH_REQUIRED',
  '412': 'PRECONDITION_FAILED',
  '413': 'PAYLOAD_TOO_LARGE',
  '414': 'URI_TOO_LONG',
  '415': 'UNSUPPORTED_MEDIA_TYPE',
  '416': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '417': 'EXPECTATION_FAILED',
  '418': 'I_AM_A_TEAPOT',
  '421': 'MISDIRECTED',
  '422': 'UNPROCESSABLE_ENTITY',
  '424': 'FAILED_DEPENDENCY',
  '428': 'PRECONDITION_REQUIRED',
  '429': 'TOO_MANY_REQUESTS',
  '500': 'INTERNAL_SERVER_ERROR',
  '501': 'NOT_IMPLEMENTED',
  '502': 'BAD_GATEWAY',
  '503': 'SERVICE_UNAVAILABLE',
  '504': 'GATEWAY_TIMEOUT',
  '505': 'HTTP_VERSION_NOT_SUPPORTED',
};