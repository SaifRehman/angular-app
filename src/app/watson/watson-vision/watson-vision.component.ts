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

    constructor(private http: Http, private watsonService: WatsonService) {
        
    }

    ngOnInit() {

    }
}
