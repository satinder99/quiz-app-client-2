import { Component, OnInit, Output, EventEmitter } from '@angular/core';


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

  @Output() newQuestions : any = new EventEmitter();

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

      const ws : xlsx.WorkSheet = wb.Sheets[sheetName];
      
      var data = (xlsx.utils.sheet_to_json(ws, {header : 1}));

      for(let i = 1; i < data.length; i++) {
        let options = [];
        options.push(data[i][1]);
        options.push(data[i][2]);
        options.push(data[i][3]);
        options.push(data[i][4]);
        let currentQuestion = {
          question : data[i][0],
          options : options,
          correctIndex : data[i][5],
          type : 'mcq',
          correctAns : options[data[i][5] - 1]
        }

        this.questionArray.push(currentQuestion);
      }

      this.newQuestions.emit(this.questionArray);
    };

  
    reader.readAsBinaryString(target.files[0])  // file reading completed it trigger onload;

  }

  questionArray : Array<any> = [];

  question : ""
  type : ''
  options : []
  correctAns : ''
  correctIndex : null

}
