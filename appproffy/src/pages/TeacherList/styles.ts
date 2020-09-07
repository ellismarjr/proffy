import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const TeachersList = styled.ScrollView`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins-Regular';
`;

export const Input = styled.TextInput`
  height: 54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  height: 56px;
  background: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo-Bold';
  font-size: 16px;
`;
