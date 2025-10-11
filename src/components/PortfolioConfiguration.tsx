'use client';

import { useState } from 'react';
import styles from './PortfolioConfiguration.module.css';
import {
  TAB_SETTINGS,
  TAB_ASSETS,
  TAB_LABELS,
  SETTINGS_LABELS,
  ASSETS_LABELS,
  PLACEHOLDERS,
  BUTTON_TEXTS,
  ICONS,
  PAGE_TITLE,
  ASSET_LABELS,
  ASSETS_COUNT,
  type TabType,
} from '@/constants/portfolio';

export default function PortfolioConfiguration() {
  const [activeTab, setActiveTab] = useState<TabType>(TAB_SETTINGS);
  const [assetPercentages, setAssetPercentages] = useState<string[]>(
    Array(ASSETS_COUNT).fill('0')
  );

  const handlePercentageChange = (index: number, value: string) => {
    // 음수 입력 방지 및 정수만 허용
    const numValue = parseFloat(value);
    if (value !== '' && (numValue < 0 || !Number.isInteger(numValue))) {
      return;
    }
    
    const newPercentages = [...assetPercentages];
    newPercentages[index] = value;
    setAssetPercentages(newPercentages);
  };

  const calculateTotal = () => {
    return assetPercentages.reduce((sum, value) => {
      const num = parseFloat(value) || 0;
      return sum + num;
    }, 0);
  };

  const getTotalClassName = () => {
    const total = calculateTotal();
    if (total === 100) {
      return `${styles.percentageSummary} ${styles.valid}`;
    }
    return `${styles.percentageSummary} ${styles.invalid}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{PAGE_TITLE}</h1>
      
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === TAB_SETTINGS ? styles.activeTab : ''}`}
          onClick={() => setActiveTab(TAB_SETTINGS)}
        >
          {TAB_LABELS[TAB_SETTINGS]}
        </button>
        <button
          className={`${styles.tab} ${activeTab === TAB_ASSETS ? styles.activeTab : ''}`}
          onClick={() => setActiveTab(TAB_ASSETS)}
        >
          {TAB_LABELS[TAB_ASSETS]}
        </button>
      </div>

      {activeTab === TAB_SETTINGS && (
        <div className={styles.content}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.TIME_PERIOD}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.START_YEAR}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.END_YEAR}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.INITIAL_AMOUNT}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.CASHFLOWS}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.REBALANCING}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {SETTINGS_LABELS.REINVEST_DIVIDENDS}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <select className={styles.dropdown}>
              <option>{PLACEHOLDERS.DROPDOWN}</option>
            </select>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.analyzeButton}>{BUTTON_TEXTS.ANALYZE}</button>
            <button className={styles.clearButton}>{BUTTON_TEXTS.CLEAR}</button>
          </div>
        </div>
      )}

      {activeTab === TAB_ASSETS && (
        <div className={styles.content}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              {ASSETS_LABELS.BENCHMARK_TICKER}
              <span className={styles.infoIcon}>{ICONS.INFO}</span>
            </label>
            <div className={styles.searchInput}>
              <input type="text" placeholder={PLACEHOLDERS.TICKER} />
              <button className={styles.searchIcon} type="button">
                {ICONS.SEARCH}
              </button>
            </div>
          </div>

          <div className={getTotalClassName()}>
            {ASSETS_LABELS.TOTAL_PERCENTAGE} : {calculateTotal()}%
          </div>

          <div className={styles.assetsGrid}>
            {ASSET_LABELS.map((label, index) => (
              <div key={index} className={styles.assetRow}>
                <label className={styles.assetLabel}>{label}</label>
                <div className={styles.searchInput}>
                  <input type="text" placeholder={PLACEHOLDERS.ASSET} />
                  <button className={styles.searchIcon} type="button">
                    {ICONS.SEARCH}
                  </button>
                </div>
                <div className={styles.percentInput}>
                  <input
                    type="number"
                    value={assetPercentages[index]}
                    onChange={(e) => handlePercentageChange(index, e.target.value)}
                    min="0"
                    step="1"
                  />
                  <span className={styles.percentIcon}>{ICONS.PERCENT}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.analyzeButton}>{BUTTON_TEXTS.ANALYZE}</button>
            <button className={styles.clearButton}>{BUTTON_TEXTS.CLEAR}</button>
          </div>
        </div>
      )}
    </div>
  );
}
