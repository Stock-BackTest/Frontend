'use client';

import {useEffect, useRef} from 'react';
import {ColorType, createChart, IChartApi, LineSeries} from 'lightweight-charts';
import styles from './PortfolioChart.module.css';
import {benchmarkChartData, portfolioChartData} from '@/data/samplePortfolioData';

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

    // 샘플 포트폴리오 라인 시리즈 (파란색)
    const portfolioSeries = chart.addSeries(LineSeries, {
      color: '#2563eb',
      lineWidth: 2,
      title: 'Sample Portfolio',
    });
    portfolioSeries.setData(portfolioChartData);

    // 벤치마크 라인 시리즈 (민트색)
    const benchmarkSeries = chart.addSeries(LineSeries, {
      color: '#5eead4',
      lineWidth: 2,
      title: 'SPDR S&P 500 ETF',
    });
    benchmarkSeries.setData(benchmarkChartData);

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
