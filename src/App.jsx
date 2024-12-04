import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Layout from '../src/components/Layout'
import Roadmap from '../pages/Roadmap'
import KnownIssues from '../pages/KnownIssues'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/known-issues" element={<KnownIssues />} />
      </Routes>
    </Layout>
  )
}

export default App