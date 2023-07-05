import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-criar-ficha',
  templateUrl: './criar-ficha.component.html',
  styleUrls: ['./criar-ficha.component.scss'],
})
export class CriarFichaComponent implements OnInit {
  public form: FormGroup;
  public sessoes = this.localStorageService.getObject('sistema').sessoes;
  public calculos = this.localStorageService.getObject('sistema').calculos;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cabecalho: this.formBuilder.group({
        nomeJogador: this.formBuilder.control('', Validators.required),
        nomePersonagem: this.formBuilder.control('', Validators.required),
        nomeSistema: this.formBuilder.control(
          { value: '', disabled: true },
          Validators.required
        ),
        linkSistema: this.formBuilder.control(
          { value: '', disabled: true },
          Validators.required
        ),
        criadorSistema: this.formBuilder.control(
          { value: '', disabled: true },
          Validators.required
        ),
        alinhamento: this.formBuilder.control('', Validators.required),
        idade: this.formBuilder.control('', Validators.required),
      }),
      sessoes: this.formBuilder.array([]),
      calculos: this.formBuilder.array([]),
      habilidades: this.formBuilder.array([
        this.formBuilder.group({
          nomeHabilidade: this.formBuilder.control('', Validators.required),
          descricaoHabilidade: this.formBuilder.control(
            '',
            Validators.required
          ),
        }),
      ]),
    });

    this.form.patchValue({ ...this.localStorageService.getObject('sistema') });

    this.sessoes.forEach((element: any, index: number) => {
      this.controlFormArraySessoes.push(this.newSectionForm());
      this.addFormControlAtributos(index, element.atributos.length + 1);
    });
    for (let index = 0; index < this.calculos.length; index++) {
      this.controlFormArrayCalculos.push(this.newCalcForm());
    }
  }
  get controlFormArraySessoes(): FormArray {
    return this.form.get('sessoes') as FormArray;
  }

  get controlFormArrayCalculos(): FormArray {
    return this.form.get('calculos') as FormArray;
  }
  get controlFormArrayHabilidades(): FormArray {
    return this.form.get('habilidades') as FormArray;
  }

  public newCalcForm() {
    const meuFormControl = this.formBuilder.control('', Validators.required);
    return meuFormControl;
  }

  public controlFormArrayAtributos(index: number) {
    return (this.controlFormArraySessoes.at(index) as FormGroup).controls[
      'atributos'
    ] as FormArray;
  }

  public addFormControlAtributos(i: number, qtd: number) {
    const control = this.formBuilder.control('', Validators.required);
    for (let index = 1; index < qtd; index++) {
      this.controlFormArrayAtributos(i).push(control);
    }
  }

  public exibeNomeSessoes(index: number) {
    return this.sessoes[index].nomeSessao;
  }
  public exibeNomeAtributo(indexSessao: number, indexAtributo: number) {
    return this.sessoes[indexSessao].atributos[indexAtributo];
  }
  public exibeNomeCalculo(indexCalculo: number) {
    return this.calculos[indexCalculo];
  }

  public genereteAtributos(value: number) {
    const meuFormControl = this.formBuilder.control('', Validators.required);
    for (let index = 0; index < value; index++) {}
  }

  public newSectionForm() {
    const meuFormControl = this.formBuilder.control('', Validators.required);
    return new FormGroup({
      atributos: new FormArray([]),
    });
  }

  public newHabilidadeForm(): FormGroup {
    const meuFormControl = this.formBuilder.control('', Validators.required);
    return new FormGroup({
      nomeHabilidade: meuFormControl,
      descricaoHabilidade: meuFormControl,
    });
  }

  public addHabilidadeFormControl() {
    this.controlFormArrayHabilidades.push(this.newHabilidadeForm());
  }

  public removeHabilidade(i: number) {
    this.controlFormArrayHabilidades.removeAt(i);
    return;
  }
}
