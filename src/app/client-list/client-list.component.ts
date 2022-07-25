import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { ClientDTO } from '../model/clientDTO';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clients: ClientDTO[];
  public selectedClient: ClientDTO;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) {
    this.clients = [];
    this.selectedClient = new ClientDTO();
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(
      (response: ClientDTO[]) => {
        response.sort((a, b) => {
          return a.id - b.id
        });
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  goToClientDetial(clientId: number): void {
    // this.getClientById(clientId);
    this.router.navigate(['/client/' + this.selectedClient.id]);
  }

  getClientById(clientId: number): void {
    this.clientService.getIndividualClient(clientId).subscribe(
      (response: ClientDTO) => {
        this.selectedClient = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }


  goToClientEdit(clientId: number): void {
    this.getClientById(clientId);
    this.router.navigate(['/client/edit/' + clientId])
  }
}
