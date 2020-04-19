import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tweets = () => {

    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tweets/')
            .then(function (response) {
                // handle success
                setTweets(response.data)
            })
    });

    return (
        <ul style={{ "list-style": "none" }}>
            {tweets.map((tweet) => {
                return <li key={tweet.id} style={{ "padding-bottom": "10px" }}>{tweet.text}</li>
            })}
        </ul>
    )
}

export default Tweets;