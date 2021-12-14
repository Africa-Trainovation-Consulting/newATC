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
        { label: 'Daily', value: 'Daily' },
        { label: 'Hourly', value: 'Hourly' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' }
    ]
    const option3 = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' }
    ]
    const selectStyle = {
        height: '5vh'
    }

    return <>

        <span className="form-group">
            <label htmlFor='select'> Choose a Package </label>
            <Select placeholder={'Freelancer'} options={options} style={selectStyle} />
        </span>
        <span className="flexSelect">
        <span className="form-group">
            <label htmlFor='select'> Choose a Plan</label>
            <Select placeholder={'Daily'} options={option2} />
        </span>
        <span className="form-group">
            <label htmlFor='select'> Number </label>
            <Select placeholder={'1'} options={option3} />
        </span>
        </span>

    </>

}
export default CustomSelect;