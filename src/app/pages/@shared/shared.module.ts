import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { TranslateModule } from "@ngx-translate/core";
export * from './shared.module';
// import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  imports: [
    //TranslateModule,
    CommonModule
  ],
//   declarations: [
//     LoaderComponent
//   ],
//   exports: [
//     LoaderComponent
//   ]
})
export class SharedModule { }
