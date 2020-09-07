import React from 'react';
import { View, Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import { Container, TopBar, GoBackButton, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </GoBackButton>
        <Image source={logoImage} resizeMode="contain" />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
