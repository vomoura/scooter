import styled from 'styled-components'

export const TripWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 8px;
  align-items: center;

& > button {
    margin-bottom: 0;  /* zera o margin-bottom apenas aqui */
  }
`

export const Value = styled.div`
  font-size: 2rem;
  font-weight: 600;
`