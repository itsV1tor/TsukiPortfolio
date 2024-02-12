import { Container } from "./styles/styles";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
export function App() {
  return(
    <Container>
      <Header/>
      <Nav/>
      <Main/>
    </Container>
  )
}