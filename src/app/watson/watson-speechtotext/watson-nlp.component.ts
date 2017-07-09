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
    selector: 'watson-nlp-component',
    templateUrl: './watson-nlp.component.html',
    styleUrls: ['./watson-nlp.component.css']
})
export class WatsonNLPComponent implements OnInit {
    sentance: string = "";
    private show:string = "";
    constructor(private http: Http, private watsonService: WatsonService) {

    }

    ngOnInit() {

    }
    // this function gets called from html (button) , and it calls the wastson api on django 
    callWatsonNlpApi() { 
        var body = {"data":this.sentance};
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyZWVqMTIzIiwidXNlcl9pZCI6MywiZW1haWwiOiJhcmVlakBjb20iLCJleHAiOjE1MjUzNjc3NTl9.JDuQ-zZid5FzDW4_Z2liv2JUhvocK0UDwBlNVae2z94');
        this.http
            .post('http://127.0.0.1:8000/api/watson/',
            body, {
                headers: headers
            })
            .subscribe(data => {
                console.log(data.json());
                var temp = data.json();
                this.show = temp["Succes"]["keywords"][0]["sentiment"]["score"]
                console.log(this.show);
            }, error => {
                console.log(JSON.stringify(error.json()));
                alert("not ok")
            });
    }

}

