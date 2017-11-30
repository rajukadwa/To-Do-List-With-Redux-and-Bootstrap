import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from "react-bootstrap/lib/Table";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import MenuItem from "react-bootstrap/lib/MenuItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.js';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.js';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const options = [
			{ label: 'Select Group', value: '' },
			{ label: 'A', value: 'A' },
			{ label: 'B', value: 'B' },
			{ label: 'C', value: 'C' },
		];
const childoptions = [
			{ parentvalue: 'A', label: 'A1', value: 'A1' },
			{ parentvalue: 'A', label: 'A2', value: 'A2' },
			{ parentvalue: 'A', label: 'A3', value: 'A3' },
			{ parentvalue: 'A', label: 'A4', value: 'A4' },
			{ parentvalue: 'B', label: 'B1', value: 'B1' },
			{ parentvalue: 'B', label: 'B2', value: 'B2' },
			{ parentvalue: 'B', label: 'B3', value: 'B3' },
			{ parentvalue: 'B', label: 'B4', value: 'B4' },
			{ parentvalue: 'C', label: 'C1', value: 'C1' },
			{ parentvalue: 'C', label: 'C2', value: 'C2' },
			{ parentvalue: 'C', label: 'C3', value: 'C3' },
			{ parentvalue: 'C', label: 'C4', value: 'C4' },
		];
const subchildoptions = [
			{ parentvalue: 'A1', label: 'A1A', value: 'A1A' },
			{ parentvalue: 'A1', label: 'A1B', value: 'A1B' },
			{ parentvalue: 'A2', label: 'A2A', value: 'A2A' },
			{ parentvalue: 'A2', label: 'A2B', value: 'A2B' },
			{ parentvalue: 'A3', label: 'A3A', value: 'A3A' },
			{ parentvalue: 'A3', label: 'A3B', value: 'A3B' },
			{ parentvalue: 'A4', label: 'A4A', value: 'A4A' },
			{ parentvalue: 'A4', label: 'A4B', value: 'A4B' },
			{ parentvalue: 'B1', label: 'B1A', value: 'B1A' },
			{ parentvalue: 'B1', label: 'B1B', value: 'B1B' },
			{ parentvalue: 'B2', label: 'B2A', value: 'B2A' },
			{ parentvalue: 'B2', label: 'B2B', value: 'B2B' },
			{ parentvalue: 'B3', label: 'B3A', value: 'B3A' },
			{ parentvalue: 'B3', label: 'B3B', value: 'B3B' },
			{ parentvalue: 'B4', label: 'B4A', value: 'B4A' },
			{ parentvalue: 'B4', label: 'B4B', value: 'B4B' },
		];
const subchildsuboptions = [
			{ parentvalue: 'A1A', key1: 'A1A Key1 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ', key2: 'A1A Key2 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ',key3: 'A1A Key3 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ' },
			{ parentvalue: 'A1A', key1: 'A1B Key1 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ', key2: 'A1B Key2 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ',key3: 'A1B Key3 A custom select / multiselect for Bootstrap using button dropdown, designed to behave like regular Bootstrap selects. Tested with React 0.12 and Bootstrap 3. Based ' },
			{ parentvalue: 'A2A', key1: 'A2A Key1', key2: 'A2A Key2',key3: 'A2A Key3' },
			{ parentvalue: 'A2B', key1: 'A2B Key1', key2: 'A2B Key2',key3: 'A2B Key3' },
			{ parentvalue: 'A3A', key1: 'A3A Key1', key2: 'A3A Key2',key3: 'A3A Key3' },
			{ parentvalue: 'A3B', key1: 'A3B', key2: 'A3B',key3: 'A3B' },
			{ parentvalue: 'A4A', key1: 'A4A', key2: 'A4A',key3: 'A4A' },
			{ parentvalue: 'A4B', key1: 'A4B', key2: 'A4B',key3: 'A4B' },
			{ parentvalue: 'B1A', key1: 'B1A', key2: 'B1A',key3: 'B1A' },
			{ parentvalue: 'B1B', key1: 'B1B', key2: 'B1B',key3: 'B1B' },
			{ parentvalue: 'B2A', key1: 'B2A', key2: 'B2A',key3: 'B2A' },
			{ parentvalue: 'B2B', key1: 'B2B', key2: 'B2B',key3: 'B2B' },
			{ parentvalue: 'B3A', key1: 'B3A', key2: 'B3A',key3: 'B3A' },
			{ parentvalue: 'B3B', key1: 'B3B', key2: 'B3B',key3: 'B3B' },
			{ parentvalue: 'B4A', key1: 'B4A', key2: 'B4A',key3: 'B4A' },
			{ parentvalue: 'B4B', key1: 'B4B', key2: 'B4B',key3: 'B4B' },
		];

const selectoptions = options.map((option, index) => {
				return (<option key={index} value={option.value}>{option.label}</option>)
			});
const SubChildData = '';
const checkboxlist = [];

