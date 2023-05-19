import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/model/client.model';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  filteredClients: Client[] = [];
  searchQuery: string = '';
  newClientData: Client = {
    id: 0,
    name: 'Jhon Doe',
    gender: 'M/F',
    age: 100,
    documentId: 12345678,
    address: 'Cll 1 2 3',
    phoneNumber: 571234567,
    password: 'test123',
    state: 'True/False',
    accounts: [],
  };
  showModal: boolean = false;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.filteredClients = this.clients;
      },
      error: (error) => {
        console.error('Error retrieving clients:', error);
      },
    });
  }

  searchClients() {
    console.log('this.clients :>> ', this.clients);
    console.log(this.searchQuery);
    console.log('this.filteredClients :>> ', this.filteredClients);
    this.filteredClients = this.clients.filter((client) =>
      client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  createClient() {
    this.clientService.createClient(this.newClientData).subscribe({
      next: () => {
        this.fetchClients();
        this.newClientData = {
          id: 0,
          name: 'Jhon Doe',
          gender: 'M/F',
          age: 100,
          documentId: 12345678,
          address: 'Cll 1 2 3',
          phoneNumber: 571234567,
          password: 'test123',
          state: 'True/False',
          accounts: [],
        };
        this.showModal = false;
      },
      error: (error) => {
        console.error('Error creating client:', error);
      },
    });
  }

  openModal() {
    this.showModal = !this.showModal;
  }
}
