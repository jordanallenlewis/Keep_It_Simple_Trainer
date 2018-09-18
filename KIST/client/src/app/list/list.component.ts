import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { ExportService } from '../export/export.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() settings: any
  @Input() source: LocalDataSource;
  @Input() relatedList: boolean = true;
  @Output() onUserRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStartEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  totalResults: number = 0;

  perPage: number = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exportService: ExportService
  ) { }

  ngOnInit() {

    if (this.source) {
      this.source.onChanged().subscribe(res => {
        this.totalResults = this.source.count();
      });
    }

    this.settings.attr = {
      class: 'table table-striped ng2-table'
    }
  }

  perPageChange(perPage) {
    this.source.setPaging(this.source.getPaging()['page'], perPage, true);
  }

  export() {
    this.source.getFilteredAndSorted().then(res => {
      this.exportService.exportToExcel(res);
    });
  }

  public userRowSelect(event: any) {
    this.onUserRowSelect.emit(event);
  }

  public rowSelect(event: any) {
    this.onRowSelect.emit(event);
  }

  public deleteConfirm(event: any) {
    this.onDelete.emit(event);
  }

  public editConfirm(event: any) {
    this.onEdit.emit(event);
  }

  public edit(event: any) {
    this.onEdit.emit(event);
  }

}
