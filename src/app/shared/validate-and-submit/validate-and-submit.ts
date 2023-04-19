import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
    selector: 'form[formGroup][validateAndSubmit]'
})

export class ValidateAndSubmit {
    constructor(
        private formGroup: FormGroupDirective
    ) { }

    @Output()
    validateAndSubmit: EventEmitter<boolean> = new EventEmitter();

    @HostListener('submit')
    onSubmit() {
        this.formGroup.form.markAllAsTouched();
        this.validateAndSubmit.emit(this.formGroup.form.disabled || this.formGroup.form.valid);
    }
}