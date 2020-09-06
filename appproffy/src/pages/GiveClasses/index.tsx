import React from 'react';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  Background,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <Container>
      <Background resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastar como professor na nossa
          plataforma web.
        </Description>
      </Background>

      <Button onPress={handleNavigateBack}>
        <ButtonText>Tudo bem </ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
