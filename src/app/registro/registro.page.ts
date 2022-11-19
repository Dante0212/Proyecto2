import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioLoginService } from '../servicio/servicio-login.service';
import { Loggin } from './../interface/loggin';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  Usuario: Loggin = {
    id:null,
    firstName: '',
    lastName: '',
    age: 0,
    userName:'',
    password:'',
    birthDate:'',
    gender:'male ,female',
    email:'',
    token:''
  };
  formularioRegistro: FormGroup;

  constructor( private toast: ToastController, private usuarioService: ServicioLoginService, private router: Router,
    private activateRouter: ActivatedRoute, private formB: FormBuilder) {
    this.formularioRegistro = this.formB.group({

      firstName:  ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      lastName:   ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(98)]],
      username: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      birthDate: [1990, [Validators.required, Validators.min(1991)]],
      gender: ['', [Validators.required]],

    });
  }
  public campo(control: string){
    return this.formularioRegistro.get(control);
  }
  public fueTocado(control: string){
    return this.formularioRegistro.get(control).touched;
  }

  ngOnInit() {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    if (id != null) {
      this.usuarioService.buscarID(+id).subscribe((usuario) => {
        this.Usuario.id = usuario.id;
        this.Usuario.firstName = usuario.firstName;
        this.Usuario.lastName = usuario.lastName;
        this.Usuario.age = usuario.age;
        this.Usuario.userName = usuario.userName;
        this.Usuario.userName = usuario.password;
        this.Usuario.birthDate = usuario.birthDate;
        this.Usuario.gender = usuario.gender;

      })
    }
  }
  Registrarse(){
    this.usuarioService.crearUsuario(this.Usuario).subscribe((usuario) => {
      const toast = this.toast.create({
        message: 'Usuario registrado correctamente',
        duration: 2000
      });
      this.router.navigate(['/']);
      toast.then((toast) => toast.present());
    });
  }
}
