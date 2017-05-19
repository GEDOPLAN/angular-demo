import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[repeat-me]'
})
export class RepeatMeDirective {

  constructor(private template:TemplateRef<any>, private view:ViewContainerRef) { }

  @Input("repeat-me")
  set repeatCount(c:number){
    this.view.clear();
    for (let i=0;i<c;i++){
      this.view.createEmbeddedView(this.template);
    }
  }
}
