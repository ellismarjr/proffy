import React from 'react';
import { Image } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactText,
} from './styles';

interface FavoritedProps {
  favorited: boolean;
}

const TeacherItem: React.FC = () => {
  const favorited: boolean = false;

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/ellismarjr.png' }} />
        <ProfileInfo>
          <Name>Júnior de Oliveira</Name>
          <Subject>Química</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>
        Entusiasta das melhores tecnologia de química avançada;
        {'\n'}
        {'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoa através de experiências.
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton favorited={favorited}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </FavoriteButton>
          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactText>Entrar em contato</ContactText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
