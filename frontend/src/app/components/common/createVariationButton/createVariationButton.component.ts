/*
 * Angular 2 decorators and services
 */
import {Component, Output} from '@angular/core';

import { CardComponent } from './../card/card.component.ts';

/*
 * Dynamic outlet to generate components
 */
@Component({
    selector: 'cb-create-variation-button',
    directives: [CardComponent],
    styles: [`
    .card {
        width: 90%;
        cursor: pointer;
        }

        .card:hover line {
        stroke: #AAA;
        }

        .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem;
        }

        .svgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .svg {
        width: 5%;
        margin: 3rem;
        }

        .svg line {
        stroke: #CCC;
        }

        .input {
        font-size: 1rem;
        }

        .button {
        font-size: 1rem;
        margin-left: 1rem;
        }

        .error {
        color: #bd3230;
        padding-bottom: 2rem;
        text-align: center;
        }

        .hidden {
        display: none;
        }
    `],
    template: `<cb-card>
        <div class="svgWrapper">
            <svg
            class="svg"
            version="1.1"
            viewBox="0 0 24 24"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            <g>
              <line
                fill="none"
                strokeLinecap="round"
                x1="11.5"
                x2="11.5"
                y1="0.5"
                y2="22.5"
              />
              <line
                fill="none"
                strokeLinecap="round"
                x1="22.5"
                x2="0.5"
                y1="11.5"
                y2="11.5"
              />
            </g>
          </svg>
          </div>
        </cb-card>`,
})
export class CreateVariationButtonComponent {
    constructor() {
    }
}