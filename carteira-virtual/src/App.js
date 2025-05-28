import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Hero } from './components/Hero/Hero';
import { Specs } from './components/Specs/Specs';
import { DocButton } from './components/DocButton/DocButton';
const Container = styled.div `
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  max-width: 500px;
  width: 100%;
  overflow: hidden;
`;
const Content = styled.div `
  padding: 24px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`;
const Title = styled.h1 `
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;
export const App = () => (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Container, { children: [_jsx(Hero, {}), _jsxs(Content, { children: [_jsx(Specs, {}), _jsx(DocButton, { href: "https://drive.google.com/file/d/149mgLv0_AskqS3bWHQw7kzyudn5YQX5w/view?usp=drive_link", children: "NFe Scooter" }), _jsx(DocButton, { href: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9962023.pdf", children: "Resolu\u00E7\u00E3o Contran N\u00BA 996/2023" })] })] }) }));
export default App;
