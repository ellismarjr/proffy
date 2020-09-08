import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
import api from '../../services/api';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  async function loadTotalConnections() {
    const response = await api.get('connections');
    const { total } = response.data;
    setTotalConnections(total);
  }

  useEffect(() => {
    loadTotalConnections();
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <LandingImg source={landing} resizeMode="contain" />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonStudy onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonStudy>
        <ButtonGiveClasses onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonGiveClasses>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
