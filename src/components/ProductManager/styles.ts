import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 8%;
  }

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  padding: 1rem;
  border: 1px solid var(--darkPurple);
  background: var(--lightPurple);
  height: 300px;
  margin-right: 1rem;

  h1 {
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
  }

  #productsDropdown,
  button {
    text-align: center;
    display: block;
    width: 80%;
    height: 20%;
    margin: 0 auto;
    border-radius: 0.7rem;
    border: none;
    background: var(--background);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    h2 {
      font-weight: normal;
      color: var(--darkPurple);
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
