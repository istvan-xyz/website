# Reinventing the wheel

There’s a well-known saying: _“Don’t reinvent the wheel.”_ It’s sensible advice—until you realize that not every wheel is the same. A bicycle, a car, a truck, and a locomotive all need different types of wheels. If we rigidly follow the rule, we might find ourselves trying to fit a truck tire onto a high-speed train or insisting that a bicycle must use an omni-wheel because _“we already have a wheel for that.”_

In software development, this kind of thinking leads to unquestioned reliance on existing tools, even when they’re not the right fit.

I once worked on a large React micro-frontend monorepo project where each team was responsible for its own micro-frontend. Since the project was in its early stages, teams often had to figure things out on their own.

As part of my work, I built the authentication library that all teams would use. It was a pain to set up, so when I needed to start fetching data from microservices, I wanted a data hook that seamlessly integrated with authentication—one that would automatically handle token acquisition without extra effort from developers.

In no time, I wrote an ~80-line data hook that was simple, easy to use, and worked perfectly with our authentication setup. It solved our problem without adding unnecessary complexity.

During a frontend leads meeting, I demonstrated the hook with the intention of making it available for other teams. The first response I got was: _“Why didn’t you use React Query?”_ I answered, _“I didn’t need it. I wanted a tool that was more integrated.”_ Judging by the reactions, I had committed blasphemy. It was clear that no other team would touch my _“tainted”_ code.

What struck me wasn’t just the reaction itself but what it represented: a blind faith in popular tools rather than an engineering mindset. Instead of asking whether React Query was the right tool for our specific needs, the assumption was that if a well-known library exists, we must use it—no further discussion needed.

But this isn’t how professionals should think. Engineering is about trade-offs. Just because something was the best choice in a different project, or even last year, doesn’t mean it’s the best choice today. The right question isn’t _“Why didn’t you use React Query?”_—it’s _“What problem were you solving, and why was this solution the best fit?”_

A good engineer questions assumptions, challenges dogma, and makes decisions based on context—not just convention.

Every dependency we introduce comes with hidden complexities. It’s easy to install a library and assume it will “just work,” but every addition brings potential risks:

-   **Version conflicts** – The library depends on a specific version of React, which may not align with our project’s version. Upgrading React could break the library, or vice versa.
-   **Transitive dependencies** – Many libraries pull in additional dependencies, each with their own maintenance burden, security risks, and compatibility issues.
-   **Performance overhead** – A generic library is designed to handle many use cases, but we often need only a fraction of its functionality. We pay for that generality in bundle size, complexity, and execution time.
-   **Debugging complexity** – A custom-built solution is often easier to understand and debug, while third-party libraries abstract away logic, making it harder to diagnose issues when things go wrong.

Yet, developers are increasingly prioritizing convenience over control. The default instinct is to reach for an external library rather than assessing whether the problem is even hard enough to require one.

This growing tendency to rely on heavyweight solutions without question isn’t just an academic concern—it has real-world consequences.

Computers today are orders of magnitude faster than those in the early 2000s, yet modern software often feels slower. Applications that should be snappy are sluggish, bloated with unnecessary dependencies, and riddled with inefficiencies. The problem isn’t the hardware—it’s the way we build software.

We’ve reached a point where a simple text editor or a messaging app can consume hundreds of megabytes of RAM, and websites load megabytes of JavaScript just to render a basic page. This isn’t just bad engineering; it’s wasteful.

Consider these examples:

-   **µTorrent’s installer** was just **1 MB** in 2005. Modern torrent clients are bloated beyond recognition. ([Source](https://en.wikipedia.org/wiki/%CE%9CTorrent#Size))
-   **Bloat in modern software** – Some of today’s applications would have been unthinkable in the past due to their inefficiency. ([Example video](https://www.youtube.com/watch?v=4ka549NNdDk))
-   **The inefficiency of modern web apps** – Even simple tasks require bloated frameworks. ([Example video](https://www.youtube.com/watch?v=GC-0tCy4P1U))
-   **A look at old software vs. new software** – This demonstrates how much slower things have become despite better hardware. ([Example video](https://www.youtube.com/watch?v=hxM8QmyZXtg))

This isn’t nostalgia—it’s a warning. The way we build software is becoming less efficient, not more. And the root cause is the same mindset that rejected my custom data hook: an unquestioning acceptance of complexity where simplicity would do.

## Rethinking Our Approach

The saying _“Don’t reinvent the wheel”_ is meant to encourage efficiency, but when followed blindly, it can do the opposite. Engineering is about making the right trade-offs, not just defaulting to whatever tool is most popular.

Before reaching for a library, we should ask:

-   **Do we really need it, or is the problem simpler than it seems?**
-   **What hidden costs—performance, maintainability, complexity—does this introduce?**
-   **Would a small, purpose-built solution be a better fit?**

The best software isn’t the one with the most features or the longest dependency list—it’s the one that solves the problem in the simplest, most efficient way possible. As engineers, we have a responsibility to prioritize understanding over convenience and efficiency over blind adoption.

Because if we keep adding complexity without questioning it, we won’t just slow down our apps—we’ll slow down progress itself.
