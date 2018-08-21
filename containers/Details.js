import React, {Component} from 'react';
import {Navbar} from './Dashboard'

const user_Array = [{
    'user_name' : 'Chris Strein',
    'startDate': '5/19/18, 8 AM',
    'endDate': '5/19/18, 10 AM'
},{
    'user_name' : 'Reid J Strinski',
    'startDate': '5/21/18, 8 AM',
    'endDate': '5/21/18, 10 AM'
}]

const timeline_obj = {
    'message': 'Reid, marked the job as Complete',
    'icon': '',
    'time': '4 hours ago'
};

export default class Details extends Component {

    constructor(props){
        super(props);
        this.state={
            header_title: this.props.header,
            timeline_Array : [],
            tags: ['$49 Service Fee', 'Opportunity', 'PSP', 'Urgent'],            
        }

        this.populateTimeLine = this.populateTimeLine.bind(this)
        this.renderTimelineList = this.renderTimelineList.bind(this)
    }

    componentDidMount() {
        this.populateTimeLine()
        window.scrollTo(0, 0)
    }
      
    populateTimeLine(){
        let i = 0;
        let timeline_Array = []
        while(i < 10){
            console.log('PUSHED')
            timeline_Array.push(timeline_obj)
            i++;
        }

        this.setState({
            timeline_Array:timeline_Array
        })
    }

    renderTags(){
        var tags = this.state.tags
        return (
            tags.map((item) => {
                let tag_style = 'badge badge-primary badge_style_details'
                if(item == 'Urgent'){
                    tag_style = 'badge badge-danger badge_style_details'
                } else if (item == '$49 Service Fee'){
                    tag_style = 'badge badge-warning badge_style_details'
                } else if (item == 'PSP'){
                    tag_style = 'badge badge-success badge_style_details'
                }
    
                return(
                    <span className={tag_style}>{item}</span>
                )
            })
        )
    }

    renderOptions(){
        return(
            <div className="row option_container_style">
                <div className="row col-lg-8" >
                    <div className="option_style">
                        Go Back
                    </div>
                    <div className="option_style">
                        Create Invoice
                    </div>
                    <div className="option_style">
                        Cancel Job
                    </div>
                    <div className="option_style">
                        Purchase Order
                    </div>
                    <div className="option_style">
                        Delete
                    </div>
                </div>

                <div className="row col-lg-4">
                    
                </div>
            </div>
        )
    }

    getHeader(){
        return(
            <div className="container-fluid header_container_style">
                <div className="row">
                    <div className="col-lg-4 padding_left">
                        <div className="title_style" >Job #100400: PMAPP</div>
                    </div>
                    <div className="padding_left" >
                        {this.renderTags()}
                    </div>
                </div>
                {this.renderOptions()}
            </div>
        )
    }