class StartUP extends React.Component {
	constructor(props) {
    super(props);
	this.state = {data: '', selectedchild:'',selectedsubchild:'',parentchecked: false, checkeddata:[],}
    this.handleChange = this.handleChange.bind(this);
	this.childClick = this.childClick.bind(this);
	this.subchildClick = this.subchildClick.bind(this);
	this.maincheckboxChange = this.maincheckboxChange.bind(this);
	this.checkboxChange = this.checkboxChange.bind(this);
  }
 
subchildClick(event){
	subchildsuboptions.map((option, index) => {
		if(option.parentvalue === event.target.id )
		{
			checkboxlist["subchildsubdatacheck"+index]= false;
		}
		return('');
	});
	this.setState({ parentchecked: false});
	this.setState({ checkeddata: checkboxlist});
	this.setState({selectedsubchild: event.target.id});
	 
  }
  childClick(event){
	 this.setState({selectedchild: event.target.id});
	 return (<SubChildData parentvalue={event.target.id} />);
  }
  
  handleChange(event) {
	  this.setState({data: event.target.value});
	}
maincheckboxChange(event) {
	if(!this.state.parentchecked)
	{
		subchildsuboptions.map((option, index) => {
		if(option.parentvalue === this.state.selectedsubchild )
		{
			checkboxlist["subchildsubdatacheck"+index]= true;
		}
		return('');
	});
	}
	else
	{
		subchildsuboptions.map((option, index) => {
		if(option.parentvalue === this.state.selectedsubchild )
		{
			checkboxlist["subchildsubdatacheck"+index]= false;
		}
		return('');
	});
	}
	this.setState({ checkeddata: checkboxlist});
	this.setState({ parentchecked: !this.state.parentchecked});
}
checkboxChange(event) {
	if(checkboxlist[event.target.name] === true)
	{
		checkboxlist[event.target.name]=false;
	}
	else
	{
		checkboxlist[event.target.name]=true;
	}
	this.setState({ parentchecked: false});
	this.setState({ checkeddata: checkboxlist});
}
 render() {
	const ChildData = ({parentvalue}) => {
		const todoNode = childoptions.map((option, index) => {
				if(option.parentvalue === parentvalue )
				{
					if(this.state.selectedchild === option.value)
						{
							return (
								<li id={option.value} key={option.value} >{option.label}
									<SubChildData parentvalue={option.value} />
								</li>
							);
						}
						else
						{
							return (
								<li id={option.value} key={option.value} onClick={this.childClick}>{option.label}</li>
							);
						}
				}
				return('');
		});
		return (<ul>{todoNode}</ul>);
	}
	
	const SubChildData = ({parentvalue}) => {
		const subtodoNode = subchildoptions.map((option, index) => {
				if(option.parentvalue === parentvalue )
				{
					return (
						<li id={option.value} key={option.value} onClick={this.subchildClick} >{option.label}</li>
					);
				}
				return('');
		});
		return (<ul>{subtodoNode}</ul>);
	}
	
	const SubChildSubData = ({parentvalue}) => {
		
		const subtodoNode = subchildsuboptions.map((option, index) => {
				if(option.parentvalue === parentvalue )
				{
					return (
				<tr key={"subchildsubdata"+index}><td ><input name={"subchildsubdatacheck"+index} key={"subchildsubdatacheck"+index} type="checkbox" onChange={this.checkboxChange} checked={ this.state.checkeddata["subchildsubdatacheck"+index] }/></td><td>{option.key1}</td><td>{option.key2}</td><td>{option.key3}</td></tr>
					);
				}
		});
		return (<Table striped bordered condensed hover><thead><tr><th><input type="checkbox" checked={ this.state.parentchecked } onChange={this.maincheckboxChange} /></th><th>Key 1</th><th>Key II</th><th>Key III</th></tr></thead><tbody>{subtodoNode}</tbody></Table>);
	}
	
    return (
		<div className="container">
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
				  <Navbar.Brand>
					<a href="#">React-Bootstrap</a>
				  </Navbar.Brand>
				  <Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				  <Nav>
					<NavItem eventKey={1} href="#">Link</NavItem>
					<NavItem eventKey={2} href="#">Link</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					  <MenuItem eventKey={3.1}>Action</MenuItem>
					  <MenuItem eventKey={3.2}>Another action</MenuItem>
					  <MenuItem eventKey={3.3}>Something else here</MenuItem>
					  <MenuItem divider />
					  <MenuItem eventKey={3.3}>Separated link</MenuItem>
					</NavDropdown>
				  </Nav>
				  <Nav pullRight>
					<NavItem eventKey={1} href="#">Link Right</NavItem>
					<NavItem eventKey={2} href="#">Link Right</NavItem>
				  </Nav>
				</Navbar.Collapse>
			 </Navbar>
			<Table>
				<tbody>
					<tr>
						<td className="col-md-2">
							<select name="selectbox" id="selectbox" onChange={this.handleChange}>
								{selectoptions}
							</select>
							<ChildData parentvalue={this.state.data} />				
						</td>
						<td className="col-md-10">
							<SubChildSubData parentvalue={this.state.selectedsubchild} />
							
							
							<BootstrapTable data={products} striped={true} hover={true}>
							  <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
							  <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
							  <TableHeaderColumn dataField="price" editor="true" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
							</BootstrapTable>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
    );
  }
}
// ========================================
ReactDOM.render(
  <StartUP />,
  document.getElementById('root')
);

var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

/*ReactDOM.render(
  <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("root1")
);*/