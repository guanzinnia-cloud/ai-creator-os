export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">AI-1st <span>Builder</span></span>
          <p className="footer-tagline">
            THE AUTOMATED CREATIVE
            <br />
            COMMERCIALIZATION ENGINE
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>产品</h4>
            <a href="#highlights">核心亮点</a>
            <a href="#agents">Agent 矩阵</a>
            <a href="#pipeline">自我进化</a>
            <a href="#product">Creator Workflow v1</a>
          </div>
          <div className="footer-col">
            <h4>资源</h4>
            <a href="https://github.com/guanzinnia-cloud/ai-creator-os" target="_blank" rel="noopener noreferrer">
              GitHub 仓库
            </a>
            <a href="https://github.com/guanzinnia-cloud/ai-creator-os#readme" target="_blank" rel="noopener noreferrer">
              README 速览
            </a>
          </div>
          <div className="footer-col">
            <h4>社区</h4>
            <a href="https://github.com/guanzinnia-cloud/ai-creator-os/discussions" target="_blank" rel="noopener noreferrer">
              Discussions
            </a>
            <a href="https://github.com/guanzinnia-cloud/ai-creator-os/issues" target="_blank" rel="noopener noreferrer">
              Issues
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Built with Agents · 6 Skills, 1 human ·{' '}
          <a href="https://github.com/guanzinnia-cloud/ai-creator-os" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
