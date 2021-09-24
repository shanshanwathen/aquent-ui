import {Component, OnInit, Output} from '@angular/core';
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

  public onCreateJob(): void {
    this.jobService.createJob(this.job).subscribe(
      (response: number) => {
        alert("Job " + response + " was created.");
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
