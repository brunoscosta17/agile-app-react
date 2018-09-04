import React, { Component } from 'react'
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {
    
    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => hashHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => hashHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => hashHistory.push('/sprints')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title} text={this.homeCardReleases.text} action={this.homeCardReleases.action} />
                    <HomeCard {...this.homeCardBacklog} text={this.homeCardBacklog.text} action={this.homeCardBacklog.action}/>
                    <HomeCard {...this.homeCardSprints} text={this.homeCardSprints.text} action={this.homeCardSprints.action}/>
                </div>
            </div>
        )
    }
}