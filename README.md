# Jivitesh's Portfolio — AI Product Interaction and Creative Tools

I am exploring AI product and interaction design for consumer apps and creative tools. I am drawn to interfaces that help someone move from a rough idea to a next step, especially when the interaction involves creativity, game-like choices, or an AI response that may need refinement.

This repository is becoming a small portfolio and research site. I am using it to explain the work I can show, how I reached a design direction, and what I still need to learn. I do not want the portfolio to be a list of tools or a set of polished screens without context. I want a reviewer to be able to follow a question, inspect evidence, see where my interpretation begins, and understand what I plan to check next.

> **The short version:** I want to develop *Idea Thinker*, my guided ideation concept, into a focused case study about helping a person continue when an AI-assisted creative flow is empty, still loading, or returns something unhelpful. Those states and their usability check are planned; they are not finished or tested yet.

## Visit the portfolio

- **Published site:** [Open the VitePress portfolio](https://jivexperimenters.github.io/Jivitesh-Portifolio/) after GitHub Pages is enabled for this repository.
- **Research story:** [How I compared two employer descriptions](docs/research/career.md)
- **Selected work:** [Projects I can currently show](docs/work.md)
- **Source repository:** [JivExperimenters/Jivitesh-Portifolio](https://github.com/JivExperimenters/Jivitesh-Portifolio)

The site source lives in [`docs/`](docs/). GitHub Pages needs to use **GitHub Actions** as its publishing source. The workflow in [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml) builds and deploys after changes to the site reach `main`; the Pages URL should be treated as pending until that deployment succeeds.

## What I am exploring

My interests meet around interface design, interactive storytelling, game mechanics, and creative software. In my current projects, I keep coming back to questions about what a person can do next, how choices are presented, and how an interface makes a state understandable. That is why AI product interaction feels more interesting to me than adding an AI label to a generic app.

My current research compares:

1. **TikTok — AI Product Designer Graduate (2027 Start):** a consumer-facing design role that asks for AI product interactions, logic mapping from user and business needs, Figma/mobile familiarity, and collaboration with Product and Engineering.
2. **Apple — Forward Deployed Engineer:** a customer-facing technical role that translates Sales workflows into engineering work, builds prototypes and production-oriented integrations, and lists 12+ years of related experience.

The descriptions overlap in translating needs into solutions, but they point toward different kinds of evidence. I am more interested in the first direction for my next portfolio work. I use the Apple role as a contrast and longer-term reference, not as evidence that I am ready for a senior engineering role.

I reopened both original employer pages on **November 10, 2026**. TikTok’s page says applications are reviewed on a rolling basis and displayed an application link, but it does not state a calendar closing date. Apple’s page did not state a closing date when I checked; an older note in my draft that said November 2 was not confirmed on the current page, so I mark its availability unverified. Full source details and the evidence/assumption split are in my [career research record](docs/research/career.md).

## My current work and what it proves

| Project | Why I include it | What I am careful not to claim |
|---|---|---|
| [Idea Thinker — Figma](https://www.figma.com/design/7pKC9IzbJfw51wonL2CNi1/IDEA-THINKER?t=N3qugy3usVNQrT7o-1) | This is my closest starting point for guided ideation. It explores Guided Thinking, Movie Twist, and word-game modes. I want to make it the core of my AI product-interaction case study. | The existing Figma screens are not proof of a working AI service, a validated user problem, a complete design system, or successful peer testing. |
| [Offline TV — Figma](https://www.figma.com/design/1dhaIImEsfI7EQQCd9t8kF/OFFLINE-TV?node-id=0-1&p=f&t=QdVnJVRqyrqCE2mm-0) | This multi-screen media concept lets me show how I think about navigation and organizing content across areas of an interface. | A set of screens does not establish that the navigation is easy for users or that I have completed a reusable mobile component library. |
| [AppAssemblers](https://app-assemblers.lovable.app/chat/3024b72a-955d-43df-a1ad-d493237cf2c7) | This is an example of my experimentation with AI-assisted app building and shareable prototypes. | Using an AI-assisted builder does not by itself prove reliable AI behavior, production engineering, or the quality of an unrelated project. |
| [Interactive games and stories](https://jiviteshdjollygamers.itch.io/) | Interactive storytelling is a genuine interest of mine. It gives me a way to think about choices, state changes, feedback, and progression. | Game work is adjacent evidence; it does not replace user research or usability results for an AI product. |
| [IS117 T-shirt research](https://github.com/JivExperimenters/T-Shirt) | That project gave me practice separating page observations from interpretations and connecting a finding to a proposed design implication. | Its apparel-shopping evidence does not tell me what Idea Thinker users need. |

These are artifacts I can inspect and discuss. My next goal is to make the reasoning behind one project as visible as the interface itself.

## My research question and decision

**Question:** What portfolio evidence would help me explore AI product and interaction design for consumer apps and creative tools, and how does that work differ from forward-deployed engineering?

**What I observed:** The TikTok posting emphasizes consumer AI products, user-centered interaction, mapping user needs into logic, Figma, mobile guidelines, and Product/Engineering collaboration. Apple’s FDE posting emphasizes Sales workflow discovery, technical specifications, prototypes, APIs and production-oriented services; it states a 12+ year related-experience minimum.

**What I infer:** My interest in mobile flows and creative interaction makes AI product design a direction worth exploring. I also suspect that states for empty, loading, and unhelpful AI responses would reveal more about my interaction thinking than presenting only successful screens. That is my hypothesis, not a finding from user interviews or a promise from either employer.

**Why I chose this next step:** *Idea Thinker* is already an interface concept I can extend, and the TikTok role’s stated work maps more directly to design evidence I can produce next. Apple’s role is a useful contrast for the work of turning customer needs into technical solutions, but its stated experience threshold and engineering depth make it a poor near-term target for this portfolio.

**What could change my mind:** If a peer cannot explain the problem *Idea Thinker* is meant to address, or if the guided flow does not help them decide what to do next, I should revisit the problem or interaction instead of assuming that adding AI is the answer.

## The feature I want to investigate

J01 asks for trustworthy, user-centered AI experiences and logic that connects user needs to implementation. From that, I infer a question for my own concept: when an ideation result is missing, still loading, or unhelpful, can the person tell what is happening and how to continue?

I want to explore an *Idea Thinker* flow that makes those states explicit and offers a clear next action, such as retrying or revising the prompt. My user-story draft is:

> As someone trying to develop an idea, I want to understand the response state and what I can do next so I can continue without guessing what happened.

### How I plan to check it

This is **planned, not run**. After I add those states to a focused prototype, I will invite five peers to try three tasks without hints:

1. Start from a state with no result and identify how to begin.
2. Wait for a result and explain what the interface is doing and what happens next.
3. Recover from an unhelpful result by retrying or revising the request.

For each participant and task, I will record whether the person identifies the state and next action, completes the task without help, the approximate time, and any confusion. My proposed early signal is at least four of five participants completing each task without help. That is my proposed design check—not a course quota, employer requirement, or observed result. If participants miss the next action, I will revise the relevant state/action and ask the reviewer to retry the same tasks.

This small check could tell me whether the interaction is understandable to these people in this prototype. It could not prove the needs of all creators, hiring outcomes, or job readiness.

## What I want to build next

I am intentionally starting with a small proof rather than promising a complete AI product:

1. **Frame the problem:** Write a short *Idea Thinker* brief. Treat “student and indie creators” as a target-audience hypothesis, state the blank-page problem I want to examine, and compare three non-AI ways of starting an idea.
2. **Scope the flow:** Refine Guided MCQ and Movie Twist first. Show empty, loading, unhelpful-response, retry, and revise states instead of trying to finish every mode at once.
3. **Make design decisions reusable:** Create a compact component/state page in Figma, then check touch targets and contrast and report what I actually found.
4. **Prototype honestly:** If the flow is understandable, make a small interactive version. If responses are simulated rather than generated by a connected model, label that clearly.
5. **Record and revise:** Run the planned peer tasks, record what happened, make a change if needed, and request a reviewer retry before marking accepted feedback resolved.

The staged plan helps me separate interface design from claims about AI implementation. A convincing interaction prototype is a useful next artifact, but it is not the same thing as a production AI system.

## Peer review status

No portfolio peer-feedback issue, reviewer retry, or resolution is recorded yet. My next step is to request classmate review in the [repository issues](https://github.com/JivExperimenters/Jivitesh-Portifolio/issues). The current research round requires 3–5 constructive issues per classmate, per project. If I cannot get feedback, I will document the request and contact the instructor promptly to arrange another reviewer.

When feedback arrives, I will decide whether to **implement, investigate, defer, or decline** and explain why. For accepted feedback, I will link the documentation or code change, say how I checked it, and request a reviewer retry before closing a resolved issue. I will leave unfinished work open with a next action.

## AI assistance and responsibility

An AI assistant helped me organize the career notes, compare posting language, and draft research questions and a proposed interaction check. I reopened the original employer pages on November 10, 2026 and checked the job details and deadline wording against them. I could not confirm the older Apple closing-date note on the current page, so I mark availability unverified. My interest, interpretation, design decision, and next steps are mine to assess; the audience and usability claims remain hypotheses until checked.

My complete role cards and 250–350-word personal reflection are for my private Canvas submission. This public record focuses on suitable professional goals, research sources, existing portfolio evidence, and proposed work—not personal eligibility circumstances.

## Run the site locally

This site uses VitePress. Node.js 22 or later is recommended.

```sh
npm ci
npm run docs:dev
```

Build the static site before submitting a change:

```sh
npm run docs:build
npm run docs:preview
```

The GitHub Actions workflow builds the site and deploys it to GitHub Pages when documentation or site configuration changes land on `main`. In the repository settings, choose **Settings → Pages → Build and deployment → GitHub Actions**. The first deployment cannot become public until Pages is enabled and the workflow succeeds.
