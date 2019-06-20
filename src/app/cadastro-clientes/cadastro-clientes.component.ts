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

        // this.formCadastro = new FormGroup({
        //         nome : new FormControl(),
        //         endereco : new FormControl(),
        //         cpf : new FormControl(),
        //         telefone : new FormControl(),
        //         email: new FormControl()
        // });
    }

    cadastro() {
        console.log(this.formCadastro.controls);
        localStorage.setItem('cadastro', JSON.stringify(this.formCadastro.controls, this.getCircularReplacer()));
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
}
