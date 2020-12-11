import { Component, OnInit } from '@angular/core';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions : any;
  onfileUpload(event : any){
    console.log("event is : ", event);

    const target : DataTransfer = <DataTransfer>(event.target);

    if(target.files.length != 1){
      return alert('Add one file only')
    }

    const reader : FileReader = new FileReader();

    reader.onload = (e : any)=>{
      const binaryString : string = e.target.result;

      // wb is work book which contains multiple excel sheets
      const wb : xlsx.WorkBook = xlsx.read(binaryString, {type : 'binary'});

      const sheetName : string = wb.SheetNames[0];
      console.log("sheet name", sheetName);

      const ws : xlsx.WorkSheet = wb.Sheets[sheetName];
      console.log("data is : ", ws);
      
      var data = (xlsx.utils.sheet_to_json(ws, {header : 1}));
      console.log(data)
    };

    reader.readAsBinaryString(target.files[0])  // file reading completed it trigger onload;

    
  }
}
