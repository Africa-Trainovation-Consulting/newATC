import React from 'react'
let Backdrop = (BasicComponent) => class extends React.Component {
render() {
    return <section className='backdrop'>
        <div className='modal'>
            <BasicComponent />
        </div>
    </section>
}
}
export default Backdrop