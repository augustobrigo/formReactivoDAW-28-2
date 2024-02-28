import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css']
})
export class FormPComponent implements OnInit{
miform!: FormGroup;
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.miform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      fecha:['',[Validators.required]],
      trabajo:['',[Validators.required]],
      ps:['', [Validators.required, Validators.pattern('^[A-Z].{8}[0-9]$')]],
      ps_r:['',[Validators.required]]
    ,

    }, {
      validator: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(fr: FormGroup){
    const ps = fr.get('ps')!.value;
    const ps_r = fr.get('ps_r')!.value;

    if (ps==ps_r) {
     const comprobado=true
    }
  }

}
