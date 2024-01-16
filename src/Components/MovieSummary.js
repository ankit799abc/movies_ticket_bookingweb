import React from "react";

// props -> movie name, summary, img


const MovieSummary = (props) => {

    const { name, summary, img } = props
    

    return (
        <div className="text">
            <h3 >
                {name}
            </h3>
            <img alt='movie'  src={img} />
            <div dangerouslySetInnerHTML={{ __html: summary }} >
            </div>
        </div>
    )
}

export default MovieSummary;