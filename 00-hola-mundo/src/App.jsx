import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    const formatUserName = (userName) => `@${userName}`

    return(

        <div className='app'>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName="emerrox">
            maurodinosaurio <br />
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="midudev">
            miguelón <br />
            </TwitterFollowCard>
        </div>
    )
}