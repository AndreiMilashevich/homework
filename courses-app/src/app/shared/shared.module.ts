import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent,  } from './components/index';


const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent
]

@NgModule({
  declarations: [
    ...components,
    
      
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
