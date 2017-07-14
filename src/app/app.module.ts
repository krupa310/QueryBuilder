import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ConditionComponent } from './condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
