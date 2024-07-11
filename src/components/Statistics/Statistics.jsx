import PropTypes from 'prop-types';
import { Section, Title, StatList,Item, LabelStats, PercentageStats } from '../Statistics/Statistics.styled';

export default function Statistic({ title, stats }) {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <Item
                            key={id}
                            style={{ backgroundColor: createColor() }} 
                            >

                            <LabelStats>{label}</LabelStats>
                            <PercentageStats>{percentage}</PercentageStats>
                        </Item>)
                })}

            </StatList>
        </Section>)

}

Statistic.propType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )

}


const createColor = () => {
    const color =
        'rgba(' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ',' +
        0.5 +
        ')';

    return color;
};