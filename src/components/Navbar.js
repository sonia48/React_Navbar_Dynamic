import { Component } from "react";
import { MenuData } from "./MenuData";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handOn = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navItem">
          <h1 className="logo">
            <i className="fa-brands fa-react"></i>React
          </h1>
          <div className="barCross" onClick={this.handOn}>
            <i
              className={
                this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </div>
          <ul
            className={this.state.clicked ? "itemInline active" : "itemInline"}
          >
            {MenuData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
export default Navbar;
