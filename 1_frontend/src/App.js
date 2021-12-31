import { GlobalStyle } from './Global.style';
import Heading from './components/atoms/text/heading/Heading';
import Button from './components/atoms/buttons/common_button/Button';
import Title from './components/atoms/text/title/Title';
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Heading color='black' h1={true}>
        Black Heading H1 Aa 64px
      </Heading>
      <Heading color='red' h2={true}>
        Red heading h2 Aa 58px
      </Heading>
      <Heading color='blue' h3={true}>
        Blue heading h3 aa 48px
      </Heading>
      <Heading color='green' h4={true}>
        Green Heading H4 Aa 40px
      </Heading>
      <Heading color='gray' h5={true}>
        Gray Hading H5 Aa 32px
      </Heading>
      <Heading color='light-gray' h6={true}>
        Gray Heading H6 Aa 20px
      </Heading>
      <Title title01={true}>This is title01 Aa 32px</Title>
      <Title title02={true}>This is title02 Aa 24px</Title>

      <Button color='red'>Default button</Button>
      <Button color='black'>Default button</Button>
    </>
  );
}

export default App;
