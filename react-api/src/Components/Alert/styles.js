import styled from "styled-components";

const AlertBox = styled.div`
  z-index: 99;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 451px;
    height: 222px;
    border-radius: 12px;
  }

`;

export default AlertBox;
