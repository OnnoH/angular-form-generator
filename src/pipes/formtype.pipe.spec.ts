import { FormtypePipe } from './formtype.pipe';

fdescribe('FormtypePipe', () => {
  it('create an instance', () => {
    const pipe = new FormtypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return same as input when select, check, autocomplete, radio, date, label', () => {
    const pipe = new FormtypePipe();
    expect(pipe.transform("select")).toBe("select");
    expect(pipe.transform("check")).toBe("check");
    expect(pipe.transform("autocomplete")).toBe("autocomplete");
    expect(pipe.transform("radio")).toBe("radio");
    expect(pipe.transform("date")).toBe("date");
    expect(pipe.transform("label")).toBe("label");
  });

  it('should return textfield when input is text, tel, number', () => {
    const pipe = new FormtypePipe();
    expect(pipe.transform("text")).toBe("textfield");
    expect(pipe.transform("tel")).toBe("textfield");
    expect(pipe.transform("number")).toBe("textfield");
  });

  it('should return button when input is button, submit, reset', () => {
    const pipe = new FormtypePipe();
    expect(pipe.transform("button")).toBe("button");
    expect(pipe.transform("submit")).toBe("button");
    expect(pipe.transform("reset")).toBe("button");
  });
});
