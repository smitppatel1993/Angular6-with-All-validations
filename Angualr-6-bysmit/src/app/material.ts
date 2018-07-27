import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatSnackBarConfig} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatAutocompleteModule,MatDialogModule,MatDividerModule,MatChipsModule, MatCheckboxModule,MatToolbarModule,MatRadioModule,MatInputModule,MatSliderModule,MatFormFieldModule,MatCardModule,MatSelectModule,MatSnackBarModule],
    exports: [MatButtonModule,MatAutocompleteModule,MatDialogModule,MatDividerModule,MatChipsModule, MatCheckboxModule,MatToolbarModule,MatRadioModule,MatInputModule,MatSliderModule,MatFormFieldModule,MatCardModule,MatSelectModule,MatSnackBarModule],
})
export class MaterialModule{}

export class Config {
    getConfig(){
        let config = new MatSnackBarConfig();
        config.duration = 4000;
        config.horizontalPosition ="right";
        config.verticalPosition = "bottom";
        return config;

    }
}