import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    // const data = entry.getIn(['data']).toJS()
    // if (data) {
    //   return (
    //     <IndexPageTemplate
    //       image={getAsset(data.image)}
    //       title={data.title}
    //       heading={data.heading}
    //       subheading={data.subheading}
    //       description={data.description}
    //       intro={data.intro || { blurbs: [] }}
    //       mainpitch={data.mainpitch || {}}
    //     />
    //   )
    // } else {
    //   return <div>Loading...</div>
    // }
    return (
        <div style={{ width: '100vw' }}>
            <img
                src="https://images.unsplash.com/photo-1538219008904-166ea576a586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                objectFit="cover"
            />
        </div>
    )
}

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default IndexPagePreview
