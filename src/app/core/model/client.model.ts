export interface Client {
  id?: number;
  name: string;
  age: number;
  gender: string;
  address: string;
  documentId: number;
  phoneNumber: number;
  password: string;
  state: string;
  accounts?: [];
}
