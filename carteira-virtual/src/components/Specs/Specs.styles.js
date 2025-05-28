import styled from 'styled-components';
export const SpecsWrapper = styled.div `
  text-align: left;
  margin-bottom: 24px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 16px;
    font-weight: 600;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 6px;
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: 1rem;
    }
    li {
      font-size: 0.85rem;
    }
  }
`;
