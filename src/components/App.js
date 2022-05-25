import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUsersInList } from "../actions/actions";
import Card from "./Card";
import Popup from "./Popup";
import logo from "../logo.png";

// const urlLogo = new URL("../../public/logo.png", import.meta.url).pathname;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuDisplay: false,
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

  render() {
    // console.log("this.props= ", this.props);
    // const { users } = this.props;
    const { userList, show } = this.props.users;
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
            <input />
            <button id="btn">Search</button>
          </div>
        </header>
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
  users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
