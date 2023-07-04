describe('Resultado para style.css: ', () => {
  const link = document.getElementsByTagName('link')[0];
  it('Precisa conter a tag <link>', () => {
    expect(link).toBeDefined(
      'Seu site nao possui a tag para inclusao de CSS externo'
    );
  });
  if (link) {
    it('Precisa fazer referencia ao arquivo style.css', () => {
      const css = link.getAttribute('href');
      expect(css).toEqual(
        './css/style.css',
        'Seu site nao esta incluindo o arquivo externo styles.css'
      );
    });
  }
});

describe('Resultados para <h1>: ', () => {
  const h1 = document.getElementsByTagName('h1')[0];
  it('Precisa conter um elemento <h1>', () => {
    expect(h1).toBeDefined();
  });
  if (h1) {
    const content = h1.textContent.trim();
    const style = window.getComputedStyle(h1);
    it('Nao pode estar vazio', () => {
      expect(content).not.toEqual('', 'Seu elemento <h1> nao pode estar vazio');
    });
    it('Precisa ter fundo aquamarine', () => {
      expect(style.backgroundColor).toBe(
        'rgb(95, 158, 160)',
        'O fundo nao esta na cor especificada'
      );
    });
  }
});

describe('Resultados para <h2>: ', () => {
  const h2 = document.getElementsByTagName('h2')[0];
  it('Precisa conter um elemento <h2>', () => {
    expect(h2).toBeDefined();
  });
  if (h2) {
    const content = h2.textContent.trim();
    const style = window.getComputedStyle(h2);
    it('Nao pode estar vazio', () => {
      expect(content).not.toEqual('', 'Seu elemento <h2> nao pode estar vazio');
    });
    it('Precisa ter fundo marrom', () => {
      expect(style.backgroundColor).toBe(
        'rgb(165, 42, 42)',
        'O fundo nao esta na cor especificada'
      );
    });
  }
});

describe('Resultados para <h3>: ', () => {
  const h3 = document.getElementsByTagName('h3')[0];
  it('Precisa conter um elemento <h3>', () => {
    expect(h3).toBeDefined();
  });
  if (h3) {
    const content = h3.textContent.trim();
    const style = window.getComputedStyle(h3);
    it('Nao pode estar vazio', () => {
      expect(content).not.toEqual('', 'Seu elemento <h1> nao pode estar vazio');
    });
    it('Precisa ter fundo aquamarine', () => {
      expect(style.backgroundColor).toBe(
        'rgb(127, 255, 212)',
        'O fundo nao esta na cor especificada'
      );
    });
  }
});
