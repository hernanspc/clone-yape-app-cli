import React, { useEffect, useState } from 'react';


export const useDataMovements = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movements, setMovements] = useState([])

    const loadData = async () => {
        fetch('https://transfer-project-313f8.web.app/transacciones.json')
            .then(response => response.json())
            .then(data => {
                setMovements(data.transacciones)
                // console.log('data ', data.transacciones)
            });

        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [])

    return {
        isLoading,
        movements
    }
}
