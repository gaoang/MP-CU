import{b as n,c as a,d as s}from"./app.3a36a891.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const e={},p={class:"mp-cu-doc-theme-content"},c=s(`<h1 id="\u65E5\u671F\u65F6\u95F4-isdate" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u65F6\u95F4-isdate" aria-hidden="true">#</a> \u65E5\u671F\u65F6\u95F4 isDate</h1><p>\u65E5\u671F\u65F6\u95F4\u64CD\u4F5C\uFF0C\u53EF\u4F7F\u7528 <code>colorUISdk.isDate.xxx()</code></p><h2 id="\u83B7\u53D6\u65E5\u671F\u65F6\u95F4\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u65E5\u671F\u65F6\u95F4\u53D8\u91CF" aria-hidden="true">#</a> \u83B7\u53D6\u65E5\u671F\u65F6\u95F4\u53D8\u91CF</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span>new_date<span class="token punctuation">)</span> <span class="token comment">//new Date()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span>year<span class="token punctuation">)</span>     <span class="token comment">//\u5F53\u524D\u5E74</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span>month<span class="token punctuation">)</span>    <span class="token comment">//\u5F53\u524D\u6708</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span>date<span class="token punctuation">)</span>     <span class="token comment">//\u5F53\u524D\u65E5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span>day<span class="token punctuation">)</span>      <span class="token comment">//\u4ECA\u5929\u672C\u5468\u7684\u7B2C\u51E0\u5929</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F53\u524D\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u65E5\u671F" aria-hidden="true">#</a> \u5F53\u524D\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">currentDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u5468\u7684\u5F00\u7AEF\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u672C\u5468\u7684\u5F00\u7AEF\u65E5\u671F" aria-hidden="true">#</a> \u672C\u5468\u7684\u5F00\u7AEF\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">weekStartDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u5468\u7684\u505C\u6B62\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u672C\u5468\u7684\u505C\u6B62\u65E5\u671F" aria-hidden="true">#</a> \u672C\u5468\u7684\u505C\u6B62\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">weekEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E0A\u5468\u7684\u505C\u6B62\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u5468\u7684\u505C\u6B62\u65E5\u671F" aria-hidden="true">#</a> \u4E0A\u5468\u7684\u505C\u6B62\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">weekLastEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u6708\u7684\u5F00\u7AEF\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u672C\u6708\u7684\u5F00\u7AEF\u65E5\u671F" aria-hidden="true">#</a> \u672C\u6708\u7684\u5F00\u7AEF\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthStartDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u6708\u7684\u505C\u6B62\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u672C\u6708\u7684\u505C\u6B62\u65E5\u671F" aria-hidden="true">#</a> \u672C\u6708\u7684\u505C\u6B62\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E0A\u6708\u5F00\u7AEF\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u6708\u5F00\u7AEF\u65F6\u5019" aria-hidden="true">#</a> \u4E0A\u6708\u5F00\u7AEF\u65F6\u5019</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthLastStartDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E0A\u6708\u505C\u6B62\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u6708\u505C\u6B62\u65F6\u5019" aria-hidden="true">#</a> \u4E0A\u6708\u505C\u6B62\u65F6\u5019</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthLastEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4ECA\u5E74\u7684\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u5E74\u7684\u5F00\u5934" aria-hidden="true">#</a> \u4ECA\u5E74\u7684\u5F00\u5934</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">currentYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E4B\u524D\u7684\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u4E4B\u524D\u7684\u65E5\u671F" aria-hidden="true">#</a> \u4E4B\u524D\u7684\u65E5\u671F</h2><p>\u83B7\u53D6\u4ECA\u5929\u4E4B\u524D\u7684\u591A\u5C11\u5929\u7684\u65E5\u671F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthLastStartDate</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u67D0\u6708\u7684\u5929\u6570" tabindex="-1"><a class="header-anchor" href="#\u67D0\u6708\u7684\u5929\u6570" aria-hidden="true">#</a> \u67D0\u6708\u7684\u5929\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorUISdk<span class="token punctuation">.</span>isDate<span class="token punctuation">.</span><span class="token function">monthDays</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,27),o=[c];function i(u,l){return n(),a("div",p,o)}var k=t(e,[["render",i]]);export{k as default};
