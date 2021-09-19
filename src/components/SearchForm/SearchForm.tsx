import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Field, Form, FormProps } from 'react-final-form';
import { TitleBlock } from '../../ui/TitleBlock';
import { SearchBar } from '../../components/SearchBar';
import { SlidersIcon } from '../../ui/icons/SlidersIcon';
import { Container } from '../../ui/Container';
import { AppText } from '../../ui/AppText';
import { MultiSelect } from '../MultiSelect';
import { SearchableMultiSelect } from '../SearchableMultiSelect';
import { InputRange } from '../InputRange';
import { TabRadioGroupe } from '../../ui/TabRadioGroupe';
import { Button } from '../../ui/Button';
import { stringify } from 'query-string';
import { useAppDispatch } from '../../store/hooks';
import { actions } from '../../store/ducks';

const SearchForm: FC = () => {
  const [isFiltersShow, setFiltersState] = useState(false);
  const dispatch = useAppDispatch();
  const toggleFilters = () => {
    setFiltersState(!isFiltersShow);
  };
  const handleSubmitForm = (values: FormProps) => {
    const params = stringify({...values, page: 1, limit: 12});
    history.replaceState(location.search,' ', '?'+params);
    dispatch(actions.company.getCompaniesRequest(params));
  };
  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({ handleSubmit, values }) => {
        return (
          <>
            <TitleBlock
              title="Search"
              render={() => {
                return (
                  <SearchBarWrapper>
                    <Field
                      name="q"
                      render={({ input }) => (
                        <SearchBar
                          {...input}
                          onSearch={handleSubmit}
                          render={() => <StyledSlidersIcon onClick={toggleFilters} />}
                        />
                      )}
                    />
                  </SearchBarWrapper>
                );
              }}
            />
            {isFiltersShow && (
              <Container variant={2}>
                <Wrapper>
                  <Title type="Headline">Filters</Title>
                  <SubTitle type="BodySelect">Company</SubTitle>
                  <Grid>
                    <SearchableMultiSelect label="Industry" />
                    <SearchableMultiSelect label="Geographic Location" />
                    <MultiSelect value={['first', 'second', 'last']} name="scope" label="Scope" />
                  </Grid>
                  <Row>
                    <Field
                      name="revenue"
                      type="range"
                      min={0}
                      max={50}
                      render={({ ...outerProps }) => (
                        <InputRange value={values.revenue || [0, 50]} {...outerProps} label="Revenue" />
                      )}
                    />
                  </Row>
                  <SubTitle type="BodySelect">Customer Demographics</SubTitle>
                  <Grid>
                    <TabRadioGroupe name="gender" label="Gender" items={['Male', 'Female', 'Both']} />
                    <TabRadioGroupe name="relations" label="Relations" items={['Married', 'Single']} />
                  </Grid>
                  <Row>
                    <Field
                      name="age"
                      type="range"
                      min={0}
                      max={50}
                      render={({ ...outerProps }) => (
                        <InputRange label="Age" value={values.age || [0, 50]} {...outerProps} />
                      )}
                    />
                  </Row>
                  <ButtonWrapper>
                    <SearchButton onClick={handleSubmit}>Search</SearchButton>
                  </ButtonWrapper>
                </Wrapper>
              </Container>
            )}
          </>
        );
      }}
    />
  );
};

const SearchBarWrapper = styled.div`
  margin-left: 82px;
  width: 100%;
  margin-right: 173px;
  min-width: 200px;
  @media (max-width: 768px) {
    margin-left: 32px;
    margin-right: 0;
  }
  @media (max-width: 375px) {
    margin: 8px 0 0 0;
  }
`;

const StyledSlidersIcon = styled(SlidersIcon)`
  margin-right: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 32px 40px;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 60px;
`;

const Title = styled(AppText)`
  margin-bottom: 18px;
`;

const SubTitle = styled(AppText)`
  margin-bottom: 16px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 23px;
  margin-bottom: 24px;
`;

const Row = styled.div`
  width: 48.2%;
  margin-bottom: 31px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: 48.2%;
  margin-top: 40px;
`;

const SearchButton = styled(Button)`
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik-Medium;
`;

export default SearchForm;
