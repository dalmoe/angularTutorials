import {FormGroup, FormControl} from '@angular/forms';

export class FormValidators{

  static passwordsMatch(group: FormGroup){

        var newPassword = group.controls['newPassword'].value;
        var confirmPassword = group.controls['confirmPassword'].value;

         //If either of these fields is empty, the validation
         //will be bypassed. We expect the required validator to be
        // applied first.
        if (newPassword == '' || confirmPassword == '')
            return null;

        if (newPassword != confirmPassword){
          console.log('test');
            return { passwordsMatch: true };
        }
        return null;
    }
}
