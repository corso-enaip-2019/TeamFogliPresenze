import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "sidebar",
    templateUrl: "/sidebar.component.html",
    styleUrls: ["/sidebar.component.css"]
})

export class Sidebar{
    public page: string;
    @Output() public changeComponent = new EventEmitter();

   public cambiaContenuto(page: string): void {
       this.page = page;
       this.changeComponent.emit(this.page);
   }
}