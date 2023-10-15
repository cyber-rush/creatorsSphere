

const InputComponent = ({ inputItems }) => {
    return (
        <div className="input-component">
            {
                inputItems.map((inputItem, index) => (
                    <input
                        className="input-ele"
                        key={index}
                        type="text"
                        placeholder={inputItem}
                    />
                ))
            }

        </div>
    )
}

export default InputComponent
