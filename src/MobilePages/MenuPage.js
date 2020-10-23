import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import {Row, Col} from 'antd'
import { withRouter } from "react-router-dom";
import { compose } from "redux";


const contentStyle = {
  lineHeight: '1200px',
  textAlign: 'center',
  background: 'purple' ,
  color:'#fff',
  fontSize:'4rem',
  borderRadius: '0 0 25px 25px'
};

export class MenuPage extends Component {
  BusRedirectHandler = () => {
    this.props.history.push({
      pathname: "./bus-page",
    });
  };
  render() {
  return( 
    <div className="aa-menupage-container">
      <div className="aa-menupage-carousel-container">
      <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>About Annur</h3>
          </div>
          <div>
            <h3 style={contentStyle}>About Manneswaran Temple</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Importance of Annur</h3>
          </div>
        </Carousel>
      </div>
      <div className="aa-menupage-bottom-container">
        <Row gutter={[16, 30]}>
        <Col>
        <div className="aa-menupage-menu-item" onClick={this.BusRedirectHandler}>
          <h2>Bus Stops & Bus Timings</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Public Offices</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Religious Places</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Shop Details</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Restaurants</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Schools</h2>
        </div>
        </Col>
        <Col>
        <div className="aa-menupage-menu-item">
          <h2>Theatres</h2>
        </div>
        </Col>
        </Row>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose (withRouter, connect(mapStateToProps, mapDispatchToProps))(MenuPage);
