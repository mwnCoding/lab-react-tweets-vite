function ProfileImage(props) {
    console.log(props);
    return (
        <> 
        <img src={props.image} alt="User profile pictures" className="profile"/>
        </>
    );
}

export default ProfileImage;