import React, { Component } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import NavItem from "./NavItem";
import logo from "../../Assets/ropstam.png";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  state = { active: false };

  async componentDidMount() {
    const expanded = localStorage.getItem("expanded");
    if (expanded) {
      expanded === "true"
        ? this.setState({ active: true })
        : this.setState({ active: false });
    }
  }

  logout = () => {
    const logout = window.confirm("Are you sure you want to logout?");
    if (logout) {
      sessionStorage.removeItem("ropstam");
      this.props.navigate("/login");
    }
  };

  handleActive = () => {
    this.setState({
      active: !this.state.active,
    });
    localStorage.setItem("expanded", !this.state.active);
  };
  
  render() {
    return (
      <div className={this.state.active ? "wrapper active" : "wrapper"}>
        <div className="main_body">
          <div className="sidebar_menu">
            <div className="inner__sidebar_menu">
              <ul>
                <div className="main_logo">
                  <img src={logo} alt="" />
                </div>
                <NavItem path="/dashboard" Icon={FaHome} label="Dashboard" />

                <NavItem path="/users" Icon={FaUser} label="Users" />

                <li className="pointer">
                  <div onClick={this.logout}>
                    <span className="icon">
                      <FiLogOut />
                    </span>
                    <span className="list">Logout</span>
                  </div>
                </li>
              </ul>

              <div className="hamburger" onClick={this.handleActive}>
                <div className="inner_hamburger">
                  <span className="arrow">
                    <i className="fas fa-long-arrow-alt-left"></i>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Sidebar {...props} navigate={navigate} />;
}

export default WithNavigate;
