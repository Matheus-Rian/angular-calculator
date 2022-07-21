import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubService } from 'src/services/github.service';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { InfoGithubComponent } from './components/info-github/info-github.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InfoGithubComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GithubService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
