import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  @Input() title: string = "";
  @Input() btn1: string = "";
  @Input() btn2: string = "";
  @Output("submit") onSubmit = new EventEmitter();

  @Output("cadastro") onCadastro = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  cadastro() {
    this.onCadastro.emit();
  }

}
