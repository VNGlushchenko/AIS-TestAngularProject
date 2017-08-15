import { Component } from '@angular/core';

@Component({
selector: 'app-header',
template: `<div [ngStyle]="{class: row}">
                <div [ngStyle]="{class: col-sm-6}">Home</div>
                <div [ngStyle]="{class: col-sm-6}">Collections</div>
            </div>`
})
export class HeaderComponent {

}