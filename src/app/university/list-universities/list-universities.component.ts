import { AfterViewInit, Component, OnInit } from '@angular/core';
import {University} from '../university.model/university';
import {UniversityService} from '../university.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-list-universities',
  templateUrl: './list-universities.component.html',
  styleUrls: ['./list-universities.component.css']
})
export class ListUniversitiesComponent implements OnInit, AfterViewInit {
    universities: University[];

  constructor(private universityService: UniversityService,
              private router: Router) {
  }

  ngOnInit() {
      this.universityService.findAll().subscribe(universities => this.universities = universities);
  }

  ngAfterViewInit() {
    $('#university-table').DataTable();

    //  Activate the tooltips
    $('[rel=\'tooltip\']').tooltip();
  }

}
