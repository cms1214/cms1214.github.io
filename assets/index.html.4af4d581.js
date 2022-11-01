import{_ as n,o as s,c as a,a as t}from"./app.bc510f41.js";const p={},e=t(`<h1 id="后缀名" tabindex="-1"><a class="header-anchor" href="#后缀名" aria-hidden="true">#</a> 后缀名</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token comment"># 这是你需要修改文件的路径地址</span>
filePath <span class="token operator">=</span> <span class="token string">&quot;./data_QCimg&quot;</span>


<span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># listdir：返回指定的文件夹包含的文件或文件夹的名字的列表</span>
    files <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
        fileName <span class="token operator">=</span> filePath <span class="token operator">+</span> os<span class="token punctuation">.</span>sep <span class="token operator">+</span> <span class="token builtin">file</span>
        path1 <span class="token operator">=</span> filePath
        <span class="token comment"># 运用递归;isdir：判断某一路径是否为目录</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">:</span>
            update<span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">file</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                test <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.png&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;修改前:&quot;</span> <span class="token operator">+</span> path1 <span class="token operator">+</span> os<span class="token punctuation">.</span>sep <span class="token operator">+</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;修改后:&quot;</span> <span class="token operator">+</span> path1 <span class="token operator">+</span> os<span class="token punctuation">.</span>sep <span class="token operator">+</span> test<span class="token punctuation">)</span>
                os<span class="token punctuation">.</span>renames<span class="token punctuation">(</span>path1 <span class="token operator">+</span> os<span class="token punctuation">.</span>sep <span class="token operator">+</span> <span class="token builtin">file</span><span class="token punctuation">,</span> path1 <span class="token operator">+</span> os<span class="token punctuation">.</span>sep <span class="token operator">+</span> test<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    update<span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function i(l,c){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","index.html.vue"]]);export{r as default};
