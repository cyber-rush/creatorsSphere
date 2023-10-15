
const SocialHandles = ({ icons }) => {
    return (
        <div>

            {
                icons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon}
                    />
                ))
            }
        </div>
    )
}

export default SocialHandles
