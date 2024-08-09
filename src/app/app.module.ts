import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BookComponent } from './books/book/book.component';
import { ReservationComponent } from './reservations/reservation/reservation.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { UserComponent } from './users/user/user.component';
import { RessourceComponent } from './ressources/ressource/ressource.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookDialogComponent } from './books/book-dialog/book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookUpdateDialogComponent } from './books/book-update-dialog/book-update-dialog.component';
import { ConfirmationDialogComponent } from './books/confirmation-dialog/confirmation-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BookComponent,
    ReservationComponent,
    SubjectComponent,
    UserComponent,
    RessourceComponent,
    BookDialogComponent,
    BookUpdateDialogComponent,
    ConfirmationDialogComponent,
    BookDetailsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
