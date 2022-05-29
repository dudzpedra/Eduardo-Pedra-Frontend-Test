import React, { Component } from 'react'
import { NotificationWrapper } from './styles/Wrapper'

class Notification extends Component {
  render() {
    return (
      <NotificationWrapper textColor={this.props.color}>{this.props.notification}</NotificationWrapper>
    )
  }
}

export default Notification