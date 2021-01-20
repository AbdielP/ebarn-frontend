import { GeneralService } from 'src/app/services/general.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-natural',
  templateUrl: './form-natural.component.html',
  styleUrls: ['./form-natural.component.css']
})
export class FormNaturalComponent implements OnInit {

  eventSubscription: Subscription;
  @Input() events: Observable<any>;
  @Output() emitirPersona: EventEmitter<any> = new EventEmitter();

  registerForm: any;
  phones: any;

  constructor(private formBuilder: FormBuilder, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.subscribeEvent();
    this.registerForm = this.formBuilder.group({
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
      persona: [''],
      ruc: [null],
      comname: [null]
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  get telephones(): FormArray {
    this.phones = this.registerForm.get('extratelephones') as FormArray;
    return this.registerForm.get('extratelephones') as FormArray;
  }

  subscribeEvent(): void {
    this.eventSubscription = this.events.subscribe(({tipoCuenta}) => {
      this.registerForm.patchValue({
        typeaccount: tipoCuenta.tipocuenta.tacc,
        persona: tipoCuenta.persona
      });
    });
  }

  onSubmit(): void {
    // Llamado al servicio para insertar/crear cuenta
    this.generalService.insertAccount(this.registerForm.getRawValue()).subscribe((resp: any) => {
      // console.log(resp);
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
