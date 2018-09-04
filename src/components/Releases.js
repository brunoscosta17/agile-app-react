import React, { Component } from "react";
import ReleaseForm from '../ui/ReleaseForm'

export default class Release extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      releases: [
        {
          id: 1,
          releaseName: "Release 1",
          releaseDate: "01/01/2019"
        },
        {
          id: 2,
          releaseName: "Release 2",
          releaseDate: "02/02/2019"
        },
        {
          id: 3,
          releaseName: "Release 3",
          releaseDate: "03/03/2019"
        },
        {
          id: 4,
          releaseName: "Release 4",
          releaseDate: "04/04/2019"
        }
      ]
    };
}

handleRemove(id){
    var myReleases = this.state.releases;
    myReleases.splice(id, 1)
    this.setState({releases: myReleases});
}

handleSubmit(e, {name, date}) {
    e.preventDefault();
    var state = this.state;
    var myRelease = {
        id: state.releases.length + 1,
        releaseName: name,
        releaseDate: date
    }
    this.setState({releases: state.releases.concat(myRelease)});
}

  render() {
    return (
        <div className="container" style={{paddingTop: '25px'}}>
            <ReleaseForm submitHandler={this.handleSubmit}/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Release Name</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Remover</th>
                </tr>
                </thead>
                <tbody>

                {this.state.releases.map((release, index) => {

                    const onClickRemove = (e) => {
                        this.handleRemove(index);
                    }
                    return (
                    <tr key={release.id}>
                        <th scope="row">{release.id}</th>
                        <td>{release.releaseName}</td>
                        <td>{release.releaseDate}</td>
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove} >X</button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
  }
}