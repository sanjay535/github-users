import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUsersInList } from "../actions/actions";
import Card from "./Card";
import Popup from "./Popup";
import logo from "../logo.png";

// const urlLogo = new URL("../../public/logo.png", import.meta.url).pathname;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addUsersInList());
  }

  render() {
    // console.log("this.props= ", this.props);
    // const { users } = this.props;
    const { userList, show } = this.props.users;
    return (
      <div className="container">
        <header>
          <img src={logo} alt="logo" />
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
