import { LineData } from 'lightweight-charts';

// 차트 데이터
export const portfolioChartData: LineData[] = [
  { time: '2012-01-01', value: 10000 },
  { time: '2012-06-01', value: 10500 },
  { time: '2013-01-01', value: 11000 },
  { time: '2013-06-01', value: 12000 },
  { time: '2014-01-01', value: 13000 },
  { time: '2014-06-01', value: 14000 },
  { time: '2015-01-01', value: 15000 },
  { time: '2015-06-01', value: 15500 },
  { time: '2016-01-01', value: 15200 },
  { time: '2016-06-01', value: 16000 },
  { time: '2017-01-01', value: 16500 },
  { time: '2017-06-01', value: 17000 },
  { time: '2018-01-01', value: 18000 },
  { time: '2018-06-01', value: 19000 },
  { time: '2019-01-01', value: 19500 },
  { time: '2019-06-01', value: 20000 },
  { time: '2020-01-01', value: 20500 },
  { time: '2020-06-01', value: 19000 },
  { time: '2021-01-01', value: 22000 },
  { time: '2021-06-01', value: 24000 },
  { time: '2022-01-01', value: 26000 },
  { time: '2022-06-01', value: 27000 },
  { time: '2023-01-01', value: 25000 },
  { time: '2023-06-01', value: 26000 },
  { time: '2024-01-01', value: 28000 },
  { time: '2024-06-01', value: 30000 },
  { time: '2025-01-01', value: 32000 },
];

export const benchmarkChartData: LineData[] = [
  { time: '2012-01-01', value: 10000 },
  { time: '2012-06-01', value: 11000 },
  { time: '2013-01-01', value: 12000 },
  { time: '2013-06-01', value: 13500 },
  { time: '2014-01-01', value: 14500 },
  { time: '2014-06-01', value: 15500 },
  { time: '2015-01-01', value: 17000 },
  { time: '2015-06-01', value: 18000 },
  { time: '2016-01-01', value: 17500 },
  { time: '2016-06-01', value: 18500 },
  { time: '2017-01-01', value: 19000 },
  { time: '2017-06-01', value: 20000 },
  { time: '2018-01-01', value: 22000 },
  { time: '2018-06-01', value: 24000 },
  { time: '2019-01-01', value: 25000 },
  { time: '2019-06-01', value: 26000 },
  { time: '2020-01-01', value: 27000 },
  { time: '2020-06-01', value: 23000 },
  { time: '2021-01-01', value: 30000 },
  { time: '2021-06-01', value: 33000 },
  { time: '2022-01-01', value: 38000 },
  { time: '2022-06-01', value: 42000 },
  { time: '2023-01-01', value: 36000 },
  { time: '2023-06-01', value: 38000 },
  { time: '2024-01-01', value: 45000 },
  { time: '2024-06-01', value: 52000 },
  { time: '2025-01-01', value: 55000 },
];

// 메트릭 테이블 데이터
export interface MetricRow {
  metric: string;
  portfolio: string;
  benchmark: string;
}

export const metricsTableData: MetricRow[] = [
  { metric: '시작 잔액', portfolio: '10,000', benchmark: '10,000' },
  { metric: '최종 잔액', portfolio: '20,000', benchmark: '20,000' },
  { metric: '연평균 수익률(CAGR)', portfolio: '9.86%', benchmark: '12.8%' },
  { metric: '최대 낙폭', portfolio: '-15.8%', benchmark: '-12.5%' },
  { metric: '최종 수익률', portfolio: '10,000', benchmark: '10,000' },
];
