import { GlobalStyle } from './Global.style';
import Heading from './components/atoms/text/heading/Heading';
import Button from './components/atoms/buttons/common_button/Button';
import Title from './components/atoms/text/title/Title';
import Paragraph from './components/atoms/text/paragraph/Paragraph';
import Caption from './components/atoms/text/caption/Caption';
import CircleDiv from './components/atoms/divs/circle_divs/default_circle/CircleDiv';
import BlueCircleDiv from './components/atoms/divs/circle_divs/blue_circle/BlueCircleDiv';
import DisplayFlexDiv from './components/atoms/divs/display_flex_divs/display_flex_div/DisplayFlexDiv';
import FormInput from './components/atoms/form/form_input/FormInput';
import FormSubmit from './components/atoms/form/submit_button/FormSubmit';
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <DisplayFlexDiv wrap='wrap' gap='20px' direction='reverse'>
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
      </DisplayFlexDiv>
      <DisplayFlexDiv justify='center' gap='72px'>
        <Title title01={true}>This is title01 Aa 32px</Title>
        <Title title02={true}>This is title02 Aa 24px</Title>
      </DisplayFlexDiv>
      <DisplayFlexDiv direction='column-reverse'>
        <Paragraph p1={true} color='blue'>
          This is p1 Aa 18px
        </Paragraph>
        <Paragraph p2={true} color='green'>
          This is p1 Aa 16px
        </Paragraph>
      </DisplayFlexDiv>
      <DisplayFlexDiv direction='reverse' justify='space-around' align='center'>
        <Caption color='red'>This is caption Aa 16px</Caption>
        <DisplayFlexDiv direction='column' gap='20px'>
          <Button color='red'>Default button</Button>
          <Button color='black'>Default button</Button>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
      <DisplayFlexDiv gap='20vw' justify='center' align='center'>
        <CircleDiv color='green' size='48px'>
          <Paragraph p2={true}>01</Paragraph>
        </CircleDiv>
        <CircleDiv color='blue' size='72px'>
          <Paragraph p1={true}>02</Paragraph>
        </CircleDiv>

        <BlueCircleDiv>
          <Paragraph p1={true}>01</Paragraph>
        </BlueCircleDiv>
      </DisplayFlexDiv>
      <form>
        <Heading h3={true}>Give me your money</Heading>
        <FormInput type='name' text='Your dogs last name' theme='dark' />
        <FormInput type='tel' text='Your moms phone' theme='light' />
        <FormSubmit value='Okey b00s' />
      </form>
    </>
  );
}

export default App;
