import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
    selector: "presenza",
    templateUrl: "/presenza.component.html",
    styleUrls: ["/presenza.component.css"]
})

export class Presenza{
   
    public title: string;
    public newEmployer: string;
    public IEmployees: Array<string>;
    public parameter: string;
    public isPartial: boolean;

    constructor (){
        this.title = "Fogli presenze Gruppo EURIS"
        this.newEmployer = null;
        this.isPartial = false;
        this.parameter = null;
        this.IEmployees = [
            "Adam",
            "Alberto",
            "Alex",
            "Antonino",
            "Achille",
            "Adriano",
            "Alexander",
            "Anthony",
            "Alfonso",
            "Antonella",
            "Alfredo",
            "Aldo",
            "Alan",
            "Agostino",
            "Arturo",
            "Armando",
            "Amedeo",
            "Aniello",
            "Ascanio",
            "Antonio",
            "Alvise",
            "Aurelio",
            "Adrian",
            "Aleandro",
            "Axel"
        ];
    }

    addEmployer(): void{
        this.isPartial = false;
        if (this.newEmployer != null && this.newEmployer != "") {
            this.IEmployees.push(this.newEmployer);  
        }
    }

    searchPerson(search: NgForm){
        this.isPartial = true;
        this.parameter = search.value.name;
        console.log(search);
    }
}