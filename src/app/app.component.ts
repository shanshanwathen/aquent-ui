import {Component, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobService} from "./job.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AngularJobApp';

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

  // public getJob(): void {
  //   this.jobService.getIndividualJob().subscribe(
  //     (response: Job) => {
  //       this.job = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   )
  // }

  public onCreateJob(createForm: NgForm): void {
    this.jobService.createJob(createForm.value).subscribe(
      (response: number) => {
        console.log("Job " + response + "was created.");
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
