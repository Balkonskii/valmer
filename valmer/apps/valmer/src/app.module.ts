import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PushModule } from '@ngrx/component';

import { AppComponent } from './app/containers';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, PushModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
