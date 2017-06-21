import { TablerowGeneratorPipe } from './tablerow-generator.pipe';

fdescribe('TablerowGeneratorPipe', () => {
  it('create an instance', () => {
    const pipe = new TablerowGeneratorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return inserted value', () => {
    const pipe = new TablerowGeneratorPipe();
    expect(pipe.transform(null)).toBe(null);
    expect(pipe.transform({})).toEqual({});
    expect(pipe.transform({table: {}})).toEqual({table: {}});
    expect(pipe.transform({table: {headers: []}})).toEqual({table: {headers: []}});
  });

  it('should return array', () => {
    const pipe = new TablerowGeneratorPipe();
    expect(pipe.transform({table: {headers: [{}]}, fields: []})).toEqual([]);    
  });

  it('should return array with length 3', () => {
    const pipe = new TablerowGeneratorPipe();
    let result = pipe.transform({table: {headers: [{}]}, fields: [{},{},{}]});
    expect(result.length).toBe(3);
  });

  it('should return array with length 2', () => {
    const pipe = new TablerowGeneratorPipe();
    let result = pipe.transform({table: {headers: [{},{}]}, fields: [{},{},{},{}]});
    expect(result.length).toBe(2);
  });

});
