import React, { FC, MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { TitleBlock } from '../../ui/TitleBlock';
import { SearchBar } from '../../components/SearchBar';
import { SlidersIcon } from '../../ui/icons/SlidersIcon';
import { Container } from '../../ui/Container';
import { AppText } from '../../ui/AppText';
import { MultiSelect } from './../MultiSelect';
import { SearchableMultiSelect } from '../SearchableMultiSelect';
import { InputRange } from '../InputRange';
import { TabRadioGroupe } from '../../ui/TabRadioGroupe';
import { Button } from '../../ui/Button';
import { useAppDispatch } from '../../store/hooks';
import { actions } from '../../store/ducks';
import { getQueryParams } from '../../utils/queryParams';
import { ethnicity, income, industry, location } from './data';
import { getInitialValueToForm, getFormatValuesToApi, ISearchFormFields } from './utils';

interface SearchFormProp {
  forwardRef: MutableRefObject<HTMLDivElement>;
}

const SearchForm: FC<SearchFormProp> = ({ forwardRef }) => {
  const [isFiltersShow, setFiltersState] = useState(false);
  const initialState = getInitialValueToForm(getQueryParams());
  const dispatch = useAppDispatch();

  const toggleFilters = () => {
    setFiltersState(!isFiltersShow);
  };

  const handleSubmitForm = (values: ISearchFormFields) => {
    const goodData = getFormatValuesToApi(values);
    dispatch(actions.company.getCompaniesRequest({ ...goodData, page: 1, limit: 12 })).finally(() => {
      forwardRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      initialValuesEqual={() => true}
      initialValues={initialState}
      render={({ handleSubmit }) => {
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
                  <FakeTab>Advanced</FakeTab>
                  <SubTitle type="BodySelect">Company</SubTitle>
                  <Grid>
                    <SearchableMultiSelect label="Industry" options={industry} />
                    <SearchableMultiSelect label="Geographic Location" options={location} />
                  </Grid>
                  <Row>
                    <Field name="revenue" min={0} max={100000000} values={[1, 100000000]} component={InputRange} />
                  </Row>
                  <SubTitle className="mobile-hide" type="BodySelect">
                    Customer Demographics
                  </SubTitle>
                  <Grid>
                    <TabRadioGroupe name="gender" label="Gender" value={['Male', 'Female', 'Both']} />
                    <TabRadioGroupe name="relations" label="Relations" value={['Married', 'Single']} />
                    <Field
                      name="income"
                      label="Household Income"
                      value={income}
                      options={income}
                      component={MultiSelect}
                    />
                    <Field name="ethnicity" label="Ethnicity" options={ethnicity} component={MultiSelect} />
                  </Grid>
                  <ButtonWrapper>
                    <CancelButton variant="secondary" onClick={toggleFilters}>
                      Cancel
                    </CancelButton>
                    <SearchButton variant="primary" onClick={handleSubmit}>
                      Search
                    </SearchButton>
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
  @media (max-width: 768px) {
    padding: 32px 26px;
    margin-bottom: 40px;
  }
  @media (max-width: 375px) {
    padding: 24px 15px 24px 17px;
    margin-bottom: 20px;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 18px;
  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const SubTitle = styled(AppText)`
  margin-bottom: 16px;
  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 18px;
    &.mobile-hide {
      display: none;
    }
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 23px;
  margin-bottom: 24px;
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-gap: 18px;
  }
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
  display: flex;
  @media (max-width: 375px) {
    width: 100%;
    margin-top: 28px;
  }
`;

const SearchButton = styled(Button)`
  width: 146px;
`;

const CancelButton = styled(Button)`
  width: 146px;
  height: 46px;
  margin-right: 8px;
`;

const FakeTab = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.secondaryBlue};
  font-size: 12px;
  line-height: 18px;
  @media (max-width: 768px) {
    margin-bottom: 26px;
  }
  @media (max-width: 375px) {
    margin-bottom: 18px;
  }
`;

export default SearchForm;
