import React, { Component } from "react";
import PrintCv from "./printCv";
import clear from "./functions/clear";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      email: "",
      description: "",
      position: "",
      company: "",
      workCity: "",
      workStart: "",
      workEnd: "",
      school: "",
      degree: "",
      edStart: "",
      edEnd: "",
      cv: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => {
      const data = {
        ...prevState,
        [name]: value,
      };
      return data;
    });
  }

  consoleLogBanana = () => {
    console.log("banana");
  };

  consoleLoGBlackBerry = () => {
    console.log("blackBerry");
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      cv: this.state.cv.concat(
        this.state.name,
        this.state.address,
        this.state.phone,
        this.state.email,
        this.state.description,
        this.state.position,
        this.state.company,
        this.state.workCity,
        this.state.workStart,
        this.state.workEnd,
        this.state.school,
        this.state.degree,
        this.state.edStart,
        this.state.edEnd
      ),
    });
  };

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.onSubmit}>
          <div className="formSection">
            <h2> Personal Info</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="address"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <textarea
              name="description"
              placeholder="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div className="formSection">
            <h2>Experience</h2>
            <input
              type="text"
              placeholder="Position"
              name="position"
              onChange={this.handleChange}
              value={this.state.position}
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              onChange={this.handleChange}
              value={this.state.company}
            />
            <input
              type="text"
              placeholder="City"
              name="workCity"
              onChange={this.handleChange}
              value={this.state.workCity}
            />
            <input
              type="text"
              name="workStart"
              placeholder="from"
              onChange={this.handleChange}
              value={this.state.workStart}
            />
            <input
              type="text"
              name="workEnd"
              placeholder="to"
              onChange={this.handleChange}
              value={this.state.workEnd}
            />
          </div>
          <div className="formSection">
            <h2>Education</h2>

            <input
              type="text"
              placeholder="School"
              name="school"
              onChange={this.handleChange}
              value={this.state.school}
            />
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              onChange={this.handleChange}
              value={this.state.degree}
            />
            <input
              type="date"
              name="edStart"
              placeholder="education start date"
              onChange={this.handleChange}
              value={this.state.edStart}
            />
            <input
              type="date"
              name="edEnd"
              placeholder="education end date"
              onChange={this.handleChange}
              value={this.state.edEnd}
            />
          </div>
          <button className="submitButton" type="submit" onClick={clear}>
            Submit
          </button>
        </form>
        <PrintCv
          cv={this.state.cv}
          banana={this.consoleLogBanana}
          blackBerry={this.consoleLoGBlackBerry}
        />
      </div>
    );
  }
}

export default Form;
