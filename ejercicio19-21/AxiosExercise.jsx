import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const AxiosExercisev2 = () => {
  const [joke, setJoke] = useState('');
  const [likedJokes, setLikedJokes] = useState(0);
  const [dislikedJokes, setDislikedJokes] = useState(0);

  const getJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: 'silver' }}>
      <hr/>
      <div>
        <h1>{joke}</h1>
      </div>
      <br/>
      <Button variant="contained" onClick={getJoke}>Get new joke</Button>
      <hr />
      <Button variant="contained" onClick={() => setLikedJokes(likedJokes + 1)}>Like</Button>
      <Button variant="contained" onClick={() => setDislikedJokes(dislikedJokes + 1)}>Dislike</Button>
      <div>
        <br />
        <p>Liked jokes: {likedJokes}</p>
        <p>Disliked jokes: {dislikedJokes}</p>
      </div>
    </div>
  );
};

export default AxiosExercisev2;