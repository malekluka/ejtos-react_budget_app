import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className='alert alert-secondary'>
            <div className='Currencylabelcontainer'>
                <label htmlFor='currencySelect'>Currency {selectedCurrency}</label>
                <select
                    id='currencySelect'
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    style={{ marginLeft: '8px' }}
                >
                    <option value='$'>$ Dollar</option>
                    <option value='£'>£ Pound</option>
                    <option value='€'>€ Euro</option>
                    <option value='₹'>₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;
