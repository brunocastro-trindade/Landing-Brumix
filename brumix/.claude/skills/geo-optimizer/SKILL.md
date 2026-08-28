---
name: geo-optimizer
description: Audit and improve this site's visibility to AI answer engines (ChatGPT Search, Perplexity, Claude, Gemini AI Overviews) using the `geo` CLI from geo-optimizer-skill. Scores 0-100 across 8 categories (robots.txt AI-bot access, llms.txt, JSON-LD schema, meta/OG tags, content quality, technical signals, AI-discovery endpoints, brand/entity signals) and generates prioritized, evidence-based fixes. Use when asked to audit, improve, or check AI/GEO/AEO visibility, SEO for AI search, llms.txt, or "geo optimizer".
---

# GEO Optimizer

> Make websites visible and citable by AI search engines (ChatGPT Search, Perplexity, Claude, Gemini AI Overviews). Implements the GEO audit framework plus a 47-method citability engine based on Princeton KDD 2024 research.

Source: https://github.com/Auriti-Labs/geo-optimizer-skill (MIT, by Juan Camilo Auriti). Vendored into this repo on 2026-08-28 so it's available as a project skill; not modified beyond adding this frontmatter and the Prerequisites section below.

## Prerequisites

The `geo` CLI is a separate Python package, not a project dependency — install it once per machine, isolated from this repo's own toolchain:

```bash
pipx install geo-optimizer-skill   # preferred: isolated env, adds `geo` to PATH
# or, zero-install per-invocation:
uvx --from geo-optimizer-skill geo audit --url https://brumixconcreto.com.br
```

## Workflow

### Step 1 — Audit the site

Run `geo audit` first. It scores the site 0–100 across 8 categories and generates a prioritized action list.

```bash
geo audit --url https://yoursite.com
geo audit --url https://yoursite.com --format json
geo audit --sitemap https://yoursite.com/sitemap.xml --max-urls 25
```

Score bands: 0–35 critical · 36–67 foundation · 68–85 good · 86–100 excellent.

### Step 2 — Fix AI crawler access (robots.txt)

Ensure AI citation bots can reach the site. Critical bots that must never be blocked:

- `OAI-SearchBot` — ChatGPT Search citations
- `PerplexityBot` — Perplexity answer citations
- `ClaudeBot` — Claude web citations
- `Google-Extended` — Gemini AI Overviews

To allow citations while blocking training: `Disallow: /` for `GPTBot` and `anthropic-ai`, but keep `Allow: /` for `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`.

### Step 3 — Generate llms.txt

`/llms.txt` tells AI crawlers what the site is about and which pages matter.

```bash
geo llms --base-url https://yoursite.com --site-name "Site Name" --description "One-sentence description." --output ./public/llms.txt
```

Required structure: H1 (site name) → blockquote (description) → H2 sections with descriptive links. Keep under 200 lines. Full spec: https://llmstxt.org

### Step 4 — Inject JSON-LD schema

Add structured data so AI engines understand page types:

```bash
geo schema --type website --url https://yoursite.com
geo schema --type faq --url https://yoursite.com/faq
geo schema --type webapp --url https://yoursite.com/tool
```

Types: `website`, `webapp`, `faq`, `article`, `organization`, `breadcrumb`.

### Step 5 — Optimize content (Princeton GEO methods)

Apply evidence-based improvements ordered by measured impact:

| Priority | Method | Impact | Action |
|----------|--------|--------|--------|
| 🔴 1 | Cite Sources | +30–115% | Add authoritative external links |
| 🔴 2 | Add Statistics | +40% | Include concrete numbers, percentages, dates |
| 🟠 3 | Quotation Addition | +30–40% | Expert quotes: `"Text" — Name, Role, Org, Year` |
| 🟠 4 | Authoritative Tone | +6–12% | Confident, expert framing |
| 🟡 5 | Fluency Optimization | +15–30% | Clear, direct language |
| 🟡 6 | Easy-to-Understand | +8–15% | Define terms, use analogies |
| 🟢 7 | Technical Terms | +5–10% | Correct industry terminology |
| 🟢 8 | Unique Words | +5–8% | Vary vocabulary deliberately |
| ❌ 9 | Keyword Stuffing | ~0% ⚠️ | Do NOT apply — neutral to negative |

Source: Princeton KDD 2024 (10,000 queries on Perplexity.ai). Extended by AutoGEO ICLR 2026, SE Ranking 2025, Growth Marshal 2026 to 47 total methods.

**Never fabricate the content these methods add.** Statistics, quotes, and claims must come from real, verifiable facts about the site/business — pull them from the codebase, the user, or their material. A generic/placeholder stat or an invented quote is worse than none: treat `geo fix`'s auto-generated snippets as drafts to fact-check against real content, never as ship-ready copy.

### Step 6 — Auto-fix all gaps

Generate all missing files at once:

```bash
geo fix --url https://yoursite.com --apply
geo fix --url https://yoursite.com --only robots,llms,schema
```

Creates robots.txt entries, llms.txt, JSON-LD schema, meta tags, and AI discovery endpoints based on audit results. Write generated files to a scratch directory first (`--output-dir`) and review every one before copying anything into the real project — `geo fix` fills unknowns with placeholders (`YOUR_COMPANY`, `{{ISO_DATE}}`, example.com URLs, generic/wrong-language example Q&As) that must be replaced with real facts or removed, never shipped as-is.

