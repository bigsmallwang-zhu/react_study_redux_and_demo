import React from 'react';
import { connect } from 'react-redux'

import Counter from '../components/counter'
import { increment, decrement, incrementAnsyc } from '../redux/actions'

 
export default connect(
  state => ({ count: state }),
  { increment, decrement, incrementAnsyc }
)(Counter);