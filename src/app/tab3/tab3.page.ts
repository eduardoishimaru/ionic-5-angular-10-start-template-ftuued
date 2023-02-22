import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,

  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  whats(){
    this.abrirUrl('https://api.whatsapp.com/send?phone=5511963040072&text=Ol%C3%A1%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes');
   
  }

  abrirUrl(url: string){
    window.open(url,"_blank").focus();

  }
  enviar(){
    console.log('Enviado')
  }

}
