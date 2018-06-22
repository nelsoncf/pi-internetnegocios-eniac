import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegistroService } from './registro.service'
import { ActivatedRoute, Router} from '@angular/router'
import { NotificationService } from '../shared/messages/notification.service';

@Component({
  selector: 'mt-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
    private registroService: RegistroService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
      cpf: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  registrar() {
    this.registroService.registrar(
                            this.registroForm.value.name,
                            this.registroForm.value.email,
                            this.registroForm.value.password,
                            this.registroForm.value.cpf)
                     .subscribe(
                       () => this.notificationService.notify(`Cadastro efetuado com sucesso`),
                       response => this.notificationService.notify(response.error.message),
                       () => {
                        this.router.navigate([atob(this.navigateTo)])
                       })
  }

}
