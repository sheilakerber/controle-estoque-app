import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);
  border: 1px solid red;
  border-radius: 0.7rem;
  flex: 2;
  height: 300px;
  justify-content: center;
  align-items: center;

  .lowStockTitle {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    img {
      width: 20%;
    }

    h1 {
      color: #d91313;
      font-weight: normal;
    }

    strong {
      color: #d9131354;
      font-weight: lighter;
    }
  }

  .lowStockSelection {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex: 2;

    p {
      border: 1px solid #d3d3d3;
      margin: 1rem;
      padding: 0.8rem;
      color: gray;
      border-radius: 0.7rem;
      font-weight: normal;
      font-size: 1rem;
    }
  }
`;
