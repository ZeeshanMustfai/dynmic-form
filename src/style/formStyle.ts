import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
width: 100%;
padding: 10px;
font-size: 14px;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;  
  &:hover {
    background-color: #0056b3;
  }
`;

export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none; /* Remove default arrow icon in some browsers */
  background-color: white;
  cursor: pointer;
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;


