// Tab types
export const TAB_SETTINGS = 'settings' as const;
export const TAB_ASSETS = 'assets' as const;

export type TabType = typeof TAB_SETTINGS | typeof TAB_ASSETS;

// Tab labels
export const TAB_LABELS = {
  [TAB_SETTINGS]: '설정',
  [TAB_ASSETS]: '포트폴리오 내 보유 자산',
} as const;

// Settings form labels
export const SETTINGS_LABELS = {
  TIME_PERIOD: '조회기간',
  START_YEAR: '시작년도',
  END_YEAR: '종료년도',
  INITIAL_AMOUNT: '초기 자본금액',
  CASHFLOWS: '추가 현금흐름',
  REBALANCING: '리밸런싱',
  REINVEST_DIVIDENDS: '배당금&분배금 재투자 여부',
} as const;

// Assets form labels
export const ASSETS_LABELS = {
  BENCHMARK: '비교 기준지수',
  BENCHMARK_TICKER: '비교 기준지수',
  TOTAL_PERCENTAGE: '현재 종목 퍼센트(%) 총합',
} as const;

// Placeholder texts
export const PLACEHOLDERS = {
  DROPDOWN: 'Sample DropDown',
  TICKER: 'Sample Ticker',
  ASSET: 'Sample Ticker',
  PERCENTAGE: '10',
} as const;

// Button texts
export const BUTTON_TEXTS = {
  ANALYZE: '포트폴리오 분석하기',
  CLEAR: '초기화',
} as const;

// Icons
export const ICONS = {
  INFO: 'ⓘ',
  SEARCH: '🔍',
  PERCENT: '%',
} as const;

// Page title
export const PAGE_TITLE = '포트폴리오 모델 구성';

// Number of assets
export const ASSETS_COUNT = 10;

// Generate asset labels
export const ASSET_LABELS = Array.from(
  { length: ASSETS_COUNT },
  (_, i) => `종목 ${i + 1}`
);
