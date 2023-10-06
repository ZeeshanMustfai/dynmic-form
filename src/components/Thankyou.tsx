import styled from 'styled-components';
import { SubmitButton } from '../style/formStyle';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const ThankYouHeading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const ThankYouMessage = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ThankYouImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const dummyImage = `https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80`

interface PThankyou {
    handleClose : () => void
}
const ThankYou = ({handleClose}:PThankyou ) => {
  return (
    <ThankYouContainer>
      <ThankYouHeading>Thank You!</ThankYouHeading>
      <ThankYouMessage>
        Your submission has been received. We appreciate your time and
        interest.
      </ThankYouMessage>
      <ThankYouImage
        src={dummyImage} // Replace with your image URL
        alt="Thank You Illustration"
      />
      <SubmitButton onClick={handleClose}>GoBack</SubmitButton>
    </ThankYouContainer>
  );
}

export default ThankYou;
