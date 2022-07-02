import React, { useState, useEffect, useRef } from 'react';
//styles
import { Wrapper, Content } from './SearchBar.styles';
//image
import searchIcon from '../../images/search-icon.svg';

interface Props {
    setSearchTerm:  React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchTerm } : Props ) => {
    const [state, setState] = useState<string>('');
    const initial = useRef(true);

    useEffect(() => {
        //check if the current value of the ref variable 'initial' is true or not
        if(initial.current) {
            //if this is the initial render, set to false and return so the useeffect hook isn't triggered
            initial.current = false;
            return;
        }

        //create a timeout in a useEffect to create a delay between when the user types and when the search bar actually fires the api fetch
        const timer =  setTimeout(() => {
            setSearchTerm(state);
        }, 700); //TODO - test & change this if 700 seems too long
        
        //to perform an action after the use effect has completed, put a return statement at the end of the effect
        //this one is clearing out the timer so there aren't a lot of timers running in the background on each render of this component
        return () => clearTimeout(timer);

    }, [setSearchTerm, state]); //linting rules suggested these dependencies

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
                <h1 onClick={()=> setState('')}>x</h1>
            </Content>
        </Wrapper>
    )
}

export default SearchBar; 