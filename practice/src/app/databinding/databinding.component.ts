import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

    profileId = 147;
    profileCompany = 'Vivid Infotech';
    employeeStatus = 'online';
    currentstatus = ' ';

    getEmployeeStatus() {
        return this.employeeStatus;
    }

  constructor() {
    //   function(){}
      setTimeout(() => {
        this.employeeStatus = 'Offline';
      }, 2000);
  }

  ngOnInit() {
  }

  onClickstatus() {
      this.employeeStatus = 'idle';
  }

  OnupdateStatus(event: Event) {
    // console.log(event);
    // this.currentstatus = (<HTMLInputElement>event.target).value;
    this.employeeStatus = (event.target as HTMLInputElement).value;
  }

  OnCurrentStatus() {
    this.employeeStatus = this.currentstatus;
  }
}
