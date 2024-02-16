import { Container } from "./styles/styles";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer"; 
export function App() {
  return(
    <Container>
      <div id="app">
        <Header/>
        <Nav/>
        <Main/>
      </div>
      <Footer/>
    </Container>
  )
}