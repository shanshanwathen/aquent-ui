import { Component, OnInit } from '@angular/core';
import {Job} from "../model/job";
import {JobService} from "../job.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  public jobs: Job[];

  constructor(private jobService: JobService) {
    this.jobs = [];
  }

  ngOnInit(): void {
    this.getJobs();
  }

  public getJobs(): void {
    this.jobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

}
