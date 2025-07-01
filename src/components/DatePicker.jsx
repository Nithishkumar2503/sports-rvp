import "./DatePicker.css";

const DatePicker = () => {
    return (
        <>
            <input type="date"
                onChange={(value) => {
                    console.log("value : ", value?.target.value)
                }}
            />
        </>
    )
}
export default DatePicker