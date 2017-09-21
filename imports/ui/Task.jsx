import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    )
  }
}

Task.PropTypes = {
  task: PropTypes.object.isRequired
}
