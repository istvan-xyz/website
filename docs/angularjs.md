# AngularJS

<p>AngularJS is one of the most hyped JavaScript-based frontend technologies built by Google.</p>
<p>
    I have developed 3 projects in AngularJS and have 1 year experience with the technology. During the last two years,
    I have consistently seen AngularJS to be advertised as the holy grail. I've seen managers put the Angular logo on
    their slides when pitching a project, just to make it more appealing.
</p>
In reality however AngularJS doesn't live up to it's promises.
<p>
    This article sums of the issues best:
    <a href="https://medium.com/@mnemon1ck/why-you-should-not-use-angularjs-1df5ddf6fc99"
        >Why you should not use AngularJS</a
    >
    ( <a href="https://news.ycombinator.com/item?id=8830640">HN discussion</a> )
</p>
<p>The following comment sums up how mind blowing AngularJS's faults are:</p>
<blockquote>
    <p>
        I find the rise of Angular kind of baffling. Angular's scope system is exactly analogous to the scope system of
        a programming language. This is a solved problem! When you make a scope system, make it lexical, and require
        explicit declaration before use. If you're not making those choices, then at least acknowledge that these are
        the standard answers, with very clear advantages over other scoping systems, and explain why you are not using
        these answers. But with angular, we have a dynamic, implicit declaration scoping system. New scopes are
        introduced somewhat unpredictably, at the discretion of each directive. I thought that introducing dynamic,
        implicit-declaration, non-block-scoped variables in 2014 was like introducing a new car with a coal-burning
        engine, but no one even seems to remark on it. Then there's the dirty-checking loop. After every event there is
        a digest; every digest runs every watch. To me, just reading this description makes a voice speak up in my head:
        &quot;Uh-oh! That sounds like O(n^2)!&quot; Now that angular is being widely used, people are noticing that it's
        slow as shit. But why did the framework get to this level without anyone remarking, &quot;this dirty-checking
        algorithm is fundamentally, irremediably not scalable&quot;? Do people not have a sense even for the most coarse
        performance characteristics of algorithms like this? Or do people simply think that nowadays &quot;performance
        does not matter&quot;? Angular's &quot;module&quot; system is the strangest of all. It doesn't do namespacing or
        dependency tracking. What is even the point of it? What thought process led to this useless module system? It's
        just strange. Hundreds of years of people's work are spent on something, which the most cursory, CS 101 analysis
        shows to be seriously flawed. Is analysis simply a lost art in this industry? Oh well, people are finally
        realizing Angular has its faults, because they've seen them with their own eyes and now they believe them. It
        would be nice if we could learn from this, and maybe skip the next boondoggle (web components for instance), but
        I have no hope for it.
    </p>
</blockquote>
<p>source: <a href="https://news.ycombinator.com/item?id=8652566">https://news.ycombinator.com/item?id=8652566</a></p>
<p>
    Problems with Angular:
    <a href="http://www.leanpanda.com/blog/2015/09/20/our-criticisms-of-angularjs/"
        >http://www.leanpanda.com/blog/2015/09/20/our-criticisms-of-angularjs/</a
    >
</p>
In summary, if you use AngularJS in a large project:
<ul>
    <li>your Angular app won't scale</li>
    <li>your code will be unmaintainable</li>
    <li>you will spend a lot of time working around Angular's faults</li>
    <li>your work will be obsolete when AngularJS 2.0 arrives which will not be compatible</li>
</ul>
