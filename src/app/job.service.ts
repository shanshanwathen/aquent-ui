import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Job} from "./job";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {

  }

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`{$this.apiSeverUrl}/jobs`);
  }

  public createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`{$this.apiSeverUrl}/kafka/create-job`, job);
  }

  public getIndividualJob(jobId: number): Observable<string> {
    return this.http.get<string>(`{$this.apiSeverUrl}/jobs/${jobId}`);
  }
}
