import{_ as n,o as s,c as a,a as t}from"./app.bc510f41.js";const e={},p=t(`<h1 id="爬取" tabindex="-1"><a class="header-anchor" href="#爬取" aria-hidden="true">#</a> 爬取</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token keyword">import</span> requests  <span class="token comment"># 数据请求模块</span>
<span class="token keyword">import</span> os
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 读取txt</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;url.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
array <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 爬取函数</span>
<span class="token keyword">def</span> <span class="token function">bugs</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment"># print(r.text)</span>
    soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(soup.select(&#39;#title&#39;)[0].text)</span>
    script <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>

    content <span class="token operator">=</span> script<span class="token punctuation">.</span>text<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>

    reg <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&quot;(.*?)&quot;&#39;</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>reg<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 开爬</span>
i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> fields <span class="token keyword">in</span> array<span class="token punctuation">:</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    bugs<span class="token punctuation">(</span>fields<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};
