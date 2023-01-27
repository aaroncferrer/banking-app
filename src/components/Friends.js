import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

function Friends(){
    return(
        <>
        <div className="action-buttons friends">
            <FontAwesomeIcon className='action-logo' icon={faUserFriends} />
            <span className='action-name'>Friends</span>
        </div>
        </>
    )
}

export default Friends;