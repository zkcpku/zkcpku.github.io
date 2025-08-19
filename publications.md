---
layout: page
title: Publications
permalink: /publications/
---

<div class="ai-section">
  <h2>📚 Research Publications</h2>
  
  <!-- Search and Filter -->
  <div class="publications-controls">
    <div class="search-box">
      <input type="text" id="pub-search" placeholder="Search publications..." class="ai-search-input">
    </div>
    <div class="filter-tags">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="conference">Conferences</button>
      <button class="filter-btn" data-filter="journal">Journals</button>
      <button class="filter-btn" data-filter="preprint">Preprints</button>
    </div>
  </div>
</div>

---

## Selected Preprints

<div class="publications-grid">

<div class="publication-card ai-card preprint" data-year="2025">
  <div class="pub-header">
    <span class="pub-badge preprint">arXiv 2025</span>
    <span class="pub-date">2025</span>
  </div>
  <h3 class="pub-title">StackTrans: From Large Language Model to Large Pushdown Automata Model</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Ge Li, Jia Li, Huangzhao Zhang, Yihong Dong, Jia Li, Jingjing Xu, and Zhi Jin</p>
  <p class="pub-description">Bridging formal language theory with modern LLMs through pushdown automata architectures.</p>
  
  <div class="pub-example">
    <div class="ai-terminal">
      <div class="ai-terminal__header">
        <div class="ai-terminal__header-buttons">
          <div class="ai-terminal__header-button ai-terminal__header-button--close"></div>
          <div class="ai-terminal__header-button ai-terminal__header-button--minimize"></div>
          <div class="ai-terminal__header-button ai-terminal__header-button--maximize"></div>
        </div>
        <div class="ai-terminal__header-title">StackTrans Architecture</div>
      </div>
      <div class="ai-terminal__content">
        <div class="prompt">class StackTransformer(nn.Module):</div>
        <div class="output">    def __init__(self, vocab_size, d_model=512):</div>
        <div class="output">        super().__init__()</div>
        <div class="output">        self.stack = PushdownStack(d_model)</div>
        <div class="output">        self.transformer = TransformerLayer(d_model)</div>
        <div class="comment"># Novel pushdown automata integration</div>
      </div>
    </div>
  </div>
  
  <div class="pub-tags">
    <span class="ai-tag">Automata</span>
    <span class="ai-tag">LLMs</span>
    <span class="ai-tag ai-tag--primary">Formal Methods</span>
  </div>
</div>

<div class="publication-card ai-card preprint" data-year="2025">
  <div class="pub-header">
    <span class="pub-badge preprint">arXiv 2025</span>
    <span class="pub-date">2025</span>
  </div>
  <h3 class="pub-title">Computational Thinking Reasoning in Large Language Models</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Ge Li, Jia Li, Huangzhao Zhang, Jingjing Xu, Hao Zhu, Lecheng Wang, Jia Li, Yihong Dong, Jing Mai, Bin Gu, and Zhi Jin</p>
  <p class="pub-description">Enhancing LLMs with computational thinking paradigms for better problem decomposition and solution synthesis.</p>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--secondary">Computational Thinking</span>
    <span class="ai-tag">Reasoning</span>
    <span class="ai-tag">LLMs</span>
  </div>
</div>

<div class="publication-card ai-card preprint" data-year="2023">
  <div class="pub-header">
    <span class="pub-badge preprint">arXiv 2023</span>
    <span class="pub-date">2023</span>
  </div>
  <h3 class="pub-title">ToolCoder: Teach Code Generation Models to Use API Search Tool</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Huangzhao Zhang, Ge Li, Jia Li, Zhuo Li, Zhi Jin</p>
  <p class="pub-description">Tool-enhanced learning method embedding external API search tools into code generation models.</p>
  
  <div class="pub-example">
    ```python
    # ToolCoder: API-enhanced code generation
    def enhanced_code_generation(prompt, api_tools):
        # Step 1: Analyze requirements
        requirements = parse_requirements(prompt)
        
        # Step 2: Search relevant APIs
        relevant_apis = api_tools.search(requirements)
        
        # Step 3: Generate code with API context
        code = llm.generate(prompt, context=relevant_apis)
        
        return code
    ```
  </div>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--accent">Tool Learning</span>
    <span class="ai-tag">API Search</span>
    <span class="ai-tag">Code Generation</span>
  </div>
