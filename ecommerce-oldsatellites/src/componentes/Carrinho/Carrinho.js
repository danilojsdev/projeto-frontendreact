import React from "react";
import { CardProduto, HeaderHome, Voltar, MainPrincipal, FooterPrincipal } from "./Carrinho.styles";

class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0;

    for (let produtos of this.props.produtos) {
      valorTotal += produtos.price * produtos.quantidade;
    }

    return valorTotal;
  };

  render() {
    // console.log(this.props.produtos)
    return (
      <div>
        <HeaderHome>
          <h2>CARRINHO</h2>
          <div>
            <Voltar onClick={this.props.renderizaPaginaFalse}>
              Continuar Comprando
            </Voltar>
          </div>
        </HeaderHome>
        <MainPrincipal>
          {this.props.produtos.map((produto) => {
            return (
              <CardProduto>
                {produto.imagemURL}
                <p>{produto.name}</p>
                <p>R${produto.price},00</p>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.removerProduto(produto.id)}>
                  Remover
                </button>
              </CardProduto>
            );
          })}
          <div>
            <p>
              <strong>Valor total: R${this.pegarValorTotal()},00</strong>
            </p>
          </div>
        </MainPrincipal>
        <FooterPrincipal>
          <h3>Copyright © Developer: Danilo José Silva</h3>
        </FooterPrincipal>
      </div>
    );
  }
}
export default Carrinho;
