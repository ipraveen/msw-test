import ProfileCard from './ProfileCard';
import ErrorCard from './ErrorCard';
import LoadingCard from './LoadingCard';

import './App.css';
import { useEffect, useState } from 'react';

const ERROR = 'error';

function App({ id }) {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);

                const res = await fetch(`api/user/${id}`);
                const jsonRes = await res.json();
                setResponse(jsonRes);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [id]);

    // Loading
    if (loading) return <LoadingCard />;

    const { status, data, error } = response;
    if (status === ERROR) {
        // Error
        return <ErrorCard error={error} />;
    }

    // Normal
    return <ProfileCard data={data} />;
}

export default App;
