import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div style={{ marginTop: "20vh" }} className="row">
          <div className="col s12 justify-align">
          <span
              style={{
                padding: ".5rem .8rem",
                fontSize: "1.2rem",
                borderRadius: "3px",
                color: "white",
                letterSpacing: ".1rem",
                position: "absolute",
                top: "12rem",
                left: "1rem",
                zIndex: "99",
                cursor : "pointer"
              }}
              className="waves-effect waves-light black"
            >{user.name.split(" ")[0]}
            </span>
            <button
              style={{
                width: "7rem",
                borderRadius: "3px",
                letterSpacing: "1px",
                boxSizing: "border-box",
                position: "absolute",
                top: "12rem",
                right: "1rem",
                zIndex: "99"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <br/>
            <br/>
            <hr/>
            <h4>
              <b>Welcome,</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis
              aute irure dolor in reprehenderit in voluptate velit essecillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
