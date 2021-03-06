import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,

  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
