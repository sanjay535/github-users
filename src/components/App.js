import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSearchResult, addUsersInList, fetchSearchResult, showSpinner } from "../actions/actions";
import Card from "./Card";
import Popup from "./Popup";
import logo from "../logo.png";
import SearchUser from "./SearchUser";
import Spinner from "./Spinner";

// const urlLogo = new URL("../../public/logo.png", import.meta.url).pathname;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuDisplay: false,
      inputVal:'',
      showSearchResult:false
    };
  }
  componentDidMount() {
    this.props.dispatch(addUsersInList());
  }

  toggelMenu = () => {
    // console.log(e.target.parentElement);
    const { isMenuDisplay } = this.state;
    if (isMenuDisplay) {
      document.getElementById("menu").style.visibility = "hidden";
      this.setState({
        isMenuDisplay: false,
      });
    } else {
      document.getElementById("menu").style.visibility = "visible";
      this.setState({
        isMenuDisplay: true,
      });
    }
  };

  handleClick=(e)=>{
    const {inputVal}=this.state;
    if(inputVal){
      console.log('input not empty');
      this.props.dispatch(showSpinner())
      this.props.dispatch(fetchSearchResult(inputVal));
      this.setState({showSearchResult:true})
    }else{
      console.log('input empty');
    }
  }
  handleChange=(e)=>{
    this.setState({inputVal:e.target.value, showSearchResult:false});
    this.props.dispatch(addSearchResult({}));
  }

  render() {
    // console.log("this.props= ", this.props);
    // const { users } = this.props;
    const { userList, show, search_result, spinner} = this.props.users;
    const {items}=search_result;
    const {showSearchResult}=this.state;
    return (
      <div className="container">
        <header>
          <button
            id="menu-btn"
            className="menu-btn"
            onClick={() => this.toggelMenu()}
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div id="menu" className="search-container">
            <div className="search-input-button">
              <input spellCheck={false} onChange={this.handleChange}/>
              <button id="btn" onClick={this.handleClick}>Search</button>
            </div>
          </div>
        </header>
        <div className="search-result" style={{display:`${!showSearchResult?'none':''}`}}>
              <div className="search-user">
                {spinner?<Spinner/>:items?.map(user=><SearchUser key={user.id} username={user.login} avatar={user.avatar_url}/>)}
              </div>
        </div>
        <div className="card-list">
          {userList.map((user) => (
            <Card user={user} key={user.id} />
          ))}
        </div>
        {show && <Popup />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state in map=", state);
  return {
    users: state.users,
  };
}

App.propTypes = {
  users: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
