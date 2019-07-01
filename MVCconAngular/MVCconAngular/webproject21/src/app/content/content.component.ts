import { Component } from "@angular/core";

@Component({
    selector: "content",
    templateUrl: "/content.component.html",
    styleUrls: ["/content.component.css"]
})

export class Content{
    
    contenuto: string;

    constructor (){
        this.contenuto = null;
    }

}