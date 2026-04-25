import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layout/Main';

const ACHIEVEMENTS = [
  {
    badge: 'Excellence Award',
    title: 'Service Excellence — RailYatri Annual Day 2025',
    detail: 'Recognised for outstanding impact across communication platform engineering and AI-powered automation',
    year: '2025',
    modifier: '',
  },
  {
    badge: "India's Topper",
    title: 'NPTEL — Programming in Java',
    detail: 'Secured highest rank nationwide among thousands of participants',
    year: 'Jul – Oct 2023',
    modifier: '',
  },
  {
    badge: "India's Topper",
    title: 'NPTEL — Joy of Computing in Python',
    detail: 'Achieved highest rank nationwide in Python programming',
    year: 'Feb – Jun 2023',
    modifier: '',
  },
  {
    badge: 'Top 10',
    title: 'Reboot Kerala Hackathon 2020',
    detail: 'Only non-engineering college in Top 10 among 30+ colleges statewide',
    year: '2020',
    modifier: 'achievement-top10',
  },
  {
    badge: 'In Progress',
    title: 'IBM AI Engineering Professional Certificate',
    detail: 'Completed Machine Learning with Python (Course 1 of 6) — Coursera',
    year: '2025 – Present',
    modifier: 'achievement-wip',
  },
];

const markdownContent = `
# About Me
Backend-focused Software Engineer with 4+ years of experience building scalable API-driven systems and AI-powered automation pipelines. I specialize in Python-based backend development, communication platform engineering, and production ML pipelines using Whisper, Ollama, and LLMs for audio intelligence.

Currently at **RailYatri / IntrCity SmartBus**, where I architect messaging gateways processing 300K+ daily transactions and deploy on-premise AI systems — no paid cloud APIs required.

# What I Build
- **AI-powered infrastructure** — on-premise ASR pipelines (Whisper + Ollama), RAG-based chatbots (LangGraph + OpenAI), and call intelligence systems
- **High-throughput backends** — event-driven APIs, multi-channel communication gateways, and real-time observability layers
- **Full product lifecycles** — from planning and architecture through deployment and production monitoring

# Interests

- *Football:* I enjoy both playing and watching football for the strategy, teamwork, and energy it brings.
- *Movies:* I like exploring different genres and storytelling styles in cinema.
- *Music:* Music is a big part of my day, and I listen to a wide range of artists and moods.
- *Swimming:* Swimming helps me stay active, focused, and refreshed.
- *Photography:* I enjoy capturing everyday moments and turning them into visual stories.
- *Coding:* I genuinely enjoy learning new tools and improving how I build software.
`;

const About = () => (
  <Main title="About" description="Learn about Athul Sreenivas">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About Me</Link>
          </h2>
          <p>
            (in about{' '}
            {markdownContent.split(/\s+/).filter((w) => w).length}{' '}
            words)
          </p>
        </div>
      </header>

      <div className="achievement-grid">
        {ACHIEVEMENTS.map(({ badge, title, detail, year, modifier }) => (
          <div key={title} className={`achievement-card ${modifier}`}>
            <span className="achievement-badge">{badge}</span>
            <span className="achievement-title">{title}</span>
            <span className="achievement-detail">{detail}</span>
            <span className="achievement-year">{year}</span>
          </div>
        ))}
      </div>

      <Markdown>{markdownContent}</Markdown>
    </article>
  </Main>
);

export default About;
