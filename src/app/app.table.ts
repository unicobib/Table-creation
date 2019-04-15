import { Component } from "@angular/core";

@Component({
    selector:'app-table',
    templateUrl:'./app.table.html'
})

export class AppTable{
     Employee = [
        {
        'First Name':'Bibek',
        'Last Name':'Dey',
        'Employee Id':123,
        'Designation':'System Engineer'
    },
    {
        'First Name':'Mahesh',
        'Last Name':'Garai',
        'Employee Id':101,
        'Designation':'Senior Software Engineer'
    },
    {
        'First Name':'Koushik',
        'Last Name':'Adhikary',
        'Employee Id':1221,
        'Designation':'System Engineer'
    },
    {
        'First Name':'Santanu',
        'Last Name':'Sen',
        'Employee Id':193,
        'Designation':'Architech'
    }
];

}