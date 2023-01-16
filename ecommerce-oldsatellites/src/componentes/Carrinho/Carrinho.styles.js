import styled from "styled-components";

export const CardProduto = styled.div`
  height: 90vh;
  width: 20vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px #4daecd;
  border-radius: 9px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const HeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  background-color: #383b40;
  color: #f2f2f2;
  opacity: 90%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

export const MainPrincipal = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterPrincipal = styled.div`
  background-color: #383b40;
  color: #f2f2f2;
  opacity: 90%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #4daecd;
    height: 16vh;
  }
`;

export const Voltar = styled.button`
  width: 10vw;
  height: 6vh;
  background-color: #daa520;
  color: white;
  border-radius: 3rem;
  border: none;
  font-size: 1rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 6vh;
    width: 15vw;
    font-size: 8px;
    border-radius: 1rem;
  }
`;