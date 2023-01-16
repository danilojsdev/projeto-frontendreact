import React from "react";
import Home from "./componentes/Home/Home";
import Carrinho from "./componentes/Carrinho/Carrinho";
import { GlobalStyle } from "./GlobalStyle";
import { CardProduto, ProdutoImg, MainPrincipal, FooterPrincipal, Button } from "./App.styles";

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Sputnik",
        price: 70000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Sputnik.jpg")} />,
        quantidade: 1,
      },
      {
        id: 2,
        name: "Explorer 1",
        price: 150000000.0,
        imagemURL: <ProdutoImg src={require("./assets/Explorer1.jpg")} />,
        quantidade: 1,
      },
      {
        id: 3,
        name: "Explorer 6",
        price: 90000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Explorer6.jpg")} />,
        quantidade: 1,
      },
      {
        id: 4,
        name: "TIROS-1",
        price: 130000000.00,
        imagemURL: <ProdutoImg src={require("./assets/TIROS-1.jpg")} />,
        quantidade: 1,
      },
      {
        id: 5,
        name: "Vostok 1",
        price: 180000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Vostok1.jpg")} />,
        quantidade: 1,
      },
      {
        id: 6,
        name: "Telstar 1",
        price: 320000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Telstar1.jpg")} />,
        quantidade: 1,
      },
      {
        id: 7,
        name: "Luna 10",
        price: 260000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Luna10.jpg")} />,
        quantidade: 1,
      },
      {
        id: 8,
        name: "Mariner 9",
        price: 310000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Mariner9.jpg")} />,
        quantidade: 1,
      },
      {
        id: 9,
        name: "Venera 9",
        price: 280000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Venera9.jpg")} />,
        quantidade: 1,
      },
      {
        id: 10,
        name: "Hubble",
        price: 2500000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Hubble.jpg")} />,
        quantidade: 1,
      },
      {
        id: 11,
        name: "Galileo",
        price: 7000000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Galileo.jpg")} />,
        quantidade: 1,
      },
      {
        id: 12,
        name: "International Space Station",
        price: 10000000000.00,
        imagemURL: <ProdutoImg src={require("./assets/ISS.jpg")} />,
        quantidade: 1,
      },
      {
        id: 13,
        name: "Cassini",
        price: 2000000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Cassini.jpg")} />,
        quantidade: 1,
      },
      {
        id: 14,
        name: "Messenger",
        price: 1500000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Messenger.jpg")} />,
        quantidade: 1,
      },
      {
        id: 15,
        name: "Rosetta",
        price: 4000000000.00,
        imagemURL: <ProdutoImg src={require("./assets/Rosetta.jpg")} />,
        quantidade: 1,
      },
    ],
    filtro: "",
    query: "",
    minPrice: "",
    maxPrice: "",
    order: 1,
    pagina: false,
    produtosNoCarrinho: [],
    adicionados: false,
    quantidadeProdutos: 0,
  };

  
  adicionaProduto = (produtoId) => {
    this.setState({
      adicionados: false,
      quantidadeProdutos: this.state.quantidadeProdutos + 1,
    });

    const prod = this.state.produtos.filter((p) => {
      return p.id === produtoId;
    });
    const novaProduto = prod[0];

    const novoProdutoIndex = this.state.produtosNoCarrinho.findIndex((p) => {
     return p.id === produtoId;
    }) 
    if (novoProdutoIndex === -1){
      const novoProdutoAdicionado = [
        ...this.state.produtosNoCarrinho,
        novaProduto,
      ];
      console.log(novoProdutoAdicionado)
      this.setState({ produtosNoCarrinho: novoProdutoAdicionado });
    } else { 
        const copiaCarrinho = [...this.state.produtosNoCarrinho]
        copiaCarrinho[novoProdutoIndex].quantidade++
        this.setState({ produtosNoCarrinho: copiaCarrinho });
    }

    
  };

  removerProduto = (id) => {
    const novosProdutosNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({
      produtosNoCarrinho: novosProdutosNoCarrinho,
    });
  };

  renderizaCarrinho = () => {
    this.setState({ pagina: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ pagina: false });
  };

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value,
    });
  };

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value,
    });
  };

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value,
    });
  };
  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {
    let componenteCarrinho;

    if (this.state.adicionados) {
      componenteCarrinho = this.adicionaProduto;
    }

    if (this.state.pagina) {
      return (
        <Carrinho
          produtos={this.state.produtosNoCarrinho}
          removerProduto={this.removerProduto}
          renderizaPaginaFalse={this.renderizaPaginaFalse}
        />
      );
    }

    const novoArrayDeProdutos = this.state.produtos
      .filter((prod) => {
        return prod.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((prod) => {
        return this.state.minPrice === "" || prod.price >= this.state.minPrice;
      })
      .filter((prod) => {
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice;
      })
      .sort((cres, dec) => {
        return this.state.order * (cres.price - dec.price);
      })
      .map((produto) => {
        return (
          <CardProduto>
            {produto.imagemURL}
            <br></br>
            <h1>{produto.name}</h1>
            <br></br>
            <h3 style={{ fontWeight: 'bold', color: 'green' }}>{`$ ${produto.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}</h3>
            <br></br>
            <button onClick={() => this.adicionaProduto(produto.id)}>
              Adicionar ao carrinho
            </button>
          </CardProduto>
        );
      });

    return (
      <div>
        <GlobalStyle />
        <Home
          query={this.state.query}
          updateQuery={this.updateQuery}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}
          order={this.state.order}
          updateOrder={this.updateOrder}
          renderizaCarrinho={this.renderizaCarrinho}
          quantidadeProdutos={this.state.quantidadeProdutos}
        ></Home>
        <MainPrincipal>{novoArrayDeProdutos}</MainPrincipal>

        <FooterPrincipal>
            <h3>Copyright © Developer: Danilo José Silva</h3>
        </FooterPrincipal>
      </div>
    );
  }
}
export default App;
