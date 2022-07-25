import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ClientDTO } from "../model/clientDTO";
import { PersonDTO } from "../model/personDTO";

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private apiServerUrl: string;
    private options: Object;

    constructor(private http: HttpClient) {
        this.apiServerUrl = environment.apiBaseUrl;
        this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    }

    public getContacts(): Observable<PersonDTO[]> {
        return this.http.get<PersonDTO[]>(this.apiServerUrl + '/person/list');
    }

    public saveClient(personDTO: PersonDTO): Observable<number> {
        return this.http.post<number>(this.apiServerUrl + '/person', JSON.stringify(personDTO), this.options);
    }

    public getIndividualClient(personId: number): Observable<PersonDTO> {
        return this.http.get<PersonDTO>(this.apiServerUrl + '/person/' + personId);
    }

    public getUnemployedContacts(clientId: number): Observable<PersonDTO[]> {
        return this.http.get<PersonDTO[]>(this.apiServerUrl + "/person/list/unemployed/" + clientId);
    }

    public deleteContact(contactId: number): Observable<any> {
        return this.http.delete<PersonDTO>(this.apiServerUrl + "/person/delete/" + contactId);
    }
}