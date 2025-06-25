import styled from 'styled-components'

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 14px 0;
  margin-bottom: 16px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 0;
    font-size: 0.95rem;
  }
`
