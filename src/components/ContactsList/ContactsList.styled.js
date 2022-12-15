import styled from 'styled-components';
import { theme } from '../theme';

export const ListContact = styled.ul`
  padding-left: 0;
  width: 1500px;
`;

export const ItemContact = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Contact = styled.li`
  display: flex;
  width: 400px;
`;

export const NameCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

export const BtnDelete = styled.button`
  width: 50px;
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
