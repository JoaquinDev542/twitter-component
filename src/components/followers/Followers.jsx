import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./followers.scss"

export const Followers = () => {
    return(
        <Card/>       
    )
}

const Card = () => {
    const { follower } = useContext(GlobalContext)

    return (
        <div className="Cards">
            { follower.map( ( { id, name , userName , avatar , follow } ) =>
                <article key={ id } className="Card-article">
                    <header className="Card-header">
                        <img src={ avatar } alt= {`logo ${name}` } className="Card-img" />
                        <div className="Card-texts">
                            <strong className="Card-name"> { name } </strong>
                            <span className="Card-username"> { userName } </span>
                        </div>
                    </header>
                    <aside className="Card-aside">
                        <button className="Card-button"> { follow } </button>
                    </aside>
                </article>
            ) } 
        </div>
    )
}

// `https://unavatar.io/${userName}`
