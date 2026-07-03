import { memo } from "react"

const MetricCard = memo(({ metric }: { metric: { label: string; value: any; icon: React.ReactNode } }) => {
  return (
    <div>
      {metric.icon}
      <h3>{metric.value}</h3>
      <p>{metric.label}</p>
    </div>
  );
});

export default MetricCard;