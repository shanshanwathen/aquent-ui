import { Component, OnInit } from '@angular/core';
import {Job} from "../model/job";
import {ActivatedRoute, Router} from "@angular/router";
import {JobService} from "../job.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent implements OnInit {

  public job: Job;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService) {
    this.job = new Job();
  }

  ngOnInit(): void {
    this.getJob();
  }

  public getJob(): void {
    this.jobService.getIndividualJob(this.job.id).subscribe(
      (response: Job) => {
        console.log(response);
        this.job = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }
}
