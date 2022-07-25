import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../services/client.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ClientDTO } from '../model/clientDTO';
import { PersonDTO } from '../model/personDTO';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.css']
})
export class ClientEditFormComponent implements OnInit {

  public clientId: number = 0;
  public client: ClientDTO = new ClientDTO();
  public contacts: PersonDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private personService: PersonService) {
    this.route.params.subscribe((params) => {
      if (params["clientId"] !== null && params["clientId"] !== "" && params["clientId"] !== undefined) {
        this.clientId = params["clientId"];
        this.getClient(this.clientId);
        this.getUnemployedContacts(this.clientId);
      }
    });
  }

  ngOnInit(): void {
  }

  public getClient(clientId: number): void {
    this.clientService.getIndividualClient(clientId).subscribe(
      (response: ClientDTO) => {
        this.client = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getUnemployedContacts(clientId: number): void {
    this.personService.getUnemployedContacts(clientId).subscribe(
      (response: PersonDTO[]) => {
        this.contacts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSubmit(): void {
    this.clientService.updateClient(this.client).subscribe(
      (response: number) => {
        alert("Client " + response + " was updated.");
        this.goToClientList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToClientList() {
    this.router.navigate(['/client/list']);
  }

  // public goToJob() {
  //   this.router.navigate(['/client/'])
  // }
}
