import styled from "styled-components";

export const Container = styled.main`
  padding: 2.5rem 1rem;
  background: var(--lightPurple);
  border-radius: 0.7rem;
  border: 1px solid var(--darkPurple);
  margin: 1rem;

  h1 {
    display: block;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 2%;
  }

  .dashboardDiv {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    padding: 2%;
    border-radius: 0.7rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-weight: lighter;
      }
    }

    img {
      width: 15%;
      height: 15%;
    }

    strong {
      display: block;
      text-align: center;
      font-weight: lighter;
      margin-top: 1rem;
    }
  }
`;
