import React from 'react';
import { Text, Image } from 'react-native';

import {
  Container,
  LandingImg,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonStudy,
  ButtonText,
  ButtonGiveClasses,
  TotalConnections,
} from './styles';

import landing from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  return (
    <Container>
      <LandingImg source={landing} resizeMode="contain" />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonStudy>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonStudy>
        <ButtonGiveClasses>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonGiveClasses>
      </ButtonsContainer>

      <TotalConnections>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;