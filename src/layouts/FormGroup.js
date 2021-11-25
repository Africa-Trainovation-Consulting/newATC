function Formgroup(props) {
    return (
        <span className="form-group">
            <label htmlFor={props.for}> {props.label} </label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
        </span>
    )
}
export default Formgroup;