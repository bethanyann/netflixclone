import React, { useState, useEffect, useRef } from 'react';
//styles
import { Wrapper, Content } from './SearchBar.styles';
//image
import searchIcon from '../../images/search-icon.svg';



const SearchBar = ( setSearchTerm:React.SetStateAction<any> ) => {
    const [state, setState] = useState('');

    useEffect(() => {
        //create a timeout in a useEffect to create a delay between when the user types and when the search bar actually fires the api fetch
        const timer =  setTimeout(() => {
            setSearchTerm(state);
        }, 700); //TODO - test & change this if 700 seems too long
        
    }, [])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                    type='text' 
                    placeholder='search movies' 
                    onChange={(event) => { setState(event.currentTarget.value)}} //inline function to send in the argument of the current value
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar; 