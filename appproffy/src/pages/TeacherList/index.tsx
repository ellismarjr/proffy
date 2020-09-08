import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorate from '@react-native-community/async-storage';
import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {
  TeachersList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setSWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorate.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToogleFiltersVisible() {
    setIsFiltersVisible((prevState) => !prevState);
  }

  async function handleFiltresSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <Container>
      <PageHeader
        title="Profffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria"
            />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={week_day}
                  onChangeText={(text) => setSWeekDay(text)}
                  placeholder="Qual o dia?"
                ></Input>
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                ></Input>
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={handleFiltresSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>
      <TeachersList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeachersList>
    </Container>
  );
};

export default TeacherList;
