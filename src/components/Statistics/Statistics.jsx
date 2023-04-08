import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercent,
} from './StatisticStyle';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
