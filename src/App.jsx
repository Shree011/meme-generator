import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'

export default function App () {
	return (
		<div>
			<Navbar />
			<MainPage />
		</div>
	)
}