function Formgroup(props) {
    return (
        <span className="form-group">
            <label htmlFor={props.for}> {props.label} </label>
            <input type={props.type} size={props.size} maxLength={props.maxLength} onChange={props.onChange} name={props.name} placeholder={props.placeholder} required />
        </span>
    )
}
export default Formgroup;