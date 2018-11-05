export class QuestionBase<T> {
  value: T;
  type: string;
  class: string;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      type?: string,
      label?: string,
      required?: boolean,
      class?: string,
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.class = options.class || '';
    this.type = options.type || '';
    this.controlType = options.controlType || '';
  }
}
