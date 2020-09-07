import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo-Bold';
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px 24px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 18px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background: #fafafc;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Archivo-Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Poppins-Regular';
  color: #8257e5;
  font-size: 26px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const FavoriteButton = styled(RectButton)`
  background: ${(props: { favorited: boolean }) =>
    props.favorited ? '#8257e5' : '#e33d3d'};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  flex-direction: row;
  flex: 1;
  height: 56px;
  background: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactText = styled.Text`
  color: #fff;
  font-family: 'Archivo-Bold';
  font-size: 16px;
  margin-left: 16px;
`;
