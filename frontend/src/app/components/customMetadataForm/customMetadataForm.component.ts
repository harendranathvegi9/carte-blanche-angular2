/**
 * Import angular core dependencies
 */
import { Component, OnInit, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl } from '@angular/forms';

import { controlTypes } from './controlTypes.ts';
import { ButtonComponent } from './../common/index.ts';
import { ComponentMetadataResolver } from './../../services/index.ts';
@Component({
    selector: 'cb-customm-metadata-form',
    styles: [``],
    directives: [REACTIVE_FORM_DIRECTIVES, ButtonComponent],
    template: `
    <div>
       <h1 class="title">Edit component properties</h1>
       <p class="text-light">Select the property type for each of the inputs bellow </p>
       <form [formGroup]="inputPropertiesForm" (ngSubmit)="onSubmit()">
           <div *ngFor="let input of inputs; let i = index" formGroupName="inputs">
                <label>{{input.name}}</label>
                <select formControlName="{{input.name}}">
                    <option *ngFor="let type of controls" [ngValue]="type">{{type}}</option>
                </select>
            </div>
            <p>
               <cb-button [buttonType]="buttonClass" type="submit" [disabled]="!inputPropertiesForm.valid">Submit project</cb-button>
            </p>
       </form>
    </div>
    `
})
export class customMetadataFormComponent implements OnInit {
    @Input() component: any;
    @Input() componentPath: string;

    controls: string[];
    inputs: Object[] = [];
    buttonClass: string;

    inputsGroup = new FormGroup({});
    inputPropertiesForm = new FormGroup({
        inputs: this.inputsGroup,
    });

    constructor(private metaDataResolver: ComponentMetadataResolver) {
        this.controls = controlTypes;
        this.buttonClass = 'primary';
    }

    ngOnInit() {
        this.generateInputTypeControls();
    }

    /**
     * Generate a selector for the appropriate control for each input type. start by
     * reading the input type (string, number, float etc) and from there generate the 
     * types of controls  that can apply like phone number, avatar etc.
     * 
     */
    generateInputTypeControls() {
        this.component.inputs.forEach(input => {
            this.inputsGroup.addControl(input.name, new FormControl(input.type.name));
            this.inputs = [...this.inputs, input];
        });
    }

    onSubmit() {
        console.log('Submit form', this.inputPropertiesForm);
        let inputControls = this.inputPropertiesForm.controls['inputs']['controls'];
        let metaObject: any = {
            props: {}
        };
        Object.keys(inputControls).forEach((key) => {
            metaObject.props[key] = inputControls[key].value;
        });
        
        //TODO - Organize this
        this.metaDataResolver.saveCustomMetaData('localhost', '7000', this.componentPath, metaObject);
    }
}