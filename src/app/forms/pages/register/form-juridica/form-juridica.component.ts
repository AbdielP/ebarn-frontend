import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-juridica',
  templateUrl: './form-juridica.component.html',
  styleUrls: ['./form-juridica.component.css']
})
export class FormJuridicaComponent implements OnInit {

  eventSubscription: Subscription;
  @Input() events: Observable<any>;
  @Output() emitirPersona: EventEmitter<any> = new EventEmitter();

  registerForm: any;
  phones: any;

  constructor(private formBuilder: FormBuilder, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.subscribeEvent();
    this.registerForm = this.formBuilder.group({
      comname: ['', {validators: [Validators.required]}],
      ruc: ['', {validators: [Validators.required]}],
      name: ['', {validators: [Validators.required]}],
      lastname: ['', {validators: [Validators.required]}],
      idnumber: ['', {validators: [Validators.required]}],
      province: ['', {validators: [Validators.required]}],
      city: ['', {validators: [Validators.required]}],
      address: ['', {validators: [Validators.required]}],
      phone: [''],
      cellphone: [''],
      extratelephones: this.formBuilder.array([]),
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required, Validators.minLength(8)]}],
      typeaccount: [''],
      persona: ['']
    });
  }
  get telephones(): FormArray {
    this.phones = this.registerForm.get('extratelephones') as FormArray;
    return this.registerForm.get('extratelephones') as FormArray;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEvent(): void {
    this.eventSubscription = this.events.subscribe(({tipoCuenta}) => {
      this.registerForm.patchValue({
        typeaccount: tipoCuenta.tipocuenta.tacc,
        persona: tipoCuenta.persona
      });
    });
  }

  onSubmit(): void{
    this.generalService.insertAccount(this.registerForm.getRawValue()).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Usuario creado correctamente.', `${resp.message}`, 'success');
      }
    });
  }

  addExtraPhones(): void {
    const extraphones = this.formBuilder.group({
      phone: [''],
      cell: ['']
    });
    this.telephones.push(extraphones);
  }

  removeExtraPhones(i: number): void {
    this.telephones.removeAt(i);
  }

  hideForm(tipopersona: number): void {
    this.emitirPersona.emit({persona: tipopersona});
  }
}
