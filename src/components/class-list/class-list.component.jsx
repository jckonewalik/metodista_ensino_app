import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingClasses } from '../../redux/class/class.selectors';
import ClassOverview from '../class-overview/class-overview.component';
import { ContainerStyled } from './class-list.styles';
import { WithSpinner } from '../with-spinner/with-spinner.component';

const ClassList = ({ classes }) => (
  <ContainerStyled>
    <FlatList
      data={classes}
      renderItem={({ item }) => <ClassOverview classItem={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  </ContainerStyled>
);

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsLoadingClasses(state),
});
const ClassListContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(ClassList);

export default ClassListContainer;
