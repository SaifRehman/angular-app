import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {Group} from '../group';
import {ActivatedRoute} from '@angular/router';
import {Advisor} from '../../advisor/advisor';
import {Student} from '../../student/student.model/student';
import {Program} from '../../university/university.model/program';
import {StudentAcademics} from '../../student/student.model/student-academics';
import {Department} from '../../university/university.model/department';
import {College} from '../../university/university.model/college';
import {University} from '../../university/university.model/university';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {
  group: Group;

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.group = new Group();
    this.group.advisor = new Advisor();
    this.group.students = [];
    let i: number;
    for (i = 0; i < 15; i++) {
      this.group.students[i] = new Student();
      this.group.students[i].program = new Program();
      this.group.students[i].program.department = new Department();
      this.group.students[i].program.department.college = new College();
      this.group.students[i].program.department.college.university = new University();
      this.group.students[i].studentAcademics = new StudentAcademics();
    }
    this.groupService.findOne(this.activatedRoute.snapshot.params['id'])
        .subscribe(group => this.group = group);
  }

}
