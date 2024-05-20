import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive, provideRouter, RouterOutlet } from '@angular/router';
import { DataTableComponent } from './entities/components/data-table/data-table.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './entities/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NameFilterPipe } from './entities/pipes/name-filter/name-filter.pipe';
import { SkillFilterPipe } from './entities/pipes/skill-filter/skill-filter.pipe';
import { LvlStartPipe } from './entities/pipes/level-filter/lvl-start/lvl-start.pipe';
import { LvlEndPipe } from './entities/pipes/level-filter/lvl-end/lvl-end.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomeComponent,
    NameFilterPipe,
    SkillFilterPipe,
    LvlStartPipe,
    LvlEndPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
