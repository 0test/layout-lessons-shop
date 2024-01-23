import '../css/style.css'
import '../scss/main.scss'
// Import our custom CSS

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
/*
(() => {
	'use strict'
  
	const storedTheme = localStorage.getItem('theme')
  
	const getPreferredTheme = () => {
	  if (storedTheme) {
		return storedTheme
	  }
  
	  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}
  
	const setTheme = function (theme) {
	  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.setAttribute('data-bs-theme', 'dark')
	  } else {
		document.documentElement.setAttribute('data-bs-theme', theme)
	  }
	}
  
	setTheme(getPreferredTheme())
  
	const showActiveTheme = (theme, focus = false) => {
	  const themeSwitcher = document.querySelector('#bd-theme')
  
	  if (!themeSwitcher) {
		return
	  }
  
	  const themeSwitcherText = document.querySelector('#bd-theme-text')
	  const activeThemeIcon = document.querySelector('.theme-icon-active use')
	  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
	  const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
	  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
		element.classList.remove('active')
		element.setAttribute('aria-pressed', 'false')
	  })
  
	  btnToActive.classList.add('active')
	  btnToActive.setAttribute('aria-pressed', 'true')
	  activeThemeIcon.setAttribute('href', svgOfActiveBtn)
	  const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
	  themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
	  if (focus) {
		themeSwitcher.focus()
	  }
	}
  
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
	  if (storedTheme !== 'light' || storedTheme !== 'dark') {
		setTheme(getPreferredTheme())
	  }
	})
  
	window.addEventListener('DOMContentLoaded', () => {
	  showActiveTheme(getPreferredTheme())
  
	  document.querySelectorAll('[data-bs-theme-value]')
		.forEach(toggle => {
		  toggle.addEventListener('click', () => {
			const theme = toggle.getAttribute('data-bs-theme-value')
			localStorage.setItem('theme', theme)
			setTheme(theme)
			showActiveTheme(theme, true)
		  })
		})
	})
  })()
  */