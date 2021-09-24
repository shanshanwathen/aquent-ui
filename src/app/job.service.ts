import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Job} from "./job";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiServerUrl: string;

  constructor(private http: HttpClient) {
    this.apiServerUrl = environment.apiBaseUrl;
  }

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiServerUrl + '/jobs');
  }

  public createJob(job: Job): Observable<number> {
    return this.http.post<number>(this.apiServerUrl + '/kafka/create-job', job);
  }

  public getIndividualJob(jobId: number): Observable<Job> {
    return this.http.get<Job>(this.apiServerUrl + '/jobs' + jobId);
  }
}
