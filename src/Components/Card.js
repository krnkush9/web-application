function Card({ val }) {

    return (
        <div className="w-full p-3 shadow-lg rounded-md">

            {/* title */}
            <p className="p-3">
                <b>Title: {`${val.title.substring(0, 31)}...`}</b>
            </p>

            {/* image */}
            <img src={
                val.image_url == null ? <p>No image found</p> : val.image_url
            } alt="Image not available" className="my-2 rounded-lg w-[100%]"
            ></img>

            {/* description */}
            <p className="mb-2"
            > <b>Desc: </b>
                {
                    val.description == null ? <p>No description found </p>
                        : `${val.description.substring(0, 60)}...`
                }

                {/* Read more button */}

                <a href={val.link} target="_blank"
                    className="font-bold text-blue-600"
                >Read more</a>
            </p>
        </div>
    )
}

export default Card;