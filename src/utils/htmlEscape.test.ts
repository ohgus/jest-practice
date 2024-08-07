import { escape, unescape } from './htmlEscape';

describe('escape', () => {
  let escaped = '&amp;&lt;&gt;&quot;&#39;/';
  let unescaped = '&<>"\'/';

  it('should escape values', () => {
    expect(escape(unescaped)).toBe(escaped);
  });

  it('should handle strings with nothing to escape', () => {
    expect(escape('haha')).toBe('haha');
  });

  it('should dscape the same characters unescaped by `_.unescape`', () => {
    expect(escape(unescape(escaped))).toBe(escaped);
  });

  ['`', '/'].forEach((chr) => {
    it(`should not escape the ${chr} character`, () => {
      expect(escape(chr)).toBe(chr);
    });
  });
});

describe('unescape', () => {
  let escaped = '&amp;&lt;&gt;&quot;&#39;/';
  let unescaped = '&<>"\'/';

  it('should unescape values', () => {
    expect(unescape(escaped)).toBe(unescaped);
  });

  it('should handle strings with nothing to unescape', () => {
    expect(unescape('haha')).toBe('haha');
  });

  it('should unescape the same characters escaped by `_.escape`', () => {
    expect(unescape(escape(unescaped))).toBe(unescaped);
  });

  ['&#96;', '&#x2F;'].forEach((entity) => {
    it(`should not unescape the "${entity}" entity`, () => {
      expect(unescape(entity)).toBe(entity);
    });
  });

  it('should handle leading zeros in HTML entities', () => {
    expect(unescape('&lt;&#39;&#039;&#0039;&#00039;&#000039;')).toBe("<'''''");
  });
});
