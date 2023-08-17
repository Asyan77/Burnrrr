import { useSelector } from "react-redux"

const ProfileView = () => {
    const user = useSelector(state => state.session.currentUser)
    return (
        <>
            {user.username}
        </>
    )
}

export default ProfileView
