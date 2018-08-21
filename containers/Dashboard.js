import React, {Component} from 'react';
import Details from './Details'
import {withRouter, browserHistory} from 'react-router-dom'
import {
    approvals,
    call,
    dashboard,
    dispatch,
    invoice,
    jobs,
    membership,
    report,
    schedule,
} from './Images'

const navbar_array = [
    {'icon' : dashboard, 'title' : 'Dashboard'},
    {'icon' : call, 'title' : 'Calls'},
    {'icon' : jobs, 'title' : 'Jobs'},
    {'icon' : schedule, 'title' : 'Schedule'},
    {'icon' : dispatch, 'title' : 'Dispatch'},
    {'icon' : approvals, 'title' : 'Approvals'},
    {'icon' : invoice, 'title' : 'Invoices'},
    {'icon' : report, 'title' : 'Reports'},
    {'icon' : membership, 'title' : 'Memberships'},
]

const lessthan_arrow = "<"
const greaterthan_arrow = ">"

export const Navbar = (props) => {
    return(
        <div className = "row nav_background">
            <div className="navbar">
                <img className="logo_style" alt="Improve efficiency &amp; save costs" src="https://www.smartserv.io/wp-content/uploads/2018/03/SmartServ-App-Logo-2.png"/>
                    {
                        navbar_array.map((item) => {
                            return(
                                <div className="img_style" >
                                    <img className="icon_size" alt="Improve efficiency &amp; save costs" src={item.icon}/>
                                    <p className="text-white nav_title_style">{item.title}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={
            listItem:{
                'job': '100400',
                'invoice':'100400-1',
                'campaign': 'Repeat Customer',
                'customer': 'Travis Gordon',
                'location': '1262 East Hamilton Avenue, #D',
                'unit': 'Campbell, CA, 95008 USA',
                'type': 'PMAPP',
                'start': '5/09/18 10:00AM',
                'end': '5/09/18 12:00PM',
                'technician': 'Chris Stein, Reid J Schinski',
                'status': 'Dispatched',
                'total': '$0',
                'tags': ['Urgent', '$49 Service Fee', 'opportunity', 'PSP'],
            },
            testKey : 'hell',
            listArray: []
        }
        this.populateListArray = this.populateListArray.bind(this)
        this.getListView = this.getListView.bind(this)
        this.renderList = this.renderList.bind(this)
        this.renderSortingContainer = this.renderSortingContainer.bind(this)
        this.renderTags = this.renderTags.bind(this)
        this.renderFilter = this.renderFilter.bind(this)
    }

    componentWillMount(){
        this.populateListArray()
    }

    populateListArray(){
        let i = 0;
        let listArray = []
        while(i < 10){
            listArray.push(this.state.listItem)
            i++;
        }
        this.setState({
            listArray : listArray
        })
    }

    renderTags(){
        var tags = this.state.listItem.tags
        return (
            tags.map((item) => {
                let tag_style = 'badge badge-primary badge_style'
                if(item == 'Urgent'){
                    tag_style = 'badge badge-danger badge_style'
                } else if (item == '$49 Service Fee'){
                    tag_style = 'badge badge-warning badge_style'
                } else if (item == 'PSP'){
                    tag_style = 'badge badge-success badge_style'
                }
    
                return(
                    <span className={tag_style}>{item}</span>
                )
            })
        )
    }

    listHeader(){
        return(
            <div className="list_header_style">
                <div className="row">
                    <div className="col-lg-2">
                        <p class="text-left list_header_item">Job#</p>
                        <p class="text-left list_header_item">Invoice#</p>
                        <p class="text-left list_header_item">Campaign</p>
                    </div>
                    <div className="col-lg-3">
                        <p class="text-left list_header_item">Customer</p>
                        <p class="text-left list_header_item">Location</p>
                        <p class="text-left list_header_item">Unit</p>
                    </div>
                    <div className="col-lg-2">
                        <p class="text-left list_header_item">Type</p>
                        <p class="text-left list_header_item">Start</p>
                        <p class="text-left list_header_item">End</p>
                    </div>
                    <div className="col-lg-3">
                        <p class="text-left list_header_item">Technician(s)</p>
                        <p class="text-left list_header_item">Status</p>
                        <p class="text-left list_header_item">Total</p>
                    </div>
                    <div className="col-lg-2">
                        <p class="text-left list_header_item">Tags</p>
                    </div>
                </div>
            </div>
        )
    }

    gotoDetails(){
        console.log('ACTION PERFORMMED')
        this.props.history.push('/details')
    }

    renderList(){
        let tags = this.state.listItem.tags
        
        return (
            this.state.listArray.map((item) => {
                return(
                    <a style={{cursor:'pointer'}} onClick={() => this.gotoDetails()}>
                        <li className="list-group-item margin_top list_background border_style">
                            <div className="row">
                                <div className="col-lg-2">
                                    <p class="text-left list_header_item">{ item.job }</p>
                                    <p class="text-left margin_bottom">{ item.invoice }</p>
                                    <p class="text-left margin_bottom">{ item.campaign }</p>
                                </div>
                                <div className="col-lg-3">
                                    <p class="text-left list_header_item">{ item.customer }</p>
                                    <p class="text-left margin_bottom">{ item.location }</p>
                                    <p class="text-left margin_bottom">{ item.unit }</p>
                                </div>
                                <div className="col-lg-2">
                                    <p class="text-left list_header_item">{ item.type }</p>
                                    <p class="text-left margin_bottom">{ item.start }</p>
                                    <p class="text-left margin_bottom">{ item.end }</p>
                                </div>
                                <div className="col-lg-3">
                                    <p class="text-left list_header_item">{ item.technician }</p>
                                    <p class="text-left margin_bottom">{ item.status }</p>
                                    <p class="text-left margin_bottom">{ item.total }</p>
                                </div>
                                <div className="col-lg-2 padding_style">
                                    {
                                        this.renderTags()
                                    }
                                </div>
                            </div>
                        </li>
                    </a>
                )
            })
        )
    }

    renderFilter(){
        let filterArray = [
            'Technicians',
            'Groups',
            'Job Status',
            'Invoice Status',
            'Payments',
            'Job Type',
            'Work Code',
            'Tags',
            'Is Under Service Agreement?',
            'Business Unit',
        ]
        return(
            filterArray.map((item) => {
                return(
                    <div className="filterItem_style">
                        <p className="filter_title_style">{item}</p>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                )
            })
        )
    }

    getListView(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9" >
                        {this.listHeader()}
                        <ul className="padding_left">
                            {this.renderList()}
                        </ul>
                    </div>
                    <div className="col-lg-3 filter_style border" >
                        <div className="container padding_style">
                            <p className="filter_header col-lg-8">FILTERS</p>
                        </div>
                        {this.renderFilter()}
                    </div>
                </div>
            </div>
        )
    }

    renderdashboardHeader(){
        return(
            <div className="row dashboardheader">
                <div className="col-lg-1">
                    <div className="date_title" >
                        Start Date : 
                    </div>
                    <div>
                        07/02/2018
                    </div>
                </div>
                <div className="col-lg-1">
                    <div className="date_title" >
                        End Date : 
                    </div>
                    <div>
                        10/30/2018
                    </div>
                </div>
                <div className="col-lg-7"/>
                <div className="col-lg-3">
                    <div className="row">
                        {/* <button className="btn btn-primary action_btn_style" type="submit">New Job</button> */}
                        <div className="custom_button">New Job</div>
                        <input placeholder="Search" className="input_text_style" type="text" name="name" />
                    </div>
                </div>
            </div>
        )
    }

    renderSortingContainer(){
        return(
            <div className="row header_background">
                <div className="col-lg-9">
                    Sort By: Date Created
                </div>
                <button type="button" class="btn btn-outline-secondary action_btn_style"> Export </button>
                <div className="page_num" >1 - 10 of 154</div>
                <button type="button" class="btn btn-outline-secondary action_btn_style">{lessthan_arrow}</button>
                <button type="button" class="btn btn-outline-secondary action_btn_style">{greaterthan_arrow}</button>
            </div>
        )
    }
    render () {
        return (
            <div className="container_background">
                <Navbar/>
                {this.renderdashboardHeader()}
                {this.renderSortingContainer()}
                {this.getListView()}
            </div>
            
        );
    }
}