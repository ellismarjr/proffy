import React, { useState } from 'react';
import { Image, Linking } from 'react-native';

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
import AsyncStorage from '@react-native-community/async-storage';

interface FavoritedProps {
  favorited: boolean;
}

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatspp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorites() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton
            onPress={handleToggleFavorites}
            favorited={isFavorited}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
            {/* <Image source={heartOutlineIcon} /> */}
          </FavoriteButton>
          <ContactButton onPress={handleLinkToWhatspp}>
            <Image source={whatsappIcon} />
            <ContactText>Entrar em contato</ContactText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
