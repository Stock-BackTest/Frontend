'use client';

import { useRouter } from 'next/navigation';
import styles from './PortfolioAnalysisResults.module.css';
import PortfolioChart from './PortfolioChart';
import { metricsTableData } from '@/data/samplePortfolioData';

export default function PortfolioAnalysisResults() {
  const router = useRouter();
  const handleNewAnalysis = () => {
    router.push('/');
  };

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
            {metricsTableData.map((row, index) => (
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
      <div className={styles.buttonSection}>
        <button className={styles.newAnalysisButton} onClick={handleNewAnalysis}>
          재설정
        </button>
      </div>
    </div>
  );
}
