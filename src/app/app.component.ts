import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SemanticInputComponent } from 'ng-semantic';
import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
