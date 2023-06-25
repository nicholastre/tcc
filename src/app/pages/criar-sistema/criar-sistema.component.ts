import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-criar-sistema',
  templateUrl: './criar-sistema.component.html',
  styleUrls: ['./criar-sistema.component.scss'],
})
export class CriarSistemaComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cabecalho: this.formBuilder.group({
        nomeSistema: this.formBuilder.control('', Validators.required),
        linkSistema: this.formBuilder.control('', Validators.required),
        criadorSistema: this.formBuilder.control('', Validators.required),
      }),
      sessoes: this.formBuilder.array([
        this.formBuilder.group({
          nomeSessao: this.formBuilder.control('', Validators.required),
          atributos: this.formBuilder.array([]),
        }),
      ]),
      calculos: this.formBuilder.array([
      ]),
    });
    this.controlFormArrayAtributos(0).push(this.formBuilder.control('',Validators.required))
    this.controlFormArrayCalculos.push(this.formBuilder.control('',Validators.required))
  }

  get controlFormArraySessoes(): FormArray {
    return this.form.get('sessoes') as FormArray;
  }
  get controlFormArrayCalculos(): FormArray {
    return this.form.get('calculos') as FormArray;
  }

  public controlFormArrayAtributos(index: number) {
    return (
      (this.controlFormArraySessoes.at(index) as FormGroup).controls[
        'atributos'
      ] as FormArray
    );
  }
  public addSection() {
    this.controlFormArraySessoes.push(this.newSectionForm());
  }
  public addCalcFormControl() {
    this.controlFormArrayCalculos.push(this.newCalcForm());
  }
  public removeSection(i: number, type: string) {
    if (type === 'sessoes') {
      this.controlFormArraySessoes.removeAt(i);
      return;
    }
    if(type=='calculos'){
      this.controlFormArrayCalculos.removeAt(i);
      return;
    }
  }

  public newSectionForm(): FormGroup {
    const meuFormControl = this.formBuilder.control('',Validators.required);
    return (new FormGroup({
      nomeSessao: new FormControl('',Validators.required),
      atributos: new FormArray([meuFormControl]),
    }));
  }
  public newCalcForm() {
    const meuFormControl = this.formBuilder.control('',Validators.required);
    return meuFormControl;
  }

  public addFormControlAtributos(i: number) {
    const control = this.formBuilder.control('',Validators.required);
    this.controlFormArrayAtributos(i).push(control);
  }
  public removeFormControl(i: any,j:any){
    this.controlFormArrayAtributos(i).removeAt(j);
  }

  public submit() {
    if(this.form.valid){
      this.localStorageService.saveObject('sistema',this.form.value);
      this.redirect(['..','criar-ficha']);
      return;
    }

  }

  public isFormControlInvalid(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }

  public displayErrorMessage(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }

  public redirect(route: string[]) {
    this.router.navigate(route, {
      relativeTo: this.activatedRoute,
    });
  }
}
