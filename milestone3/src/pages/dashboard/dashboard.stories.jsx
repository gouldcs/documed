import React from 'react'
import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'
import Dashboard from './Dashboard'

export default {
  title: 'pages/dashboard/Dashboard',
  decorators: [centered, withKnobs],
}

export const basic = () => <Dashboard />