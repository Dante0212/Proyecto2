import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Loggin } from '../interface/loggin';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {



  constructor( private router: Router
    ) {

    }


  ngOnInit() {
  }

  registro() {
    this.router.navigate(['/registro']);
  }
  login() {
    this.router.navigate(['/inicio-sesion']);
  }
}
