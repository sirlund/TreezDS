# TreezDS AI Agent System

This directory contains AI agent configurations for Claude Code to help manage the TreezDS design system.

## Overview

The agent system provides specialized AI assistants that understand TreezDS architecture, follow best practices from industry-leading design systems (GitLab, Carbon, Atlassian), and automate common workflows.

## Directory Structure

```
.claude/
├── README.md                          # This file
├── project-instructions.md            # Project context for Claude
├── agents/                            # Specialized agent instructions
│   └── design-tokens-agent.md        # Token system specialist
├── commands/                          # Slash commands for quick actions
│   ├── tokens-transform.md           # Transform Figma exports
│   ├── tokens-audit.md               # Audit token usage
│   └── tokens-add-semantic.md        # Add new semantic tokens
└── reports/                           # Audit reports (auto-generated)
    └── token-audit-{date}.md         # Token audit reports
```

## Available Agents

### 1. Design Tokens Agent

**Purpose**: Translate Figma exports to modern, scalable token systems

**Expertise**:
- Figma JSON to Primitive token transformation
- Semantic token curation
- Token hierarchy maintenance (primitive to semantic to component)
- Quality auditing (hardcoded values, broken references)
- Token system optimization

**When to use**:
- Importing new tokens from Figma
- Creating semantic tokens for components
- Auditing token usage
- Migrating components to use tokens
- Fixing broken token references

**Documentation**: `.claude/agents/design-tokens-agent.md`

### Future Agents (Planned)

2. **Figma MCP Agent** - Extract designs from Figma, generate pixel-perfect components
3. **Storybook Agent** - Create comprehensive component documentation
4. **Component Generator Agent** - Scaffold new components with all files
5. **Design System QA Agent** - Audit for accessibility, naming, token usage
6. **Icon System Agent** - Manage icon imports and type generation
7. **CSS Architecture Agent** - Enforce modern CSS patterns and organization

## Slash Commands

Quick-action commands that activate agents for specific tasks.

### Token Commands

#### /tokens-transform
Transform Figma JSON exports into primitive tokens.

**Usage**:
1. Export tokens from Figma to `imported-from-figma/*.json`
2. Run: `/tokens-transform`
3. Agent runs `npm run tokens:transform` and verifies output

#### /tokens-audit
Audit the token system for quality issues.

**Checks**:
- Hardcoded values in semantic tokens
- Hardcoded values in components
- Primitives used directly in components
- Broken token references
- Missing primitive imports

**Output**: Detailed report saved to `.claude/reports/token-audit-{date}.md`

#### /tokens-add-semantic
Guided workflow to add new semantic tokens.

**Process**:
1. Identifies component and token needs
2. Maps primitives to semantic meanings
3. Creates TypeScript and CSS tokens
4. Verifies imports and documentation
5. Offers to test in Storybook

## How to Use

### Invoking Agents

**Option 1: Slash Commands** (Recommended for common tasks)
```
/tokens-transform
/tokens-audit
/tokens-add-semantic
```

**Option 2: Natural Language** (For complex or custom tasks)
```
"Transform the Figma color exports to tokens"
"Audit our components for hardcoded values"
"Help me add semantic tokens for the new Card component"
```

Claude will automatically activate the appropriate agent based on your request.

### Agent Behavior

When an agent is activated:
1. **Context Loading**: Agent reads its instruction file (`.claude/agents/*.md`)
2. **Task Execution**: Follows structured workflow for the task
3. **Validation**: Checks work against quality criteria
4. **Reporting**: Provides summary and next steps
5. **Offers Help**: Suggests follow-up actions

### Best Practices

**DO**:
- Use slash commands for standard workflows
- Let agents handle multi-step processes
- Review agent output and suggestions
- Ask agents to explain their decisions
- Use agents for knowledge about design systems

**DON'T**:
- Manually edit primitive tokens (use `/tokens-transform`)
- Skip quality checks (use `/tokens-audit` regularly)
- Hardcode values in components (use `/tokens-add-semantic`)

## Token System Quick Reference

### 3-Layer Architecture

```
Figma → Primitives → Semantics → Components
```

**Layer 1: Primitives** (`src/figma-tokens/`)
- Auto-generated from Figma
- Never edit manually
- Never use directly in components
- Prefix: `--primitive-*`

**Layer 2: Semantics** (`src/design-tokens/`)
- Manually curated
- MUST reference primitives
- NO hardcoded values
- Prefix: `--color-*`, `--spacing-*`, etc.

