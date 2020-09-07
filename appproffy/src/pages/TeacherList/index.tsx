import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

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
import { Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToogleFiltersVisible() {
    setIsFiltersVisible((prevState) => !prevState);
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
            <Input placeholder="Qual a matéria" />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?"></Input>
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual horário?"></Input>
              </InputBlock>
            </InputGroup>
            <SubmitButton>
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

export default TeacherList;
