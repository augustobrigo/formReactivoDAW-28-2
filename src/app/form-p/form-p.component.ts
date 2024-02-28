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
      ps:['', [Validators.required, Validators.pattern('^[A-Z].*[0-9]$'), Validators.minLength(10), Validators.maxLength(10)]],
    })
  }


}
