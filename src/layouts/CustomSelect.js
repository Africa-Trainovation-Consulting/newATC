import React from 'react';
import Select from 'react-select'
function CustomSelect(props) {
    const options = [
        { label: 'Freelancer', value: 'Freelancer' },
        { label: 'Team of 6', value: 'Team of 6' },
        { label: 'Executive', value: 'Executive' },
        { label: 'Digital Classroom', value: 'Digital Classroom' },
        { label: 'Hangouts', value: 'Hangouts' }
    ]
    const option2 = [
        { label: 'Freelancer', value: 'Freelancer' },
        { label: 'Team of 6', value: 'Team of 6' },
        { label: 'Executive', value: 'Executive' },
        { label: 'Digital Classroom', value: 'Digital Classroom' },
        { label: 'Hangouts', value: 'Hangouts' }
    ]
const selectStyle = {
height:'5vh'
}

return <>


    <Select options={options}  style={selectStyle}/>
    <Select options={option2} />


</>

}
export default CustomSelect;