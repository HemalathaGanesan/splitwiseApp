import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Appbar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import Flag from "material-ui/svg-icons/content/flag";
import DashBoard from "material-ui/svg-icons/action/dashboard";
import Listitems from "material-ui/svg-icons/action/view-list";
import Popover, { PopoverAnimationVertical } from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

class Dashboard extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick(event){
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose () {
    this.setState({
      open: false
    });
  };

  render() {
    const buttonStyle = {
        margin:'10px'
      };
    const rightButtons = (
      <div>
          <RaisedButton onClick={this.handleClick} label="Add bill">
      <Popover
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        // anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        // targetOrigin={{ horizontal: "left", vertical: "top" }}
        onRequestClose={this.handleRequestClose}
        // animation={PopoverAnimationVertical}
      >
        <Menu>
          <MenuItem primaryText="add bill" />
        </Menu>
      </Popover>
    </RaisedButton>
    <RaisedButton onClick={this.handleClick} label="Settle" style={buttonStyle} />
      </div>
    );

    return (
      <div className="container">
        <div className="header">
          <Appbar title="SplitXpenz" showMenuIconButton={false} />
        </div>
        <div className="dashboard">
          <div className="left-side">
            <List>
              <ListItem
                primaryText="Dashboard"
                leftIcon={<DashBoard />}
                href="/#"
              />
              <ListItem
                primaryText="Recent Activity"
                leftIcon={<Flag />}
                href="/#"
              />
              <ListItem
                primaryText="AllExpenses"
                leftIcon={<Listitems />}
                href="/#"
              />
            </List>
          </div>
          <div className="right-side">
            <Appbar
              title="Dashboard"
              showMenuIconButton={false}
              style={{ backgroundColor: "darkgray" }}
              iconElementRight={rightButtons}
            />
            <div className='balance'>
            <div className='block-1'>
            <span className='title'>total balance</span><br/>
            <span className='amount'>+$100.00</span>
            </div>
            <div className='block-2'>
            <span className='title'>you owe</span><br/>
            <span className='amount'>+$0.00</span>
            </div>
            <div className='block-3'>
            <span className='title'>you are owed</span><br/>
            <span className='amount'>+$100.00</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}






export default Dashboard;
