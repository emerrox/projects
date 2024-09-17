import { useState } from "react"
export function TwitterFollowCard({children, formatUserName, userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img
                    className="tw-follow-card-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt=""/>
                <div className="tw-follow-card-info-user-name">
                    <strong>{children}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}