</div>

</div>

---

## Selected Publications

<div class="publications-grid">

<div class="publication-card ai-card ai-card--featured conference" data-year="2026">
  <div class="pub-header">
    <span class="pub-badge conference">ICSE 2026</span>
    <span class="pub-date">2026</span>
  </div>
  <h3 class="pub-title">SEAlign: Alignment Training for Software Engineering Agent</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Huangzhao Zhang, Ge Li, Jinliang You, Jia Li, Yunfei Zhao, Zhi Jin</p>
  <p class="pub-description">A novel alignment framework aimed at bridging the gap between code generation models and real-world software engineering agent.</p>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--primary">AI4SE</span>
    <span class="ai-tag ai-tag--secondary">Alignment</span>
    <span class="ai-tag">Agents</span>
  </div>
</div>

<div class="publication-card ai-card conference" data-year="2025">
  <div class="pub-header">
    <span class="pub-badge conference">ACL 2025</span>
    <span class="pub-date">2025</span>
  </div>
  <h3 class="pub-title">CodeDPO: Aligning Code Models with Self Generated and Verified Source Code</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Ge Li, Yihong Dong, Jingjing Xu, Jun Zhang, Jing Su, Yongfei Liu, Zhi Jin</p>
  <p class="pub-description">A preference optimization framework for code models that focuses on both correctness and efficiency without depending on external resources.</p>
  
  <div class="pub-example">
    <div class="ai-code-editor">
      <div class="ai-code-editor__header">
        <div class="ai-code-editor__header-tab ai-code-editor__header-tab--active">
          dpo_training.py
          <span class="ai-code-editor__header-tab-close">×</span>
        </div>
      </div>
      <div class="ai-code-editor__content">
        <div class="line-numbers">
          <span class="line-number">1</span>
          <span class="line-number">2</span>
          <span class="line-number">3</span>
          <span class="line-number">4</span>
          <span class="line-number">5</span>
        </div>
        <div class="code-content">
          <div><span class="keyword">def</span> <span class="function">code_dpo_loss</span>(<span class="variable">chosen</span>, <span class="variable">rejected</span>):</div>
          <div>    <span class="comment"># Compute preference-based loss</span></div>
          <div>    <span class="variable">chosen_logits</span> = <span class="variable">model</span>(<span class="variable">chosen</span>)</div>
          <div>    <span class="variable">rejected_logits</span> = <span class="variable">model</span>(<span class="variable">rejected</span>)</div>
          <div>    <span class="keyword">return</span> <span class="function">dpo_loss</span>(<span class="variable">chosen_logits</span>, <span class="variable">rejected_logits</span>)</div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--primary">Alignment</span>
    <span class="ai-tag">Code Models</span>
    <span class="ai-tag ai-tag--accent">DPO</span>
  </div>
</div>

<div class="publication-card ai-card conference" data-year="2024">
  <div class="pub-header">
    <span class="pub-badge conference">ACL 2024</span>
    <span class="pub-date">2024</span>
  </div>
  <h3 class="pub-title">CodeAgent: Enhancing Code Generation with Tool-Integrated Agent Systems</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Jia Li, Ge Li, Xianjie Shi, Zhi Jin</p>
  <p class="pub-description">Integrating multiple programming assistance tools into large models for practical problem-solving.</p>
  
  <div class="pub-example">
    ```python
    class CodeAgent:
        def __init__(self):
            self.tools = {
                'compiler': CompilerTool(),
                'debugger': DebuggerTool(),
                'tester': TestingTool(),
                'docs': DocumentationTool()
            }
        
        def solve_problem(self, problem):
            # Multi-tool reasoning for code generation
            solution = self.generate_with_tools(problem)
            verified = self.tools['tester'].verify(solution)
            return solution if verified else self.refine(solution)
    ```
  </div>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--accent">Agents</span>
    <span class="ai-tag">Tool Integration</span>
    <span class="ai-tag">Code Generation</span>
  </div>
</div>

