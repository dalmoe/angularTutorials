import {Component} from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: 'app/simple-form.component.html',
  styles: [`
            .form-group.ng-touched.ng-invalid{
              border: 1px solid red;
          `]
})

export class SimpleFormComponent{
  onSubmit(x){
    console.log(x);
  }
}
