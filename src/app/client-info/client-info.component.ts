import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../services/client.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ClientDTO } from '../model/clientDTO';
import { PersonService } from '../services/person.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  client: ClientDTO = new ClientDTO();
  clientId: any;
  model: ClientDTO;
  clientForm = new FormGroup({
    id: new FormControl(),
    companyName: new FormControl(),
    websiteURI: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private personService: PersonService) {
    this.model = new ClientDTO();
    this.clientForm = this.formBuilder.group({
      id: [this.model.id],
      companyName: [this.model.companyName],
      websiteURI: [this.model.websiteURI]
    });

    this.route.params.subscribe((params) => {
      if (params["clientId"]) {
        console.log(params["clientId"])
        this.clientId = params["clientId"];
      }
    });

    if (this.clientId !== '') {
      this.getClientInfo(this.clientId);
    }
  }

  ngOnInit(): void {
    if (this.clientId !== '') {
      this.getClientInfo(this.clientId);
    }
  }

  getClientInfo(id: number): void {
    this.clientService.getIndividualClient(id).subscribe(
      (response: ClientDTO) => {
        console.log(response);
        this.model = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  removeContact(id: number): void {
    this.personService.deleteContact(id).subscribe(
      (response: ClientDTO) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.router.navigate(['/client/' + this.clientId]);
  }
}
