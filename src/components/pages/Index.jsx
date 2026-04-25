import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layout/Main';

const STATS = [
  { number: '300K+', label: 'daily transactions processed' },
  { number: '4+',    label: 'years in production systems' },
  { number: '2×',    label: "India's NPTEL Topper" },
  { number: '0',     label: 'paid APIs in our AI stack' },
];

const STACK = [
  'Python', 'FastAPI', 'LangGraph', 'Whisper ASR',
  'Ollama', 'RAG Pipelines', 'Docker', 'AWS', 'RabbitMQ', 'OpenAI API',
];

const Index = () => (
  <Main description="Athul Sreenivas — Backend Engineer & AI Systems Builder">
    <article className="post" id="index">
      <div className="hero-section">

        <p className="hero-eyebrow">Backend Engineer &amp; AI Systems Builder</p>

        <h1 className="hero-headline">
          I build backend systems <br/>that move at scale.
        </h1>

        <p className="hero-sub">
          Currently at <strong>RailYatri / IntrCity SmartBus</strong> — architecting
          AI-powered communication infrastructure, on-premise LLM pipelines, and
          speech intelligence systems processing 300K+ daily transactions.
        </p>

        <div className="hero-stats">
          {STATS.map(({ number, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-number">{number}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-stack">
          {STACK.map((tag) => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>

        <div className="hero-cta">
          <Link to="/resume" className="button hero-btn-primary">View Resume</Link>
          <Link to="/projects" className="button">See Projects</Link>
          <Link to="/contact" className="button">Get in Touch</Link>
        </div>

      </div>
    </article>
  </Main>
);

export default Index;
