import{_ as n,o as s,c as a,a as e}from"./app.bc510f41.js";const t={},p=e(`<h1 id="二维码" tabindex="-1"><a class="header-anchor" href="#二维码" aria-hidden="true">#</a> 二维码</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> pyzbar<span class="token punctuation">.</span>pyzbar <span class="token keyword">as</span> pyzbar
<span class="token keyword">import</span> os

<span class="token keyword">def</span> <span class="token function">qrcode_parse_content</span><span class="token punctuation">(</span>img_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    单张图片的二维码解析
    &#39;&#39;&#39;</span>
    img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>img_path<span class="token punctuation">)</span>

    <span class="token comment">#使用pyzbar解析二维码图片内容</span>
    barcodes <span class="token operator">=</span> pyzbar<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

    <span class="token comment">#打印解析结果，从结果上可以看出，data是识别到的二维码内容，rect是二维码所在的位置</span>
    <span class="token comment"># print(barcodes)</span>

    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> barcode <span class="token keyword">in</span> barcodes<span class="token punctuation">:</span>
        barcode_content <span class="token operator">=</span> barcode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>barcode_content<span class="token punctuation">)</span>

    <span class="token keyword">return</span> result

<span class="token keyword">def</span> <span class="token function">load_imgs</span><span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    加载文件夹下的图片
    &#39;&#39;&#39;</span>
    imgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> img_path <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ext <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>img_path<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">and</span> is_img<span class="token punctuation">(</span>ext<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            imgs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>img_path<span class="token punctuation">)</span>

    <span class="token keyword">return</span> imgs

<span class="token keyword">def</span> <span class="token function">is_img</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    判断文件后缀是否是图片
    &#39;&#39;&#39;</span>
    ext <span class="token operator">=</span> ext<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ext <span class="token operator">==</span> <span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">elif</span> ext <span class="token operator">==</span> <span class="token string">&#39;.png&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">elif</span> ext <span class="token operator">==</span> <span class="token string">&#39;.jpeg&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">elif</span> ext <span class="token operator">==</span> <span class="token string">&#39;.bmp&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>

    imgs <span class="token operator">=</span> load_imgs<span class="token punctuation">(</span><span class="token string">&#39;./data&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 打开图片文件夹，我这里是当前程序运行目录</span>
    contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> img <span class="token keyword">in</span> imgs<span class="token punctuation">:</span>
        contents<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>qrcode_parse_content<span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token builtin">file</span> <span class="token operator">=</span> <span class="token string">&#39;./result.txt&#39;</span> <span class="token comment"># 写入文件路径，我这里程序当前运行目录下的result.txt</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">for</span> c <span class="token keyword">in</span> contents<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","index.html.vue"]]);export{r as default};
