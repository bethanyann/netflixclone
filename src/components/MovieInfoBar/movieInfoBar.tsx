import React from 'react';
//utils
import { convertMoney, calcTime } from '../../helpers';
//styles
import { Wrapper, Content } from './MovieInfoBar.styles';

interface Props {
    runtime: number,
    budget: number,
    revenue: number
}

const MovieInfoBar = ({runtime, budget, revenue} : Props) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(runtime)}</p>
            </div>
            <div className="column">
                <p>Budget: {budget <= 0 ? 'Unknown' : convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {revenue <= 0 ? 'Unknown' : convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default MovieInfoBar; 