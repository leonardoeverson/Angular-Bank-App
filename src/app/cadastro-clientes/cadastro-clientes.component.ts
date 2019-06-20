/* tslint:disable:prefer-const */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {inspect} from 'util';
import * as util from 'util';


@Component({
    selector: 'app-cadastro-clientes',
    templateUrl: './cadastro-clientes.component.html',
    styleUrls: ['./cadastro-clientes.component.css']
})

export class CadastroClientesComponent implements OnInit {

    constructor(private fb: FormBuilder) {}

    formCadastro;
    conversao;

    ngOnInit() {
        this.formCadastro = this.fb.group({
            nome : [''],
            endereco :  [''],
            cpf :  [''],
            telefone :  [''],
            email:  ['']
        });
    }

    cadastro() {
        localStorage.setItem('cadastro', JSON.stringify(this.getDirtyValues(this.formCadastro)));
    }

    getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    }

    getDirtyValues(form: any) {
        let dirtyValues = {};

        Object.keys(form.controls)
            .forEach(key => {
                let currentControl = form.controls[key];

                if (currentControl.dirty) {
                    if (currentControl.controls) {
                        dirtyValues[key] = this.getDirtyValues(currentControl);
                    } else {
                        dirtyValues[key] = currentControl.value;
                    }
                }
            });

        return dirtyValues;
    }
}
