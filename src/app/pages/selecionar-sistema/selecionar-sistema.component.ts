import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-sistema',
  templateUrl: './selecionar-sistema.component.html',
  styleUrls: ['./selecionar-sistema.component.scss']
})
export class SelecionarSistemaComponent implements OnInit {

  public form!: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      selectSystem: new FormControl('')
    })
  }

  public redirect(route: string[]) {
    this.router.navigate(route, {
      relativeTo: this.activatedRoute,
    });
  }
}
