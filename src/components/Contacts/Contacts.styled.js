import styled from 'styled-components';
import { theme } from '../theme';

export const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 256px;
  height: 100%;
  border: 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${theme.fontWeights.bolt};
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnSubmit = styled.button`
  width: 100px;
  padding: 5px;
  background-color: ${theme.colors.btnBackground};
  border: none;
  color: ${theme.colors.btnColorSweet};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${theme.colors.accentBackground};
    color: ${theme.colors.btnColorDarc};
  }
  border-radius: ${theme.radii.normal};
`;
