import { Component, OnInit } from '@angular/core';
import {Job} from "../model/job";
import {ActivatedRoute, Router} from "@angular/router";
import {JobService} from "../job.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  public job: Job;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService) {
    this.job = new Job();
  }

  ngOnInit(): void {
  }

  public onGetJob(): void {
    this.jobService.getIndividualJob(this.job.id).subscribe(
      (response: Job) => {
        alert("Job Status: " + response.status + "\nDetails: " + response.details);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public onCreateJob(): void {
    this.jobService.createJob(this.job).subscribe(
      (response: number) => {
        console.log("Job " + response + "was created.");
        this.gotoJobList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public gotoJobList() {
    this.router.navigate(['/jobs']);
  }

}
