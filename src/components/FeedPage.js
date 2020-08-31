import React, {Component} from 'react';
import { Feed, Icon, Header, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class FeedPage extends React.Component {

    static defaultProps = {
        name: "사용자"
    }

    static propTypes = {
        name: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            like: 123
        }
    }

    addLike() {
        this.setState({
            like: this.state.like + 1
        })
    }

    render() {

        return(
        <React.Fragment>
        <Header as='h2'>
            <Image circular src='/images/avatar/large/patrick.png' />
            {this.props.name}님 환영합니다.
        </Header>
        <Feed>
            <Feed.Event>
            <Feed.Label>
                <img src='/images/avatar/small/elliot.jpg' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                <Feed.User onClick={() => this.props.setName('elliot')}>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' onClick={() => this.addLike}/>{this.state.like} Likes
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image='/images/avatar/small/helen.jpg' />
            <Feed.Content>
                <Feed.Summary>
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                <a>
                    <img src='/images/wireframe/image.png' />
                </a>
                <a>
                    <img src='/images/wireframe/image.png' />
                </a>
                </Feed.Extra>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />1 Like
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image='/images/avatar/small/jenny.jpg' />
            <Feed.Content>
                <Feed.Summary
                date='2 Days Ago'
                user='Jenny Hess'
                content='add you as a friend'
                />
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />8 Likes
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image='/images/avatar/small/joe.jpg' />
            <Feed.Content>
                <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to where
                we'd we started, then starting all over again. Even if we don't run
                extra laps that day, we surely will come back for more of the same
                another day soon.
                </Feed.Extra>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />5 Likes
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image='/images/avatar/small/justen.jpg' />
            <Feed.Content>
                <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                <a>
                    <img src='/images/wireframe/image.png' />
                </a>
                <a>
                    <img src='/images/wireframe/image.png' />
                </a>
                </Feed.Extra>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />
                    41 Likes
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>
        </Feed>
        </React.Fragment>
        )        
    }

}

// FeedPage.defaultProps = {
//     name: '사용자'
// }

export default FeedPage;