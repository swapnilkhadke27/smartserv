import React, {Component} from 'react';
import {render} from 'react-dom'

export default class EmailModal extends Component {
    render () {
        return (
            <div>
                <div className="modal_header" >
                    <div className="modal_text" >SEND JOB REMINDER</div>
                    <div className="modal_text" >In case you wish to any changes to the email template before sending it out</div>
                </div>

                <div className="row container">
                    <div className="col-lg-2">
                        <div>Email</div>
                        <div>Text Message</div>
                    </div>
                    <div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}