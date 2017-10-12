import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';

import { WebSocketService } from './shared/web-socket.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModule,
  ],
  providers: [
    WebSocketService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
