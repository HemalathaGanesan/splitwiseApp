import React from "react";
import Dashboard from "./dashboard";

export default class AddBillPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    console.log("show");
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }

  render() {
    return (
      <div>
        <CommonPopup show={this.show} />
        <div className={this.state.popUpBill}>
          <div id="popupContact">
            <div className="text-field">
            <div className="form">
              <i className="fa fa-close" onClick={this.hide} />
              <h2>Add a bill</h2>
              <hr />
              <input
                  id="description"
                  placeholder="Enter description"
                  type="text"
                />
                <input id="amount" placeholder="Enter amount" type="number"/>
              
              <button onClick={this.hide}>Close</button>
              <button type="button" className="savebtn">
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CommonPopup extends React.Component {
  render() {
    return (
      <div className="row1">
        <button onClick={this.props.show}>Add a bill</button>

        <button type="button" className="savebtn">
          Settle
        </button>
      </div>
    );
  }
}
