import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { myAppComponent } from "./app.component"

@NgModule({
    imports: [BrowserModule],
    declarations: [myAppComponent],
    bootstrap: [myAppComponent]
})
export class AppModule {

}