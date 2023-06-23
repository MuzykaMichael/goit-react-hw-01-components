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