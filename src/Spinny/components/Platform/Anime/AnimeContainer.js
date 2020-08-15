import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getListData,getListDataMore} from "./actions";
import Anime from './Anime';

const mapStateToProps = (state, prevProps) => {
  return {
    listData: state.animeReducer.listData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
        getListData,
        getListDataMore
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Anime)
);
