import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/model/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl = environment.api.serverUrl;

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  createClient(newClientData: Client) {
    return this.http.post(`${this.apiUrl}/clients`, newClientData);
  }
}
