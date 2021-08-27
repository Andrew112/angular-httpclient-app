import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {


    Employee: any = [];

    constructor(
      public restApi: RestApiService
    ) { }

    ngOnInit() {
      this.loadEmployees();
    }

    // Get employees list
    loadEmployees() {
      return this.restApi.getEmployees().subscribe((data: {}) => {
        this.Employee = data;
      });
    }

    // Delete employee
    deleteEmployee(id) {
      if (window.confirm('Are you sure, you want to delete?')) {
        this.restApi.deleteEmployee(id).subscribe(data => {
          this.loadEmployees();
        });
      }
    }
  }