    renderDetailsHeader(){
        return(
            <div className="row details_header_container">
                <div className="col-lg-3">
                    <div>
                        <p className="details_header">PMAPP</p>
                        <p className="sub_details_style">Job Type</p>
                    </div>
                    <div className="top_margin">
                        <p className="details_header">3131 - 10.1%</p>
                        <p className="sub_details_style">Tax Zone(%)</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <p className="details_header">Service: On-Demand</p>
                        <p className="sub_details_style">Work Code</p>
                    </div>
                    <div className="top_margin">
                        <p className="details_header">Complete(#100400-1)</p>
                        <p className="sub_details_style">Invoice</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <p className="details_header">Repeat Customer</p>
                        <p className="sub_details_style">Call Source</p>
                    </div>
                    <div className="top_margin">
                        <p className="details_header">GF : SL280DF090V60C</p>
                        <p className="sub_details_style">Select Equipment(s)</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <p className="details_header">MM Comfort Systems, Redmond</p>
                        <p className="sub_details_style">Business Unit</p>
                    </div>
                </div>
            </div>
        )
    }

    renderUserDetails(){
        return(
            <div className="container details_header_container user_details_container">
                <div className="row container">
                    <div className="col-lg-4">
                        <p className="userdetailstitle">Service Location:</p>
                        <p className="userdetailssubtitle">Travis Gordon</p>
                        <div>1262 East Hamilton Avenue #D Campbell,CA 95008 USA</div>
                    </div>
                    <div className="col-lg-5">
                        <p className="userdetailstitle">Bill To:</p>
                        <p className="userdetailssubtitle">Travis Gordon</p>
                        <div>1262 East Hamilton Avenue #D Campbell,CA 95008 USA</div>
                    </div>
                    <div className="col-lg-3">
                        <p className="userdetailssubtitle">travisg@taylorheatandair.com</p>
                        <p className="userdetailssubtitle">(408) 559-5990</p>
                        <p className="userdetailssubtitle">(408) 398-2032</p>
                    </div>
                </div>
                <form className="user_input_style">
                    <div class="form-group">
                        <textarea placeholder="Job Description : " class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        )
    }

    renderSeparator(){
        return(
            <div className="separator_style" ></div>
        )
    }

    renderOtherDetails(){
        return(
            <div className="container other_details_container">
                <div>

                </div>
                <div>
                    <div className="row">
                        <div className="container">
                            <div className="other_details" >Chris Strein</div>
                            <div className="date_style" >09/04/2018, 8AM</div>
                        </div>
                    </div>
                    <div>Before work images have been attached onto the job ticket. I think we will have to make 2 new visits for the job and mark the time on the active invoice.Also Call Cathy to set a follow up.</div>
                </div>
                {this.renderSeparator()}

                <div>
                    <div className="row">
                        <div className="container">
                            <div className="other_details" >Chris Strein</div>
                            <div className="date_style" >09/04/2018, 8AM</div>
                        </div>
                    </div>
                    <div>Before work images have been attached onto the job ticket. I think we will have to make 2 new visits for the job and mark the time on the active invoice.Also Call Cathy to set a follow up.</div>
                </div>
                {this.renderSeparator()}

                <div>
                    <div className="row">
                        <div className="container">
                            <div className="other_details" >Chris Strein</div>
                            <div className="date_style" >09/04/2018, 8AM</div>
                        </div>
                    </div>
                    <div>Before work images have been attached onto the job ticket. I think we will have to make 2 new visits for the job and mark the time on the active invoice.Also Call Cathy to set a follow up.</div>
                </div>
                {this.renderSeparator()}
            </div>
        )
    }

    renderTimelineList(){
        return(
            <div>
                <div className="timeline_title">TimeLine</div>
                {
                    this.state.timeline_Array.map((item) => {
                        return(
                            <div className="timeline_array_container">
                                <div className="timeline_array_title">{item.message}</div>
                                <div className="timeline_array_subtitle">{item.time}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderTimeline(){
        return(
            <div className="timeline_container">
                <div className="container center_align">
                    <div className="row status_style">
                        <div className="status_title">Job Status :</div>
                        <div className="job_Status_style">COMPLETE</div>
                    </div>
                    <div className="row status_style">
                        <div className="status_title">Completed on :</div>
                        <div>05/21/18, 10AM</div>
                    </div>

                    <div className="user_inner_details_container">
                        <div>Edit Schedule</div>
                        <div className="container">
                            {
                                user_Array.map((item) => {
                                    return(
                                        <div className="row user_details_style">
                                            <div>
                                                <p class="text-left list_header_item user_style">{item.user_name}</p>
                                                <p class="text-left user_style">{item.startDate}</p>
                                                <p class="text-left user_style">{item.endDate}</p>
                                            </div>

                                            <div className="complete_tag">
                                                <span class="badge badge-success complete_style">Complete</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button type="button" class="btn btn-outline-success btn_style">Time Card Entries</button>
                        </div>
                    </div>
                </div>
                {this.renderTimelineList()}
            </div>
        )
    }

    renderDetails(){
        return(
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-lg-9">
                        {this.renderDetailsHeader()}
                        {this.renderUserDetails()}
                        {this.renderOtherDetails()}
                    </div>
                    <div className="col-lg-3">
                        {this.renderTimeline()}
                    </div>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="container-fluid container_background">
                <Navbar/>
                {this.getHeader()}
                {this.renderDetails()}
            </div>
        );
    }
}