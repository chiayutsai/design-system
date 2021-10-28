// example
// https://github.com/reduxjs/reselect
// import { createSelector } from 'reselect'

export * from './modal'

export * from './session'

// appReadySelector with multi sub selector
export const appReadySelector = state => state.appReady

export const loadingSelector = state => state.loading

export const localeSelector = state => state.locale

export const platformSelector = state => state.platform

export const darkModeSelector = state => state.darkMode

// TODO: replace -1 with your logic
export const sportTypeIdSelector = () => -1 // state.gameType.sportTypeId

export const leagueIdSelector = () => -1 // state.gameType.leagueId
