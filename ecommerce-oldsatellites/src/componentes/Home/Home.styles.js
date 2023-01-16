import styled from "styled-components";

export const ImgCarrinho = styled.img`
  height: 7vh;
`;

export const HeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #f2f2f2;
  opacity: 90%;
  height: 15vh;
  background-color: #383b40;
  padding: 0px 20px 0px 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

export const ButtonEContador = styled.div`
  display: flex;
`;

export const ButtonCarrinho = styled.button`
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #383b40;
  border: none;
`;

export const Contador = styled.p`
  display: block;
  position: absolute;
  color: #383b40;
  top: 0.5rem;
  right: 0.3rem;
  width: 1rem;
  height: 1rem;
  background: #daa520;
  text-align: center;
  border-radius: 50%;
  font-size: 15px;
  margin-right: 10px;
`;

export const InputBusca = styled.input`
  margin-left: 30%;
  display: block;
  width: 30vw;
  height: 4vh;
  background-color: #daa520;
  border-bottom: 1px solid black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: 0%;
  }
  ::placeholder {
    color: #eae7e7;
    margin-right: 5%;
    padding: 10px 10px 10px 10px;
  }
`;

export const InputsPrice = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InputMinMax = styled.input`
  margin: 1rem;
  width: 10rem;
  height: 1.5rem;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    margin: 0;
  }
`;

export const Order = styled.select`
  margin: 1rem;
  width: 7rem;
  height: 1.5rem;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
`;