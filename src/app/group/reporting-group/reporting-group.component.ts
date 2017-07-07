import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../group';
import * as Chartist from 'chartist';
import { NvD3Component } from 'ng2-nvd3';
declare let d3: any;
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TableData } from '../../md/md-table/md-table.component';
@Component({
  selector: 'app-list-groups',
  templateUrl: './reporting-group.component.html',
  styleUrls: ['./reporting-group.component.css']
})
export class ReportingGroupComponent implements OnInit {
  public tableData1: TableData;
  public showTable:boolean = false;
  public isDataAvailableForUAE: boolean;
  public isDataAvailableForOutsideUAE: boolean;
  public labelForGraphUAE: any = [];
  public dataForGraphUAE: any = [];
  public labelForGraphOutsideUAE: any = [];
  public dataForGraphOutsideUAE: any = [];
  public totalGroups: number;
  type: any;
  data1: any;
  data2: any;
  options1: any
  public show: any;
  public performance: any;
  public performanceOutsideUAE: any;
  constructor(private http: Http, private groupService: GroupService) {
    this.isDataAvailableForUAE = false;
    this.isDataAvailableForOutsideUAE = false;
    this.show = [];
    this.performanceOutsideUAE = [];
    this.performance = [];
    this.totalGroups = 0;
    this.type = 'bar';
    this.getJSON().subscribe(data => {
      this.show = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("./cards.json")
      .map((res: any) => res.json())
  }
  public getJSONPerformance(): Observable<any> {
    return this.http.get("./performance.json")
      .map((res: any) => res.json())
  }
  public getJSONPerformanceOutsideUAE(): Observable<any> {
    return this.http.get("./performanceOutsideUAE.json")
      .map((res: any) => res.json())
  }
  showtable(){
    this.showTable = !this.showTable;
  }
  ngOnInit() {
            this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'University', 'GPA'],
            dataRows: [
                ['U123456', 'Niger', 'AUS', '1.3'],
                ['U654321', 'Curaçao', 'UOS', '1.33'],
                ['u000123987', 'linda', 'AUS', '1.25']
            ]
         };
    this.getJSONPerformanceOutsideUAE().subscribe(data => {
      this.performanceOutsideUAE = data["values"];
      this.performanceOutsideUAE.forEach(element => {
        this.labelForGraphOutsideUAE.push(element["label"]);
        this.dataForGraphOutsideUAE.push(element["value"]);
      });
      this.data2 = {
        labels: this.labelForGraphOutsideUAE,
        datasets: [
          {
            label: "Students",
            data: this.dataForGraphOutsideUAE,
          }
        ]
      };
      this.options1 = {
        responsive: true,
        maintainAspectRatio: false
      };
    });
    this.getJSONPerformance().subscribe(data => {
      this.performance = data["values"];
      this.performance.forEach(element => {
        this.labelForGraphUAE.push(element["label"]);
        this.dataForGraphUAE.push(element["value"]);
      });
      this.data1 = {
        labels: this.labelForGraphUAE,
        datasets: [
          {
            label: "Students",
            data: this.dataForGraphUAE,
          }
        ]
      };
      this.options1 = {
        responsive: true,
        maintainAspectRatio: false
      };
    });
    this.isDataAvailableForUAE = true
  }
}
