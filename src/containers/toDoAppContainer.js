import { connect } from 'react-redux'
import ToDoApp from '../components/ToDoApp'

function mapStateToProps(state){
  return {
    toDoApp: state.toDoApp
  }
}

function mapDispatchToProps(dispatch){
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp)