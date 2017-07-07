import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Group} from '../group';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-list-groups',
    templateUrl: './list-groups.component.html',
    styleUrls: ['./list-groups.component.css']
})

export class ListGroupsComponent implements OnInit, AfterViewInit {
    groups: Group[];

    constructor(private groupService: GroupService,
                private router: Router) {
    }

    deleteGroup(id: number): void {
        this.groupService.delete(id)
            .subscribe(data => {
                    // location.reload();
                    this.groupService.findAll()
                        .subscribe(groups => this.groups = groups);
                }
            );
    }

    ngOnInit() {
        $('#group-table').DataTable();
        // {
        //     'pagingType': 'full_numbers',
        //     'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
        //     responsive: true,
        //     language: {
        //         search: '_INPUT_',
        //         searchPlaceholder: 'Search records',
        //     }
        // });

        //  Activate the tooltips
        $('[rel=\'tooltip\']').tooltip();
        this.groupService.findAll()
            .subscribe(groups => this.groups = groups);
    }

    ngAfterViewInit() {
        // const table = $('#group-table').DataTable();
        // $('#group-table').DataTable();
        // {
        //     'pagingType': 'full_numbers',
        //     'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
        //     responsive: true,
        //     language: {
        //         search: '_INPUT_',
        //         searchPlaceholder: 'Search records',
        //     }
        // });

        //  Activate the tooltips
        // $('[rel=\'tooltip\']').tooltip();
    }

    showSwal(id: number, self: ListGroupsComponent) {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
        }).then(function () {
            self.deleteGroup(id);
            swal({
                title: 'Deleted!',
                text: 'Group has been deleted.',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
        });
    }
}
