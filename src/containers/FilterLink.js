import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = state => {
  return {
    currentSelection: state.visibilityFilter
  };
};

const mapDispatchToPros = dispatch => {
  return {
    onClick: children => {
      dispatch(setVisibilityFilter(children));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToPros)(Link);

export default FilterLink;
