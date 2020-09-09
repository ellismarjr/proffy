import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, TeachersList } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus profffys favoritos" />
      <TeachersList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeachersList>
    </Container>
  );
};

export default Favorites;
