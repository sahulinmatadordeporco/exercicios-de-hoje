// Criando o objeto carro com propriedades
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    detalhes: function() {
      console.log(`Detalhes do carro: Marca ${this.marca}, Modelo ${this.modelo}, Ano ${this.ano}`);
    }
  };
  
  // Chamando o método detalhes
  carro.detalhes();
  
  // Adicionando a propriedade "cor"
  carro.cor = 'Prata';
  
  // Exibindo o objeto atualizado
  console.log(carro);

  