import { GroupCheckPipe } from './group-check.pipe';
import { Group } from "../form.model";

fdescribe('GroupCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupCheckPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return inserted value', () => {
    const pipe = new GroupCheckPipe();
    expect(pipe.transform(null)).toBe(null);
    expect(pipe.transform("test")).toBe("test");
    expect(pipe.transform("test", {})).toBe("test");
  });

  it('should return same group array', () => {
     const pipe = new GroupCheckPipe();
    expect(pipe.transform([], {})).toEqual([]);
    expect(pipe.transform([{title:"testGroup"}], {})).toEqual([{title:"testGroup"}]);
    expect(pipe.transform([{title:"testGroup", multi: true}], {})).toEqual([{title:"testGroup", multi: true}]);
    expect(pipe.transform([{title:"testGroup", multi: true, kind: "transplants"}], {})).toEqual([{title:"testGroup", multi: true, kind: "transplants"}]);
  });

  it('should return group array with changed fieldName', () => {
      const pipe = new GroupCheckPipe();
      let result = pipe.transform([{title:"testGroup", multi: true, kind: "transplants", fields: [{fieldName: "testField"}]}], {transplants:[{graft: "kid"}]});
      let expectedValue = "testField%multi_0";
      expect(result[0].fields[0].fieldName).toEqual(expectedValue);
      expect(result.length).toBe(1);
  });

  it('should return group array with extra groups', () => {
      const pipe = new GroupCheckPipe();
      let result = pipe.transform([{title:"testGroup", multi: true, kind: "transplants", fields: [{fieldName: "testField"}]}], {transplants:[{graft: "kid"}, {graft: "kid"}]});
      let expectedValue = "testField%multi_1";
      expect(result[1].fields[0].fieldName).toEqual(expectedValue);
      expect(result.length).toBe(2);
  });
});
