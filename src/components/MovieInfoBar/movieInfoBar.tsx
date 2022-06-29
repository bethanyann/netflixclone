import React from 'react';
//utils
import { convertMoney, calcTime } from '../../helpers';
//styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({movie}: any) => (
 
    <Wrapper>
    <Content>
        <div className="column">
            <p>Running time: {calcTime(movie.runtime)}</p>
        </div>
        <div className="column">
            <p>Budget: {movie.budget <= 0 ? 'Unknown' : convertMoney(movie.budget)}</p>
        </div>
        <div className="column">
           {/* {revenue <= 0 ? <p>Revenue: Unknown</p> : <p>Revenue: {convertMoney(revenue)}</p>} */}
            <p>Revenue: {movie.revenue <= 0 ? 'Unknown' : convertMoney(movie.revenue)}</p>
        </div>
    </Content>
</Wrapper>

)

export default MovieInfoBar; 