import React from 'react';

const Details = (props) => {
return <pre>{JSON.stringify(props, null, 4)}</pre>
}

export default Details;