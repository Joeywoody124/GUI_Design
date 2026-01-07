/**
 * Twisty Finance SaaS Dashboard
 * 
 * Inspired by Halo Lab's "Twisty" design on Dribbble
 * Dark theme with violet/indigo gradients, clean typography, modern data visualization
 * 
 * Design Source: https://dribbble.com/shots/24190386-Dashboard-for-a-Finance-SaaS-Twisty
 * Designer: Halo UI/UX for HALO LAB
 * 
 * Usage: Import and render as a React component
 * Dependencies: React (no external UI libraries required)
 */

import React, { useState } from 'react';

export default function TwistyFinanceDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('1M');

  // Design tokens inspired by Twisty/Halo Lab aesthetic
  const colors = {
    background: '#0D0D12',
    backgroundSecondary: '#13131A',
    surface: '#1A1A24',
    surfaceHover: '#22222E',
    border: '#2A2A38',
    borderLight: '#1F1F2C',
    text: '#FFFFFF',
    textSecondary: '#A0A0B0',
    textMuted: '#6B6B7B',
    primary: '#8B5CF6',
    primaryLight: '#A78BFA',
    secondary: '#6366F1',
    accent: '#22C55E',
    accentRed: '#EF4444',
    accentYellow: '#F59E0B',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    gradientSubtle: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
  };

  const styles = {
    dashboard: {
      minHeight: '100vh',
      background: colors.background,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: colors.text,
      padding: '24px',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: colors.gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '18px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: '600',
      letterSpacing: '-0.02em',
    },
    nav: {
      display: 'flex',
      gap: '8px',
      background: colors.surface,
      padding: '4px',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
    },
    navItem: (active) => ({
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      background: active ? colors.gradient : 'transparent',
      color: active ? '#FFF' : colors.textSecondary,
    }),
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '10px',
      padding: '10px 16px',
      width: '240px',
    },
    searchInput: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: colors.text,
      fontSize: '14px',
      width: '100%',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: colors.gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: '24px',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    statsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
    },
    statCard: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '16px',
      padding: '20px',
      transition: 'all 0.2s ease',
    },
    statLabel: {
      fontSize: '13px',
      color: colors.textMuted,
      marginBottom: '8px',
      fontWeight: '500',
    },
    statValue: {
      fontSize: '28px',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      marginBottom: '8px',
    },
    statChange: (positive) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      fontWeight: '500',
      color: positive ? colors.accent : colors.accentRed,
      background: positive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
      padding: '4px 8px',
      borderRadius: '6px',
    }),
    chartCard: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '16px',
      padding: '24px',
    },
    chartHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    },
    chartTitle: {
      fontSize: '16px',
      fontWeight: '600',
    },
    periodTabs: {
      display: 'flex',
      gap: '4px',
      background: colors.backgroundSecondary,
      padding: '4px',
      borderRadius: '8px',
    },
    periodTab: (active) => ({
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      background: active ? colors.primary : 'transparent',
      color: active ? '#FFF' : colors.textMuted,
    }),
    chartArea: {
      height: '240px',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '4px',
      paddingBottom: '24px',
    },
    chartBar: (height, isActive) => ({
      flex: 1,
      height: `${height}%`,
      background: isActive ? colors.gradient : colors.border,
      borderRadius: '6px 6px 0 0',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    }),
    chartLabels: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '12px',
      borderTop: `1px solid ${colors.border}`,
    },
    chartLabel: {
      fontSize: '11px',
      color: colors.textMuted,
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    balanceCard: {
      background: colors.gradient,
      borderRadius: '20px',
      padding: '28px',
      position: 'relative',
      overflow: 'hidden',
    },
    balancePattern: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      transform: 'translate(50%, -50%)',
    },
    balanceLabel: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '8px',
    },
    balanceValue: {
      fontSize: '36px',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      marginBottom: '20px',
    },
    balanceActions: {
      display: 'flex',
      gap: '12px',
    },
    balanceBtn: (variant) => ({
      flex: 1,
      padding: '12px 16px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      background: variant === 'primary' ? 'rgba(255,255,255,0.2)' : 'transparent',
      color: '#FFF',
      backdropFilter: variant === 'secondary' ? 'none' : 'blur(10px)',
      outline: variant === 'secondary' ? '1px solid rgba(255,255,255,0.3)' : 'none',
    }),
    transactionsCard: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '16px',
      padding: '20px',
      flex: 1,
    },
    transactionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    transactionTitle: {
      fontSize: '16px',
      fontWeight: '600',
    },
    viewAll: {
      fontSize: '13px',
      color: colors.primary,
      cursor: 'pointer',
      fontWeight: '500',
    },
    transactionList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    transactionItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '14px',
      background: colors.backgroundSecondary,
      borderRadius: '12px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    transactionIcon: (bgColor) => ({
      width: '44px',
      height: '44px',
      borderRadius: '10px',
      background: bgColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
    }),
    transactionInfo: {
      flex: 1,
    },
    transactionName: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '2px',
    },
    transactionDate: {
      fontSize: '12px',
      color: colors.textMuted,
    },
    transactionAmount: (positive) => ({
      fontSize: '14px',
      fontWeight: '600',
      color: positive ? colors.accent : colors.text,
    }),
  };

  // Sample data
  const stats = [
    { label: 'Total Balance', value: '$84,232.00', change: '+12.5%', positive: true },
    { label: 'Total Income', value: '$32,540.00', change: '+8.2%', positive: true },
    { label: 'Total Expenses', value: '$12,890.00', change: '-3.1%', positive: false },
    { label: 'Total Savings', value: '$24,120.00', change: '+15.3%', positive: true },
  ];

  const chartData = [45, 62, 38, 75, 58, 82, 45, 68, 72, 55, 88, 65];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const transactions = [
    { name: 'Spotify Premium', date: 'Dec 24, 2024', amount: '-$14.99', icon: '🎵', bg: 'rgba(34, 197, 94, 0.15)' },
    { name: 'Transfer to Savings', date: 'Dec 23, 2024', amount: '+$500.00', icon: '💰', bg: 'rgba(139, 92, 246, 0.15)', positive: true },
    { name: 'Amazon Purchase', date: 'Dec 22, 2024', amount: '-$89.00', icon: '📦', bg: 'rgba(245, 158, 11, 0.15)' },
    { name: 'Salary Deposit', date: 'Dec 20, 2024', amount: '+$4,250.00', icon: '🏦', bg: 'rgba(99, 102, 241, 0.15)', positive: true },
    { name: 'Netflix', date: 'Dec 19, 2024', amount: '-$15.99', icon: '🎬', bg: 'rgba(239, 68, 68, 0.15)' },
  ];

  return (
    <div style={styles.dashboard}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>T</div>
            <span style={styles.logoText}>Twisty</span>
          </div>
          
          <nav style={styles.nav}>
            {['Overview', 'Analytics', 'Transactions', 'Cards', 'Settings'].map((item) => (
              <div
                key={item}
                style={styles.navItem(activeTab === item.toLowerCase())}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </div>
            ))}
          </nav>

          <div style={styles.headerRight}>
            <div style={styles.searchBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.textMuted} strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                style={styles.searchInput}
              />
            </div>
            <div style={styles.avatar}>JW</div>
          </div>
        </header>

        {/* Main Grid */}
        <div style={styles.mainGrid}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Stats Row */}
            <div style={styles.statsRow}>
              {stats.map((stat, idx) => (
                <div key={idx} style={styles.statCard}>
                  <div style={styles.statLabel}>{stat.label}</div>
                  <div style={styles.statValue}>{stat.value}</div>
                  <span style={styles.statChange(stat.positive)}>
                    {stat.positive ? '↑' : '↓'} {stat.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Chart Card */}
            <div style={styles.chartCard}>
              <div style={styles.chartHeader}>
                <div style={styles.chartTitle}>Revenue Overview</div>
                <div style={styles.periodTabs}>
                  {['1W', '1M', '3M', '1Y'].map((period) => (
                    <div
                      key={period}
                      style={styles.periodTab(selectedPeriod === period)}
                      onClick={() => setSelectedPeriod(period)}
                    >
                      {period}
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={styles.chartArea}>
                {chartData.map((height, idx) => (
                  <div
                    key={idx}
                    style={styles.chartBar(height, idx === chartData.length - 3)}
                  />
                ))}
              </div>
              
              <div style={styles.chartLabels}>
                {months.map((month) => (
                  <span key={month} style={styles.chartLabel}>{month}</span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { icon: '💳', label: 'Pay Bills', desc: 'Manage payments' },
                { icon: '📊', label: 'Investments', desc: 'View portfolio' },
                { icon: '🎯', label: 'Goals', desc: 'Track savings' },
              ].map((action, idx) => (
                <div key={idx} style={{
                  ...styles.statCard,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: colors.gradientSubtle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                  }}>
                    {action.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>{action.label}</div>
                    <div style={{ fontSize: '12px', color: colors.textMuted }}>{action.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            {/* Balance Card */}
            <div style={styles.balanceCard}>
              <div style={styles.balancePattern} />
              <div style={styles.balanceLabel}>Available Balance</div>
              <div style={styles.balanceValue}>$84,232.00</div>
              <div style={styles.balanceActions}>
                <button style={styles.balanceBtn('primary')}>
                  ↑ Send
                </button>
                <button style={styles.balanceBtn('secondary')}>
                  ↓ Request
                </button>
              </div>
            </div>

            {/* Transactions Card */}
            <div style={styles.transactionsCard}>
              <div style={styles.transactionHeader}>
                <div style={styles.transactionTitle}>Recent Transactions</div>
                <div style={styles.viewAll}>View All →</div>
              </div>
              
              <div style={styles.transactionList}>
                {transactions.map((tx, idx) => (
                  <div key={idx} style={styles.transactionItem}>
                    <div style={styles.transactionIcon(tx.bg)}>
                      {tx.icon}
                    </div>
                    <div style={styles.transactionInfo}>
                      <div style={styles.transactionName}>{tx.name}</div>
                      <div style={styles.transactionDate}>{tx.date}</div>
                    </div>
                    <div style={styles.transactionAmount(tx.positive)}>
                      {tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
