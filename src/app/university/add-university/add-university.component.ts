import { Component, OnInit } from '@angular/core';
import {University} from '../university.model/university';
import {UniversityService} from '../university.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
  export class AddUniversityComponent implements OnInit {
    university: University;

  constructor(private universityService: UniversityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.university = new University();
  }

  ngOnInit() {
    if (this.router.url.includes('edit')) {
      this.universityService.findOne(this.activatedRoute.snapshot.params['id'])
          .subscribe(university => this.university = university);
    }
    else {
      this.university.id = 6541;
    }

  }

  goToList(): void {
    this.router.navigate(['university/list']);
  }

  addUniversity(): void {
    this.universityService.save(this.university).subscribe();
    this.goToList();
  }

}
