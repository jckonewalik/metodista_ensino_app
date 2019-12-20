import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFechingClasses, selectMyClasses } from '../../redux/class/class.selectors';
import { WithSpinner } from '../with-spinner/with-spinner.component';
import ClassList from './class-list.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsFechingClasses(state),
  classes: (state) => selectMyClasses(state),
});
const ClassListContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(ClassList);

export default ClassListContainer;
