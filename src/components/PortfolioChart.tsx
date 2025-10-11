'use client';

import { useEffect, useRef } from 'react';
import { 
  createChart, 
  ColorType, 
  IChartApi, 
  LineData,
  LineSeries
} from 'lightweight-charts';
import styles from './PortfolioChart.module.css';

export default function PortfolioChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // 차트 생성
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'white' },
        textColor: '#333',
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
      rightPriceScale: {
        borderColor: '#e0e0e0',
      },
      timeScale: {
        borderColor: '#e0e0e0',
        timeVisible: false,
      },
      handleScroll: false,  // 스크롤로 확대/축소 비활성화
      handleScale: false,   // 핀치 줌 비활성화
    });

    chartRef.current = chart;

    // 샘플 포트폴리오 데이터 (파란색)
    const portfolioData: LineData[] = [
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

    // 벤치마크 데이터 (민트색)
    const benchmarkData: LineData[] = [
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

    // 샘플 포트폴리오 라인 시리즈 (파란색)
    const portfolioSeries = chart.addSeries(LineSeries, {
      color: '#2563eb',
      lineWidth: 2,
      title: 'Sample Portfolio',
    });
    portfolioSeries.setData(portfolioData);

    // 벤치마크 라인 시리즈 (민트색)
    const benchmarkSeries = chart.addSeries(LineSeries, {
      color: '#5eead4',
      lineWidth: 2,
      title: 'SPDR S&P 500 ETF',
    });
    benchmarkSeries.setData(benchmarkData);

    // 차트의 시간 범위를 데이터에 맞게 조정
    chart.timeScale().fitContent();

    // 차트 크기 자동 조절
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // 클린업
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className={styles.chartWrapper}>
      <div ref={chartContainerRef} className={styles.chartContainer} />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendLine} style={{ backgroundColor: '#2563eb' }}></span>
          <span>Sample Portfolio</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendLine} style={{ backgroundColor: '#5eead4' }}></span>
          <span>SPDR S&P 500 ETF</span>
        </div>
      </div>
    </div>
  );
}