**Layer 3: Components** (`src/components/`)
- Use semantic tokens only
- NO primitives, NO hardcoded values

### Common Workflows

**Import new tokens from Figma**:
```
1. Export JSON from Figma → imported-from-figma/
2. /tokens-transform
3. Update semantic tokens to use new primitives
4. /tokens-audit to verify
```

**Add new semantic tokens**:
```
1. /tokens-add-semantic
2. Follow guided workflow
3. Test in component
4. Document in CHANGELOG.md
```

**Fix hardcoded values**:
```
1. /tokens-audit (find violations)
2. Agent offers to fix automatically
3. Review changes
4. Verify in Storybook
```

## Quality Standards

Agents enforce these quality rules:

### Tokens
- Primitives auto-generated only
- Semantics reference primitives (TS + CSS)
- Zero hardcoded hex/px values
- Type-safe TypeScript exports
- Global CSS imports

### Components
- Use semantic tokens only
- CSS Modules for styling
- No hardcoded colors/sizes
- Proper CSS organization
- Token usage documented

### Documentation
- Major changes in CHANGELOG.md
- Component READMEs updated
- Storybook stories comprehensive
- Accessibility notes included

## Audit Reports

All audit reports are automatically saved to `.claude/reports/` directory.

**Report naming**: `token-audit-YYYY-MM-DD.md`

**Contents**:
- Health score (0-100)
- Test results (passed/failed)
- Violations with file locations
- Recommendations with code examples
- Action items checklist
- Token metrics

**Retention policy**:
- Keep last 5 audits for tracking
- Archive older reports to `docs/audits/archive/`
- Reports are git-tracked to show improvement over time

See `.claude/reports/README.md` for more details.

## Extending the Agent System

### Adding a New Agent

1. **Create agent file**: `.claude/agents/new-agent.md`
2. **Define role and expertise**
3. **Document workflows and patterns**
4. **Add quality checklists**
5. **Create activation triggers**
6. **Add to this README**

### Adding a New Command

1. **Create command file**: `.claude/commands/new-command.md`
2. **Add description frontmatter**
3. **Reference agent to activate**
4. **Define clear steps**
5. **Document in this README**

### Template Structure

See `.claude/agents/design-tokens-agent.md` for comprehensive agent template.

Key sections:
- Role & Expertise
- Core Responsibilities
- Architecture & Patterns
- Workflows & Recipes
- Quality Checklists
- Troubleshooting
- Success Criteria

## Reference Documentation

### Design System Inspiration
- [GitLab Design System](https://design.gitlab.com/product-foundations/design-tokens) - Token hierarchy, intent-based naming
- [Carbon Design System](https://carbondesignsystem.com/) - Constraint-based system, CSS patterns
- [Atlassian Design System](https://atlassian.design/foundations/tokens) - Dual-layer tokenization, theme switching

### Project Context
- `.claude/project-instructions.md` - Complete project overview
- `docs/CHANGELOG.md` - Project history
- `src/design-tokens/README.md` - Token usage guide
- Component READMEs - Component-specific patterns

## Troubleshooting

### Agent not activating?
- Check command spelling (e.g., `/tokens-transform` not `/token-transform`)
- Try natural language: "Transform Figma tokens"
- Verify agent file exists in `.claude/agents/`

### Unexpected agent behavior?
- Review agent instructions in `.claude/agents/*.md`
- Check if project patterns have changed
- Update agent file with new patterns
- Increment version number in agent file

### Quality check failing?
- Run `/tokens-audit` for detailed report
- Check CHANGELOG.md for recent changes
- Verify Figma exports are up-to-date
- Ensure all CSS files are imported

## Version History

- **v1.0** (2025-10-21): Initial agent system with Design Tokens Agent + Reports
- **Planned**: Figma MCP Agent, Storybook Agent, Component Generator

## Contributing

When adding new agents or updating existing ones:

1. Follow template structure from Design Tokens Agent
2. Include comprehensive examples and patterns
3. Add quality checklists and success criteria
4. Document in CHANGELOG.md
5. Update this README

## Support

For questions about:
- **Agent system**: See this README and agent instruction files
- **Token system**: See `.claude/agents/design-tokens-agent.md`
- **Project structure**: See `.claude/project-instructions.md`
- **Component patterns**: See component READMEs in `src/components/`

---

**Last Updated**: 2025-10-21
**Version**: 1.0
**Maintained By**: TreezDS Team
