"use client";

import { useEffect } from "react";

const skills = ["Java", "Spring Boot", "SQL", "Git / GitHub"];

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="長島 勇太 トップへ">YN<span>.</span></a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="social-link" href="https://x.com/Stylen_AI" target="_blank" rel="noopener noreferrer" aria-label="X（Twitter）">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2.25h3.68l-8.04 9.19L24 21.75h-7.41l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 2.25h7.6l5.24 6.93 6.06-6.93Zm-1.29 17.3h2.04L6.49 4.33H4.3l13.31 15.22Z" /></svg>
          </a>
        </div>
      </nav>

      <section className="hero wrap reveal" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AVAILABLE FOR PROJECTS</p>
          <p className="intro">YUTA NAGASHIMA / FREELANCE ENGINEER</p>
          <h1>フリーランス<br /><em>システムエンジニア</em></h1>
          <p className="lead">Javaを中心に、堅牢で使いやすいシステムを設計・開発します。<br />ビジネスの課題を、確かな技術で前進させます。</p>
          <a className="button" href="#contact">お問い合わせ <span>↗</span></a>
        </div>
        <div className="code-card" aria-hidden="true">
          <div className="window-bar"><i /><i /><i /><b>Application.java</b></div>
          <pre><code><span className="purple">public class</span> <span className="yellow">Engineer</span> {'{'}{"\n"}  <span className="purple">private final</span> String name ={"\n"}    <span className="green">"Yuta Nagashima"</span>;{"\n\n"}  <span className="purple">public</span> Solution build() {'{'}{"\n"}    <span className="purple">return new</span> <span className="yellow">Solution</span>({"\n"}      quality, reliability{"\n"}    );{"\n"}  {'}'}{"\n"}{'}'}</code></pre>
          <div className="status"><span /> SYSTEM READY</div>
        </div>
      </section>

      <section className="about wrap section reveal" id="about">
        <p className="section-no">01 / ABOUT</p>
        <div><h2>技術で、<br />信頼をつくる。</h2></div>
        <p className="body-copy">Javaを主軸とするフリーランスのシステムエンジニアです。要件の理解から設計・実装、運用を見据えた改善まで、一つひとつ丁寧に取り組みます。長く使われるシステムに必要な、読みやすさと堅牢さを大切にしています。</p>
      </section>

      <section className="skills-section reveal" id="skills"><div className="wrap">
        <p className="section-no">02 / SKILLS</p>
        <h2>専門領域</h2>
        <div className="skills-grid">{skills.map((skill, i) => <article className="skill" key={skill}><span>0{i + 1}</span><h3>{skill}</h3><p>{i === 0 ? "業務システム開発" : i === 1 ? "Webアプリケーション構築" : i === 2 ? "データベース設計・操作" : "チーム開発・品質管理"}</p><b>↗</b></article>)}</div>
      </div></section>

      <section className="contact wrap section reveal" id="contact">
        <p className="section-no">03 / CONTACT</p>
        <div><h2>一緒に、次の<br /><em>一歩を。</em></h2><p>ご相談・お仕事のご依頼は、お気軽にお問い合わせください。</p></div>
        <a className="mail" href="https://github.com/YutaNagashima1031/portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHubリポジトリを開く" title="GitHubリポジトリを開く">
          <svg className="gmail-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#EA4335" d="M3 6.8v10.4l5.7-5.2L3 6.8Z" />
            <path fill="#34A853" d="M15.3 12 21 17.2V6.8L15.3 12Z" />
            <path fill="#FBBC04" d="M21 6.8 12 14.5 3 6.8V4.2c0-.7.5-1.2 1.2-1.2h1.5L12 8.4 18.3 3h1.5c.7 0 1.2.5 1.2 1.2v2.6Z" />
            <path fill="#C5221F" d="M3 17.2V6.8l3.3 3V21H4.2C3.5 21 3 20.5 3 19.8v-2.6Z" />
            <path fill="#4285F4" d="M21 17.2V6.8l-3.3 3V21h2.1c.7 0 1.2-.5 1.2-1.2v-2.6Z" />
          </svg>
        </a>
      </section>
      <footer className="wrap">
        <span>© 2026 YN</span><span>FREELANCE SYSTEM ENGINEER</span>
      </footer>
    </main>
  );
}
