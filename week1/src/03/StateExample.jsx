import React from 'react';

function StateExample(props) {

    const [loading, setLoading] = React.useState(true);
    const [formData, setFormData] = React.useState('no data');

    const handleData = () => {
        const data = 'new data';
        setFormData((prevFormData) => data + prevFormData);
        setLoading(false);
    };

    React.useEffect(() => {
        const timeoutId = setTimeout(handleData, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <span>로딩중: {String(loading)}</span>
            <span>결과: {String(formData)}</span>
        </div>
    );
}

export default StateExample;