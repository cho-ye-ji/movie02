import React, { useState } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average}) {
    const [like, setLike] = useState(0);
    return(
        <>
            <div className='movie-container'>
                <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
                <div className='movie-info'>
                    <h4> {title} </h4>
                    <span> {vote_average} </span>
                    <span onClick={ ()=>{
                        setLike(like + 1);
                    }} className="likeBtn"> ♥ {like} </span>
                </div>
            </div>
        </>
    )
}