import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-card class="card-demo">
      <mat-card-title><a href="" target="_blank">Layout Gap</a></mat-card-title>
      <mat-card-subtitle>Using 'fxLayoutGap' to create a grid-like layout
      </mat-card-subtitle>
      <mat-card-content class="large">
        <div fxFlexFill>
          <div fxFlexFill
               [fxLayout]="direction + ' wrap'"
               fxLayoutGap="10px 5px grid"
               style="cursor: pointer;"
               (click)="toggleDirection()">
            <div fxFlex="25">
              <div class="one" fxFlexFill fxLayoutAlign="center center">
                A
              </div>
            </div>
            <div fxFlex="25">
              <div class="two" fxFlexFill fxLayoutAlign="center center">
                B
              </div>
            </div>
            <div fxFlex="25">
              <div class="three" fxFlexFill fxLayoutAlign="center center">
                C
              </div>
            </div>
            <div fxFlex="25">
              <div class="four" fxFlexFill fxLayoutAlign="center center">
                D
              </div>
            </div>
            <div fxFlex="25">
              <div class="five" fxFlexFill fxLayoutAlign="center center">
                E
              </div>
            </div>
            <div fxFlex="25">
              <div class="six" fxFlexFill fxLayoutAlign="center center">
                F
              </div>
            </div>
            <div fxFlex="25">
              <div class="seven" fxFlexFill fxLayoutAlign="center center">
                G
              </div>
            </div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer class="bottomPad">
        <div class="hint"></div>
      </mat-card-footer>
    </mat-card>
  `,
})
export class HomeComponent implements OnInit {

  public cardList: CardInterface[] = [];

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.cardList.push({
        imgSrc: 'http://via.placeholder.com/300',
        title: 'Card No. ' + i,
        description:
          'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
          This module provides Angular developers with component layout features using a custom Layout API, \
          mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
      });
    }
  }
}

  export interface CardInterface {
    imgSrc: string;
    title: string;
    description: string;
  }


