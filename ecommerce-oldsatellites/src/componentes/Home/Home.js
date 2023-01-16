import React from "react";
import { HeaderHome, InputBusca, ButtonEContador, Contador, ButtonCarrinho, ImgCarrinho, InputMinMax, InputsPrice, Order} from "./Home.styles";

class Home extends React.Component {
  render() {
    let valorContador = this.props.quantidadeProdutos;
    return (
      <div>
        <HeaderHome>
          <h1>VANGUARD X - Old Satellites</h1>
          <InputBusca
            placeholder="Busca por nome"
            value={this.props.query}
            onChange={this.props.updateQuery}
          />
          <ButtonEContador>
            <Contador>{valorContador}</Contador>
            <ButtonCarrinho onClick={this.props.renderizaCarrinho}>
              <ImgCarrinho src={require("../../assets/carrinho.png")} />
            </ButtonCarrinho>
          </ButtonEContador>
        </HeaderHome>
        <InputsPrice>
          <div>
            <InputMinMax
              type="number"
              placeholder="Preço Minimo"
              value={this.props.minPrice}
              onChange={this.props.updateMinPrice}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Máximo"
              value={this.props.MaxPrice}
              onChange={this.props.updateMaxPrice}
            />
          </div>
          <div>
            <label for="sort"></label>
            <Order
              name="order"
              value={this.props.order}
              onChange={this.props.updateOrder}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </Order>
          </div>
        </InputsPrice>
      </div>
    );
  }
}
export default Home;
