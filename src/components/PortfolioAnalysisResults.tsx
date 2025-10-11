'use client';

import styles from './PortfolioAnalysisResults.module.css';
import PortfolioChart from './PortfolioChart';

export default function PortfolioAnalysisResults() {
  const metricsData = [
    { metric: '시작 잔액', portfolio: '10,000', benchmark: '10,000' },
    { metric: '최종 잔액', portfolio: '20,000', benchmark: '20,000' },
    { metric: '연평균 수익률(CAGR)', portfolio: '9.86%', benchmark: '12.8%' },
    { metric: '최대 낙폭', portfolio: '-15.8%', benchmark: '-12.5%' },
    { metric: '최종 수익률', portfolio: '10,000', benchmark: '10,000' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>분석 결과 요약</h1>

      <div className={styles.metricsSection}>
        <table className={styles.metricsTable}>
          <thead>
            <tr>
              <th>지표</th>
              <th>내 포트폴리오</th>
              <th>기준지수</th>
            </tr>
          </thead>
          <tbody>
            {metricsData.map((row, index) => (
              <tr key={index}>
                <td>{row.metric}</td>
                <td>{row.portfolio}</td>
                <td>{row.benchmark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.chartSection}>
        <h2 className={styles.chartTitle}>포트폴리오 성장률</h2>
        <PortfolioChart />
      </div>
    </div>
  );
}
