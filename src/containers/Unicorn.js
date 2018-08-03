import React from 'react'
import { connect } from 'react-redux'
import unicornImg from '../assets/unicorn.png'
import './Unicorn.css'

const Unicorn = ({ shouldShow }) =>
  shouldShow && <img className="unicorn" src={unicornImg} alt="congrats!" />

const mapStateToProps = state => ({
  shouldShow: state.unicorn.showing,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Unicorn)
