export class FormConfig{
    pages: Page[];
    formId: string;
    form: string;
    type: string;
    version: string;

    constructor(form?: any){
        this.formId = form && form.formId || null;
        this.pages = form && form.pages && form.pages.map(p => p = new Page(p)) || null;
        this.form = form && form.form || null;
        this.type = form && form.type || null;
        this.version = form && form.version || null;
    }
}

export class Page{
    orderNr: number;
    title: string;
    hidden: string;
    groups: Group[];

    constructor(page?: any){
        this.orderNr = page && page.orderNr || null;
        this.title = page && page.title || null;
        this.hidden = page && page.hidden || null;
        this.groups = page && page.groups && page.groups.map(g => g = new Group(g)) || null;
    }
}

export class Group{
    orderNr: number;
    orientation: Orientation;
    table: Table;
    fields: Field[];
    title: string;
    isHidden: boolean;
    kind: string;
    multi: boolean;

    constructor(group?: any){
        this.orderNr = group && group.orderNr || null;
        this.title = group && group.title || null;
        this.orientation = group && group.orientation || Orientation.VERTICAL;
        this.fields = group && group.fields && group.fields.map(f => f = new Field(f)) || null;
        this.table = group && group.table && new Table(group.table) || null;
        this.isHidden = group && group.isHidden || false;
        this.kind = group && group.kind  || null;
        this.multi = group && group.multi || false;
    }
}

export class Table{
  columns: number;
  headers: Header[];

  constructor(table?: any){
    this.columns = table && table.columns || 1;
    this.headers = table && table.headers && table.headers.map(h => new Header(h)) || null;
  }
}

export class Header{
  text: string;

  constructor(header?: any){
    this.text = header && header.text || null;
  }
}

export enum Orientation  {
    VERTICAL,
    HORIZONTAL
}

export class Field{
    fieldName: string;
    orderNr: number;
    type: string;
    placeholder: string;
    isRequired: boolean;
    options: FieldOption[];
    lov: string;
    class: string;
    errorMessage: string;
    helpText: string;
    importance: number;
    regOnChange: regOnChange;
    visible: boolean;
    disable: boolean;
    validators: FormValidator[];
    minDate: Date;
    maxDate: Date;

    constructor(field?: any) {
        this.fieldName = field && field.fieldName || null;
        this.orderNr = field && field.orderNr || null;
        this.type = field && field.type || null;
        this.placeholder = field && field.placeholder || this.fieldName;
        this.isRequired = field && field.isRequired || false;
        this.options = field && field.options || null;
        this.errorMessage = field && field.errorMessage || null;
        this.helpText = field && field.helpText || null;
        if(field && field.class){
            if((field.class as string).endsWith('wide column')){
                this.class = field.class;
            }
            else{
                this.class = field.class + ' wide column';
            }
        }
        else{
            this.class = 'four wide column';
        }
        this.importance = field && field.importance || 0;
        this.visible = (field && field.visible != undefined && field.visible !== true) ? false : true;
        this.disable = field && field.disable || false;
        this.regOnChange = field && field.regOnChange || null;
        this.lov = field && field.lov || null;
        this.validators = field && field.validators && field.validators.map(v => new FormValidator(v)) || null;
    }
}

export class FieldOption{
    key: string;
    value: string;

    constructor(option?: any){
        this.key = option && option.key || null;
        this.value = option && option.value || this.key ;
    }
}

export class FormValidator{
    name: string;
    value: string | number | boolean;

    constructor(validator?: any){
        this.name = validator && validator.name || null;
        this.value = validator && validator.value || null;
    }
}

export interface regOnChange{
    parent: string;
    callbacks: Callback[];
}

export interface Callback{
    method: string;
    param: string;
    value: string;
}
