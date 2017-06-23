import {Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
              <div class="panel panel-default">
                <div class="panel-heading" (click)="toggleActive()">
                  <h3 class="panel-title">{{ title }}
                    <span [class]="isActive ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'"></span>
                  </h3>
                </div>
                <div class="panel-body" *ngIf="isActive">
                  <ng-content></ng-content>
                </div>
              </div>
            `,
  styles: [`
            .panel{
              width: 500px;
              margin-bottom: 0px;
            }

            .glyphicon{
              float: right;
            }
          `]
})

export class ZippyComponent{
  @Input() title: string;
  isActive = false;

  toggleActive(){
    this.isActive = !this.isActive;
  }
}
