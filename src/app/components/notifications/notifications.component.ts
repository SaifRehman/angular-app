import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'notifications-cmp',
    templateUrl: 'notifications.component.html'
})
export class NotificationsComponent implements OnInit{
    showNotification(from, align){
        var type = ['','info','success','warning','danger','rose','primary'];

        var color = Math.floor((Math.random() * 6) + 1);

    	$.notify({
        	icon: "notifications",
        	message: "Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer."

        },{
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
	}
    ngOnInit(){
        // We put modals out of wrapper to working properly
        // $('.modal').appendTo("body");
    }
}
