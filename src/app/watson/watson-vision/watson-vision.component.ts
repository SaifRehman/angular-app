import { Component, OnInit } from '@angular/core';
import { WatsonService } from '../watson.service';
import { Watson } from '../watson';
import * as Chartist from 'chartist';
import { NvD3Component } from 'ng2-nvd3';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'watson-vision-component',
    templateUrl: './watson-vision.component.html',
    styleUrls: ['./watson-vision.component.css']
})
export class WatsonVisionComponent implements OnInit {
link:string="";
    constructor(private http: Http, private watsonService: WatsonService) {
        
    }

    ngOnInit() {

    }
 callWatsonVisionApi() {
        var body = {"link":this.link};
        console.log(this.link);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxIiwidXNlcl9pZCI6NSwiZW1haWwiOiJVc2VyMUBlbWFpbC5jb20iLCJleHAiOjE1MjU0NzE1NTZ9.zaryPzeRb-oDk-Q-osCwf4Mxd0dIV1QOQO_Ys_SCBek');
        this.http
            .post('http://127.0.0.1:8000/api/watsonV/',
            body, {
                headers: headers
            })
            .subscribe(data => {
                console.log(data.json());
            }, error => {
                console.log(JSON.stringify(error.json()));
                alert("not ok")
            });
 }}