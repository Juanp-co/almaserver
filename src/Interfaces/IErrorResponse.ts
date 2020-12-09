export interface IInfoErrors {
  msg?: string;
  input?: string;
}

export interface IErrorResponse {
  msg?: string;
  errors?: [IInfoErrors];
}
