import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent)
  }]
})
export class InputComponent implements ControlValueAccessor {

  //#region Properties

  /**
   * @description
   * The value of the input
   */
  private _value: any;

  /**
   * @description
   * The value of the input
   */
  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      this.onChangeCallback(value);
    }
  }

  /**
   * @description
   * The value of the input
   */
  get value(): any {
    return this._value;
  }

  /**
   * @description
   * The parent form
   */
  get form() {
    return ((this.parent as unknown as FormControlDirective).form);
  }

  /**
   * @description
   * The input's label
   */
  @Input()
  label: string;

  /**
   * @description
   * The input's placehholder
   */
  @Input()
  placeholder: string;

  /**
   * @description
   * The input's autocomplete option
   */
  @Input()
  autocomplete: string;

  /**
   * @description
   * The input's icon
   */
  @Input()
  icon: string;

  /**
   * @description
   * The input's error message
   */
  @Input()
  error: string;

  /**
   * @description
   * The input's type
   */
  @Input()
  type: string;

  /**
   * @description
   * The input's control name
   */
  @Input()
  formControlName: string;

  /**
   * @description
   * The form update method
   */
  private onChangeCallback: (_: any) => void = () => { };

  //#endregion

  //#region Lifecycle

  constructor(private parent: ControlContainer) {
    this.icon = '';
    this.value = '';
    this.error = '';
    this.label = '';
    this.type = 'text';
    this.placeholder = '';
    this.autocomplete = '';
    this.formControlName = '';
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  //#endregion

  //#region Methods

  /**
   * @description
   * Checks if the control has any erro
   */
  hasError(): boolean {
    return Boolean(this.form?.get(this.formControlName)?.touched && this.form?.get(this.formControlName)?.hasError('required'));
  }

  //#endregion
}
