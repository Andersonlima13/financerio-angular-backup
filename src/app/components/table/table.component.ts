import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableDataConfig } from '../../interfaces/ui-conifg/table-data-config.interface';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: TableDataConfig[] = [];
  @Output() removeRow: EventEmitter<TableDataConfig> = new EventEmitter();

  constructor(public uiService: UiService) {}
  handleAction(item: TableDataConfig){
    this.removeRow.emit(item);
    
  }
}
