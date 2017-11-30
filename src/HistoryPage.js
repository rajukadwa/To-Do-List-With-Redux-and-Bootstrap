import React from 'react';
import Tab from "react-bootstrap/lib/Tab";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import NavItem from "react-bootstrap/lib/NavItem";
import Nav from "react-bootstrap/lib/Nav";
export default class History extends React.Component{
	render() {
    return(
		<div>
			<Tab.Container  defaultActiveKey="first">
			<Row className="clearfix">
			  <Col sm={12}>
				<Nav bsStyle="tabs">
				  <NavItem eventKey="first">
					2017
				  </NavItem>
				  <NavItem eventKey="second">
					2016
				  </NavItem>
				  <NavItem eventKey="third">
					2015
				  </NavItem>
				  <NavItem eventKey="fourth">
					2014
				  </NavItem>
				</Nav>
			  </Col>
			  <Col sm={12}>
			  
				<Tab.Content animation>
				  <Tab.Pane eventKey="first">
					<section className="panel">
						<h2 className="panel-heading">Content 1</h2>
						<p className="panel-body">
							Tab 1 content
						</p>
					</section>
				  </Tab.Pane>
				  <Tab.Pane eventKey="second">
					<section className="panel">
						<h2 className="panel-heading">Content 2</h2>
						<p className="panel-body">
							Tab 2 content
						</p>
					</section>
				  </Tab.Pane>
				  <Tab.Pane eventKey="third">
					<section className="panel">
						<h2 className="panel-heading">Content 3</h2>
						<p className="panel-body">
							Tab 3 content
						</p>
					</section>
				  </Tab.Pane>
				  <Tab.Pane eventKey="fourth">
					<section className="panel">
						<h2 className="panel-heading">Content 4</h2>
						<p className="panel-body">
							Tab 4 content
						</p>
					</section>
				  </Tab.Pane>
				</Tab.Content>
				
			  </Col>
			</Row>
		  </Tab.Container>
		</div>
    )
  }
}