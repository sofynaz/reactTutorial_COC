import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState();
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
            .then((res) => {
              
                if (!res.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                return res.json();
              
            })
            .then((res) => setData(res[currency]))
            .catch(error => console.error('Error fetching currency info:', error));
            // console.log(data);
           
    }, [currency]);

return data;

}

export default useCurrencyInfo;
