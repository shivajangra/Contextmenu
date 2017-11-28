import { Component, ViewChild } from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from '../lib';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  constructor(private contextMenuService: ContextMenuService) { }

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({ event: $event, item: item });
    $event.preventDefault();
  }
}
