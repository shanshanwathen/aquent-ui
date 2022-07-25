import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { ClientDTO } from '../model/clientDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiServerUrl: string;
  private options: Object;

  constructor(private http: HttpClient) {
    this.apiServerUrl = environment.apiBaseUrl;
    this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  }

  public getClients(): Observable<ClientDTO[]> {
    return this.http.get<ClientDTO[]>(this.apiServerUrl + '/client/list');
  }

  public saveClient(clientDTO: ClientDTO): Observable<number> {
    return this.http.post<number>(this.apiServerUrl + '/client', JSON.stringify(clientDTO), this.options);
  }

  public updateClient(clientDTO: ClientDTO): Observable<number> {
    return this.http.put<number>(this.apiServerUrl + '/client', JSON.stringify(clientDTO), this.options);
  }

  public getIndividualClient(clientId: number): Observable<ClientDTO> {
    return this.http.get<ClientDTO>(this.apiServerUrl + '/client/' + clientId);
  }
}
