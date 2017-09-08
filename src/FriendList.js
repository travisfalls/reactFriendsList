import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE} from './constants';

class FriendList extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ friends: nextProps.props})
    }

    renderFriends() {
        if (this.state.friends) {
            return this.state.friends.map(friend =>
                <div key={friend.id}>
                    <li className="list-group-item">
                        <strong>Name:</strong> {friend.name}
                        <br />
                        <strong>Age:</strong> {friend.age}
                        <button onClick={ () => { this.removeFriend(this, friend)}}
                            className="btn btn-danger trash">
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                    </li>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Waiting for friends</h1>
                </div>
            );
        }
    }

    removeFriend(event, friend) {
        var id = friend.id;
        var tempFriends = this.state.friends;
        axios.delete('${API_BASE}/${id}')
            .then( response => {
                var deleteFriend = tempFriends.indexOf(friend);
                tempFriends.splice(deleteFriend, 1);
                this.setState({ friends: tempFriends });
            });
    }

    render() {
        return (
            <div>
                <div className="col-xs-2"></div>
                <div className="col-xs-6">
                    <h3>List of Friends</h3>
                    <ul className="list-group">
                        {this.renderFriends()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FriendList;
