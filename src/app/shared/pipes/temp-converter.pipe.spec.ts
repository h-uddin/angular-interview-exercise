import { TempConverterPipe } from './temp-converter.pipe';

describe('TempConverterPipe', () => {

  let pipe: TempConverterPipe;

  beforeEach(() => {
    pipe = new TempConverterPipe(); 
  });

  // 0°C to Fahrenheit = 32°F
  it('should convert Celsius to Fahrenheit', () => {
    expect(pipe.transform(0, 'F')).toBe('32.0 °F'); 
  });

  // NaN should return 'N/A'
  it('should return "N/A" for invalid input (NaN)', () => {
    expect(pipe.transform(NaN)).toBe('N/A'); 
  });

});
