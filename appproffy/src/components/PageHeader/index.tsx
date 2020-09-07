import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import { Container, TopBar, GoBackButton, Title, Header } from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
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
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  );
};

export default PageHeader;
