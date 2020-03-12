import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html'
})
export class DocumentComponent implements OnInit {

  documents : any[]
  document : Document = new Document();

  constructor(
    private documentService : DocumentService
  ) { }

  ngOnInit() {
    this.loadDocument();
  }

  loadDocument(){
    this.documentService.getAllDocument().subscribe(data => {this.documents = data; console.log(this.documents)})
  }

  deleteDocument(document) {
    this.documentService.deleteDocument(document.idDocument).subscribe(() => { this.loadDocument() })
  }
  createDocument() {
    this.documentService.saveDocument(this.documents).subscribe(
      () => {
        this.loadDocument();
        this.document = new Document();

      }
    )
  }
}
