import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class TabContent extends Component {
  render(){
    return (
      <div id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)
