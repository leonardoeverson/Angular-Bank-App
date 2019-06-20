import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    formLogin;
    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        const options = {
            stringsElement: '#typed-strings',
            // tslint:disable-next-line:max-line-length
            strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser Training Bankinhg hoje mesmo', 'Inovavor digital e seguro'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 200,
            smartBackspace: true,
            fadeOut: true,
            showCursor: false,
            startDelay: 1000,
            loop: true
        };

        this.formLogin = this.fb.group({
            cpf: ['']
        });

        const typed = new Typed('.typing-element', options);
    }

}
