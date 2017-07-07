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
    selector: 'watson-speechtotext-component',
    templateUrl: './watson-speechtotext.component.html',
    styleUrls: ['./watson-speechtotext.component.css']
})
export class WatsonSpeechToTextComponent implements OnInit {

    constructor(private http: Http, private watsonService: WatsonService) {
        
    }

    ngOnInit() {

    }
}
