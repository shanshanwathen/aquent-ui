import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Job} from "./model/job";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiServerUrl: string;
  private options: Object;

  constructor(private http: HttpClient) {
    this.apiServerUrl = environment.apiBaseUrl;
    this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  }

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiServerUrl + '/jobs');
  }

  public createJob(job: Job): Observable<number> {

    return this.http.post<number>(this.apiServerUrl + '/kafka/create-job', JSON.stringify(job), this.options);
  }

  public getIndividualJob(jobId: number): Observable<Job> {
    return this.http.get<Job>(this.apiServerUrl + '/jobs/' + jobId);
  }
}
