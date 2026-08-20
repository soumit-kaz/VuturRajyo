import { useState, useEffect } from 'react'
import { getHealth } from './services/api';

function App()
{
    const [message, setMessage] = useState('Checking backend...');
    const [error, setError] = useState("");

    useEffect(
        () =>
        {
            getHealth()
                .then(
                    (data) =>
                    {
                        setMessage(data);
                    }
                )
                .catch(
                    (err) =>
                    {
                        setError(err.message);
                    }
                );
        },
        []
    )

    return (
        <div>
            <h1>Vuter Rajyo</h1>
            {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{message}</p>}
        </div>
    )
}

export default App
