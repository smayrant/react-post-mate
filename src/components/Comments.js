import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    // state is initially set to an empty array
    state = {
        comments: []
    };

    componentDidMount() {
        // retrieve the data
        axios.get("https://jsonplaceholder.typicode.com/comments/")
            .then(result => {
                // set the state to the first 10 comments from the API
                this.setState({
                    comments: result.data.slice(0, 10)
                })
            })
    }

    render() {
        // retrieve comments property from state using destructuring
        const { comments } = this.state;
        // if there are comments to display, display them. Otherwise, display a 'no comments' message
        const commentList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className="comment card" key={comment.id}>
                        <div className="card-content">
                            <span className="card-title">Name: {comment.name}</span>
                            <p>Comment: {comment.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">There aren't currently any comments to display</div>
            )
        return (
            <div className="container">
                <h3 className="center">Comments</h3>
                {commentList}
            </div>
        )
    }

}

export default Comments