import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDTO } from '../model/clientDTO';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-create-from',
  templateUrl: './client-create-from.component.html',
  styleUrls: ['./client-create-from.component.css']
})
export class ClientCreateFromComponent implements OnInit {

  public client: ClientDTO;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.client = new ClientDTO();
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.clientService.saveClient(this.client).subscribe(
      (response: number) => {
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

  cancel() {
    this.router.navigate(['/client/list']);
  }

}
