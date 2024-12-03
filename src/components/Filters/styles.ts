import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Parkinsans", sans-serif;
  margin: 0 auto;
  max-width: 350px;
  overflow: visible;
  position: relative;
  text-transform: capitalize;
  width: 100%;

  @media (max-width: 800px) {
    max-width: none;
    width: 90vw;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: visible;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const OrderClose = styled.div`
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  gap: 0.6rem;
  justify-content: space-between;
  height: 38px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  width: 100%;

  span {
    padding-top: 3px;
  }

  svg {
    height: 14px;
    width: 14px;

    path {
      stroke: #212121;
    }
    transition-duration: 0.3s;
  }
`;

export const OrderOpen = styled(OrderClose)`
  svg {
    transform: rotate(180deg);
  }
`;

export const Orders = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-height: 350px;
  margin: 0 auto;
  margin-top: calc(38px + 16px);
  overflow-y: scroll;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;

  .order {
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    padding: 0.5rem 0;
    position: relative;
    width: 100%;

    &:hover {
      font-weight: bold;
      transition-duration: 0.3s;
    }

    &:last-child {
      border-bottom: none;
    }

    .color {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
    }
  }
`;

const styles = {
  OrdersContainer,
  Container,
  OrderClose,
  OrderOpen,
  Orders,
};

export default styles;

