describe('Resultado para divs: ', () => {
  const div = document.getElementsByTagName('div');
  it('Precisa conter 2 divs', () => {
    expect(div).toBeDefined('Seu site nao inclui a tag <div>');
    expect(div.length).toBe(2, 'Seu site nao possui duas divs');
  });
});

describe('Resultado para conteudo: ', () => {
  const div1 = document.getElementsByTagName('div')[0];
  const div2 = document.getElementsByTagName('div')[1];
  const contentDiv1 = div1.textContent.trim();
  const contentDiv2 = div2.innerHTML !== '';

  it('Div 1 e div 2 nao pode estar vazia', () => {
    expect(contentDiv1).not.toBe('', 'Sua primeira div precisa de conteudo');
    expect(contentDiv2).toEqual(true, 'Sua segunda div precisa de conteudo');
  });
  if (contentDiv1 !== '') {
    const paragraphs = div1.getElementsByTagName('p');
    const pCheck = paragraphs.length >= 2;
    it('Precisa conter pelo menos dois paragrafos nao vazios', () => {
      expect(pCheck).toBe(
        true,
        'Sua primeira div nao possui pelo menos dois paragrafos'
      );
      if (pCheck) {
        for (let i = 0; i < paragraphs.length; i++) {
          const content = paragraphs[i].textContent.trim();
          expect(content).not.toBe(
            '',
            `O paragrafo ${i + 1} nao possui conteudo`
          );
        }
      }
    });
  }
  if (contentDiv2) {
    const img = div2.getElementsByTagName('img')[0];
    it('Precisa conter uma imagem', () => {
      expect(img).toBeDefined('Sua segunda div nao possui uma imagem');
    });
    if (img) {
      const src =
        img.getAttribute('src') !== null && img.getAttribute('src') !== '';
      const alt =
        img.getAttribute('alt') !== null && img.getAttribute('alt') !== '';
      it('Precisa ser uma imagem definida corretamente', () => {
        expect(src).toBe(true, 'Sua imagem nao possui uma fonte');
        expect(alt).toBe(true, 'Sua imagem nao possui texto descritivo');
      });
    }
  }
});
