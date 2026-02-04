# AI Agent Call History

## 📖 Introduction

AI Agent Call History shows all calls handled by AI Agents including transcripts, talk time, and performance metrics.

---

## 🎯 Data Available

| Data | Description |
|------|-------------|
| Date/Time | When call occurred |
| AI Agent | Which agent handled call |
| Caller | Caller phone number |
| Duration | Total call time |
| Turns | Conversation exchanges |
| Barge-ins | Interruptions |
| Transcript | Full conversation text |
| Outcome | Transfer, Resolved, Hung up |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → AI Agent Call History`

<!-- [IMG: menu-navigation-ai-call-history] -->

---

## 📝 Call History View

<!-- [IMG: ai-call-history-view] -->

| Column | Description |
|--------|-------------|
| **Date** | Call timestamp |
| **Agent** | AI Agent name |
| **Caller** | Phone number |
| **Duration** | Call length |
| **Turns** | Conversation exchanges |
| **Outcome** | How call ended |
| **Actions** | View transcript |

### Viewing a Transcript

Click a call to view the full conversation:

```
AI: Hello! Thank you for calling Acme Corp. How can I help you?
Caller: Hi, I'd like to know your business hours.
AI: Our office hours are Monday through Friday, 9 AM to 5 PM Eastern.
Caller: Thanks! Can I speak to sales?
AI: Of course! Let me transfer you to our sales team.
[Call transferred to extension 1001]
```

---

## 🚀 Practical Example

### Review AI Performance

1. Filter by last 7 days
2. Sort by Duration (longest first)
3. Review long calls for improvement opportunities
4. Check transcripts for misunderstandings

---

## 💡 Tips

> [!TIP]
> **Review regularly**: Identify common questions to improve prompts.

> [!TIP]
> **Check outcomes**: High transfer rate may indicate knowledge gaps.

> [!TIP]
> **Use for training**: Learn from successful conversations.

---

## 🔗 Related Modules

- [AI Agents](../12-ai-integration/ai-agents.md) — Configure AI assistants
- [CDR](cdr.md) — All call records

---

*← Previous: [Queue Reports](queue-reports.md)*
