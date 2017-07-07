import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {Group} from '../group';
import {ActivatedRoute, Router} from '@angular/router';

import {Advisor} from '../../advisor/advisor';
import {Student} from '../../student/student.model/student';

@Component({
    selector: 'app-add-group',
    templateUrl: './add-group.component.html',
    styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
    group: Group;

    constructor(private groupService: GroupService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.group = new Group();
    }

    ngOnInit() {
        if (this.router.url.includes('edit')) {
            this.group.advisor = new Advisor();
            this.group.students = [];
            let i: number;
            for (i = 0; i < 15; i++) {
                this.group.students[i] = new Student();
            }
            this.groupService.findOne(this.activatedRoute.snapshot.params['id'])
                .subscribe(group => this.group = group);
        }
        else {
            this.group.id = 6541;
        }

    }

    f

}
