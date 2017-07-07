import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';

declare var $:any;
declare interface Table_With_Checkboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
  headerRow: string[];
  dataRows: Table_With_Checkboxes[];
}

@Component({
    moduleId: module.id,
    selector: 'extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})

export class ExtendedTableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
    ngOnInit(){
        // Init Tooltips
        // $('[rel="tooltip"]').tooltip();
        this.tableData1 = {
            headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
         };
         this.tableData2 = {
             headerRow: [ '#', '', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
             dataRows: [
                 {id: 1, ischecked: true, product_name: 'Moleskine Agenda', type: 'Office', quantity: 25, price: 49, amount: '1,225'},
                 {id: 2, ischecked: true, product_name: 'Stabilo Pen', type: 'Office', quantity: 30, price: 10.99, amount: '109'},
                 {id: 3, ischecked: true, product_name: 'A4 Paper Pack', type: 'Office', quantity: 50, price: 49, amount: '1,225'},
                 {id: 4, ischecked: false, product_name: 'Apple iPad', type: 'Meeting', quantity: 10, price: 499.00, amount: '4,990'},
                 {id: 5, ischecked: false, product_name: 'Apple iPhone', type: 'Communication', quantity: 10, price: 599.00, amount: '5,999'}
             ]
          };
          this.tableData3 = {
              headerRow: [ '', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT'],
              dataRows: [
                  ['product1', '#jacket', 'Spring Jacket','by Dolce&Gabbana', 'Red', 'M', '549', '1','549'],
                  ['product2', '#pants',  'Short Pants', 'by Pucci', 'Purple', 'M', '499', '2', '998'],
                  ['product3', '#nothing', 'Pencil Skirt', 'by Valentino', 'White', 'XL', '799', '1', '799']
              ]
           };
    }
    getTotal(){
        var total = 0;
        for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
            var integer = parseInt(this.tableData3.dataRows[i][8])
            total += integer;
        }
        return total;
    };
}