## Scoring

8 categories, 100 points total:

| Category | What it measures |
|----------|-----------------|
| `robots` | AI bot access via robots.txt |
| `llms` | llms.txt presence, structure, depth |
| `schema` | JSON-LD types, richness, sameAs |
| `meta` | title, description, canonical, Open Graph |
| `content` | H1, word count, numbers, links, structure |
| `signals` | lang attribute, RSS feed, freshness |
| `ai_discovery` | .well-known/ai.txt, /ai/summary.json, /ai/faq.json |
| `brand_entity` | Name consistency, Knowledge Graph, about/contact |

A client-rendered SPA (no SSR/SSG) scores near-zero on `content` regardless of these fixes, because AI crawlers read raw HTML and never execute JavaScript — the audit calls this out explicitly ("Content likely requires JavaScript to render"). The static `<head>` tags, JSON-LD, and `public/` files above still count (they're in the raw HTML), but real body copy needs either SSR/SSG/prerendering or a `<noscript>` fallback mirroring the real page content.

## CLI Commands

**11 commands** covering audit, remediation, analysis, and monitoring:

```bash
# ── Primary ──
geo audit    --url URL [--format text|json|rich|html|github|ci|pdf] [--sitemap URL]
geo fix      --url URL [--apply] [--only robots,llms,schema,meta,ai_discovery,content]
geo llms     --base-url URL --site-name NAME --description DESC --output FILE
geo schema   --type TYPE --url URL [--inject FILE]

# ── Analysis ──
geo diff       --before URL --after URL
geo history    --url URL
geo coherence  --url URL

# ── Monitoring ──
geo monitor  --domain DOMAIN
geo track    --url URL [--report] [--output FILE]

# ── Utility ──
geo logs       --path LOGFILE
geo snapshots  --url URL [--save | --compare SNAPSHOT_ID]
```

Note: `geo audit` refuses `localhost`/private hosts (SSRF guard) — to check a local build before it's deployed, verify the individual signals manually (curl `robots.txt`/`llms.txt`/`ai/*.json`, parse `<script type="application/ld+json">` blocks, count words/headings in the raw HTML response) rather than pointing the CLI at it.

## Output Formats

7 formats for different workflows:

| Format | Flag | Use case |
|--------|------|----------|
| text | `--format text` | Terminal (default) |
| json | `--format json` | Programmatic consumption, CI pipelines |
| rich | `--format rich` | Colored terminal with ASCII dashboard |
| html | `--format html` | Self-contained HTML report |
| github | `--format github` | GitHub Actions annotations |
| ci | `--format ci` | CI/CD systems (structured annotations) |
| pdf | `--format pdf` | Client-facing reports |

## Informational Checks

10 non-scoring checks that provide deeper analysis beyond the 0–100 score:

| Check | What it detects |
|-------|-----------------|
| WebMCP Readiness | SearchAction, labeled forms, tool attributes for AI agents |
| Negative Signals | CTA overload, thin content, keyword stuffing, boilerplate |
| Prompt Injection | LLM instructions in content, HTML comment injection, hidden text |
| Trust Stack | 5-layer trust score (technical, identity, social, academic, consistency) |
| RAG Chunk Readiness | Content structure optimized for retrieval-augmented generation |
| Embedding Proximity | Semantic alignment between title, headings, and body content |
| Content Decay | Temporal signals indicating stale or outdated content |
| Platform Citation | Per-platform citation profile (ChatGPT vs Perplexity vs Gemini) |
| Context Window | Content length optimization for LLM context windows |
| Instruction Readiness | Content structure that helps LLMs follow extraction patterns |

## MCP Integration

12 tools and 5 resources for Claude Code, Cursor, Windsurf, and any MCP client (requires running `geo-mcp` separately and registering it as an MCP server — not configured in this repo):

**Tools:**

| Tool | Description |
|------|-------------|
| `geo_audit` | Full GEO audit (score 0–100) |
| `geo_fix` | Generate automatic fixes |
| `geo_llms_generate` | Generate llms.txt from sitemap |
| `geo_citability` | Citability score (47 methods) |
| `geo_schema_validate` | Validate JSON-LD schema |
| `geo_compare` | Compare GEO scores across sites (max 5) |
| `geo_gap_analysis` | Competitive gap analysis with priorities |
| `geo_ai_discovery` | Check AI discovery endpoints |
| `geo_check_bots` | Check AI bot access via robots.txt |
| `geo_trust_score` | Trust Stack Score (5-layer, grade A–F) |
| `geo_negative_signals` | Negative signals detection |
| `geo_factual_accuracy` | Factual claims and sourcing audit |

**Resources:** `geo://ai-bots` · `geo://score-bands` · `geo://methods` · `geo://changelog` · `geo://ai-discovery-spec`

## Plugin System

Extend the audit with custom checks via entry points:

```python
# pyproject.toml
[project.entry-points."geo_optimizer.checks"]
my_check = "my_package:MyCheck"
```

Plugins implement the `AuditCheck` protocol (`name`, `description`, `max_score`, `run()`). Plugin results appear in the audit output but do not affect the base score.

---

*GEO Optimizer by Juan Camilo Auriti — https://github.com/Auriti-Labs/geo-optimizer-skill*