<div class="publication-card ai-card conference award" data-year="2023">
  <div class="pub-header">
    <span class="pub-badge conference award">ICPC 2023</span>
    <span class="award-badge">🏆 Distinguished Paper</span>
  </div>
  <h3 class="pub-title">Implant Global and Local Hierarchy Information to Sequence based Code Representation Models</h3>
  <p class="pub-authors"><strong>Kechi Zhang</strong>, Zhou Li, Zhi Jin, Ge Li</p>
  <p class="pub-description">A novel Transformer structure for modeling both sequence and structural information in source code.</p>
  
  <div class="pub-example">
    <div class="ai-terminal">
      <div class="ai-terminal__header">
        <div class="ai-terminal__header-buttons">
          <div class="ai-terminal__header-button ai-terminal__header-button--close"></div>
          <div class="ai-terminal__header-button ai-terminal__header-button--minimize"></div>
          <div class="ai-terminal__header-button ai-terminal__header-button--maximize"></div>
        </div>
        <div class="ai-terminal__header-title">Hierarchy Transformer</div>
      </div>
      <div class="ai-terminal__content">
        <div class="prompt">Model Architecture:</div>
        <div class="output">├── Sequence Encoder (Local)</div>
        <div class="output">├── Hierarchy Encoder (Global)</div>
        <div class="output">├── Fusion Layer</div>
        <div class="output">└── Task-specific Head</div>
        <div class="comment"># Combines sequence + structural info</div>
      </div>
    </div>
  </div>
  
  <div class="pub-tags">
    <span class="ai-tag ai-tag--primary">Transformers</span>
    <span class="ai-tag">Code Representation</span>
    <span class="ai-tag ai-tag--secondary">Hierarchy</span>
  </div>
</div>

</div>

---

## Research Impact & Metrics

<div class="impact-grid">
  <div class="impact-card">
    <div class="impact-icon">📚</div>
    <div class="impact-value">15+</div>
    <div class="impact-label">Publications</div>
  </div>
  
  <div class="impact-card">
    <div class="impact-icon">📈</div>
    <div class="impact-value">200+</div>
    <div class="impact-label">Citations</div>
  </div>
  
  <div class="impact-card">
    <div class="impact-icon">🏆</div>
    <div class="impact-value">3</div>
    <div class="impact-label">Awards</div>
  </div>
  
  <div class="impact-card">
    <div class="impact-icon">🌐</div>
    <div class="impact-value">10+</div>
    <div class="impact-label">Collaborations</div>
  </div>
</div>

<style>
.publications-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;
}

.search-box {
  flex: 1;
  max-width: 400px;
}

.ai-search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  background: var(--secondary-bg);
  color: var(--primary-text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.ai-search-input:focus {
  outline: none;
  border-color: var(--ai-primary);
  box-shadow: var(--focus-ring);
}

.filter-tags {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-medium);
  background: transparent;
  color: var(--secondary-text);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--ai-primary);
  color: white;
  border-color: var(--ai-primary);
}

.publications-grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.publication-card {
  position: relative;
  transition: all var(--transition-normal);
}

.publication-card.hidden {
  display: none;
}

.pub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pub-badge {
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--font-mono);
  
  &.conference {
    background: var(--ai-primary);
    color: white;
  }
  
  &.journal {
    background: var(--ai-secondary);
    color: white;
  }
  
  &.preprint {
    background: var(--ai-accent);
    color: white;
  }
}

.award-badge {
  background: #ffd700;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.pub-date {
  color: var(--accent-text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.pub-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--primary-text);
}

.pub-authors {
  color: var(--secondary-text);
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.pub-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.pub-example {
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.impact-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all var(--transition-normal);
}

.impact-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.impact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.impact-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--ai-primary);
  margin-bottom: 0.5rem;
}

.impact-label {
  color: var(--secondary-text);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .publications-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-tags {
    justify-content: center;
  }
  
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<script>
// Publications search and filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('pub-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const publicationCards = document.querySelectorAll('.publication-card');
  
  // Search functionality
  searchInput?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    publicationCards.forEach(card => {
      const title = card.querySelector('.pub-title')?.textContent.toLowerCase() || '';
      const authors = card.querySelector('.pub-authors')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.pub-description')?.textContent.toLowerCase() || '';
      
      const matches = title.includes(query) || authors.includes(query) || description.includes(query);
      card.style.display = matches ? 'block' : 'none';
    });
  });
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      
      publicationCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          const matches = card.classList.contains(filter);
          card.style.display = matches ? 'block' : 'none';
        }
      });
    });
  });
});
</script>

