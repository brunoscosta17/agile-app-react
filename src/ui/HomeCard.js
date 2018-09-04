import React from 'react'

    const HomeCard = (props) => (
        <div className="col-12 col-sm-4 col-md-6" style={{paddingTop: '6px'}}>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top rouded mx-auto d-block" style={{paddingTop: '3px'}} src="https://vignette.wikia.nocookie.net/yugioh/images/7/71/GetYourGameOn-WCPS-EN-C-UE.png/revision/latest?cb=20080810195502" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                </div>
            </div>
        </div>
    )

export default HomeCard