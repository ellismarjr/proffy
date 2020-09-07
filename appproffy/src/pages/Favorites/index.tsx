import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

import { Container, TeachersList } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus profffys favoritos" />
      <TeachersList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeachersList>
    </Container>
  );
};

export default Favorites;
