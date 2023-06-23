import propTypes from 'prop-types'
import {StatisticsContainer,StatisticsTitle,StatisticsList,StatisticsListItem,StatisticsTextSpan,StatisticsNumberSpan} from './Statistics.styled'

export const Statistics = ({title,stats}) => {
    const reby = stats.map(object=><StatisticsListItem key={object.id}><StatisticsTextSpan>{object.label}</StatisticsTextSpan><StatisticsNumberSpan>{object.percentage}%</StatisticsNumberSpan></StatisticsListItem>)
    return ((title === '')?
    <StatisticsContainer>
    <StatisticsList>
        {reby}
    </StatisticsList>
    </StatisticsContainer>
    :<StatisticsContainer>
    <StatisticsTitle>{title}</StatisticsTitle>
    <StatisticsList>
        {reby}
    </StatisticsList>
    </StatisticsContainer>)


}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}