import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-d8ab152d.js";import{_ as h,u as o,p as g,c as u,w as l,o as d,a as s,b as a,d as m,r as n,e as y}from"./app-2781ddff.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e8642e2c.js";import"./YunCard.vue_vue_type_script_setup_true_lang-7e7da48c.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-ebad1ef6.js";const os=JSON.parse('{"title":"补数与补码","description":"","frontmatter":{"layout":"post","title":"补数与补码","date":"2023-01-15T17:13:28.000Z","categories":"笔记","tags":["计算机基础"]},"headers":[{"level":3,"title":"模运算","slug":"模运算","link":"#模运算","children":[]},{"level":3,"title":"同余","slug":"同余","link":"#同余","children":[]},{"level":3,"title":"补数","slug":"补数","link":"#补数","children":[]},{"level":3,"title":"二进制","slug":"二进制","link":"#二进制","children":[]}],"relativePath":"pages/posts/complement.md","path":"/home/runner/work/valaxy/valaxy/pages/posts/complement.md","lastUpdated":1692888211000}'),i=JSON.parse('{"title":"补数与补码","description":"","frontmatter":{"layout":"post","title":"补数与补码","date":"2023-01-15T17:13:28.000Z","categories":"笔记","tags":["计算机基础"]},"headers":[{"level":3,"title":"模运算","slug":"模运算","link":"#模运算","children":[]},{"level":3,"title":"同余","slug":"同余","link":"#同余","children":[]},{"level":3,"title":"补数","slug":"补数","link":"#补数","children":[]},{"level":3,"title":"二进制","slug":"二进制","link":"#二进制","children":[]}],"relativePath":"pages/posts/complement.md","path":"/home/runner/work/valaxy/valaxy/pages/posts/complement.md","lastUpdated":1692888211000}'),v={name:"pages/posts/complement.md",data(){return{data:i,frontmatter:i.frontmatter,$frontmatter:i.frontmatter}},setup(){const t=o();t.meta.frontmatter=Object.assign(t.meta.frontmatter,i.frontmatter),g("pageData",i)}},b=s("p",null,[a("始于《C++ Primer》中对超出无符号数范围的数的转换，转为无符号数后值为"),s("code",null,"{num} mod {count}"),a("， "),s("code",null,"{num}"),a("即为原来的数，"),s("code",null,"{count}"),a("为无符号数据类型可代表的数的总和，如："),s("br"),s("code",null,"unsigned char"),a("可表示0~255共256个数, "),s("code",null,"unsigned char a = -1"),a("，实际上"),s("code",null,"a"),a("的值为"),s("code",null,"255"),a("，由"),s("code",null,"-1 mod 256"),a("得出")],-1),_={id:"模运算",tabindex:"-1"},k=s("p",null,[a("商余定理："),s("br"),a(" 给出"),s("strong",null,"任何整数"),a("A和一个"),s("strong",null,"正整数"),a("B，存在"),s("strong",null,"唯一整数Q和R"),a("，满足：")],-1),f=s("p",null,[s("strong",null,"A = B * Q + R，其中0 <= R < B")],-1),z=s("p",null,[a("A除以B，Q是商，R是余数。以另一种形式书写就是"),s("strong",null,"A mod B = R")],-1),x=s("p",null,"求A mod B时，R = A - B * Q，求出商Q即可。而由于有多种取整方法，R的值随着取整方法的不同而变化",-1),w=s("blockquote",null,[s("p",null,"ceil()，floor()，int()，round()分别为向上取整，向下取整，向零取整以及四舍五入"),s("p",null,"此处只讨论floor()和int()。并且正数取整时，这两个方法得到的结果相同，因此只讨论负数，即A < 0时")],-1),A=s("ul",null,[s("li",null,"向下取整，|Q| > |A/B|，即BQ < A，一个负数减去一个更小的负数得到R > 0"),s("li",null,"向零取整，|Q| < |A/B|，即BQ > A，R < 0")],-1),B={id:"运算性质",tabindex:"-1"},C=s("ul",null,[s("li",null,"(A + B) mod C = (A mod C + B mod C) mod C"),s("li",null,"(A - B) mod C = (A mod C - B mod C) mod C"),s("li",null,"(A * B) mod C = (A mod C * B mod C) mod C"),s("li",null,"A^B mod C = ((A mod C)^B) mod C")],-1),M={id:"同余",tabindex:"-1"},$=s("p",null,[a("A与B模C同余，表示A mod C = B mod C，记作"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"A"),s("mo",null,"≡"),s("mi",null,"B"),s("mspace"),s("mspace",{width:"0.4444em"}),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mspace",{width:"0.3333em"}),s("mi",null,"C"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"A\\equiv B\\pmod{C}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≡"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.4444em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.3333em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mclose"},")")])])])],-1),L=s("ul",null,[s("li",null,[a('C|(A-B)，"|"符号意味整除，C能整除(A-B)，即'),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",null,"A"),s("mo",null,"−"),s("mi",null,"B")]),s("mi",null,"C")]),s("mo",null,"="),s("mi",null,"K")]),s("annotation",{encoding:"application/x-tex"},"\\frac{A-B}{C}=K")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2173em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"C")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"A"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05017em"}},"B")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"K")])])]),a("，与下面相同")]),s("li",null,"A = B + K * C，A与B之间相差K个C。(K为整数)")],-1),R=s("p",null,"同时，一个数X。当A ≡ B(mod C)时，A与B相差K倍的C，有：",-1),Q=s("p",null,"(X + A) ≡ (X + B) mod C",-1),q={id:"补数",tabindex:"-1"},K=s("p",null,"假设现在时间为10点整，要想让时针指向2点，有两种方式：",-1),N=s("ol",null,[s("li",null,"顺时针拨动4个小时"),s("li",null,"逆时针拨动8个小时")],-1),X=s("p",null,"钟表时间以12为模，在模的范围内，两个相加等于模的数互为补数(complement)",-1),V=s("p",null,"在模的范围内做减法，即逆时针转动8个小时(-8 mod 12 = 4)与做加法，即顺时针转动4个小时(4 mod 12 = 4)得到的结果相同",-1),O=s("blockquote",null,[s("p",null,"-8与4同余，有(X + (-8)) mod 12 = (X + 4) mod 12"),s("p",null,"因此可通过同余，令减法变成加法")],-1),P=s("p",null,'在0~99中，以100为模，(30 + (- 40)) mod 100 = (30 + 60) mod 100，"60"可以替代"-40"进行加法运算，但是如果60用来表示-40， 它也有原本的值，造成二义性',-1),S=s("p",null,"为解决该问题，将模范围内的数划分，0~49区间的表示原来的值，而与之对应的补数来表示其负数，例如99的补数为1即 99表示-1。当然，牺牲了一半的值表示负数，在以100为模的范围内，50~99的这些正数就无法表示了。要想取到50~99，可在 更大的模中划分",-1),T=s("blockquote",null,[s("p",null,"取模为C，一个半模以下的正整数A，补数为B。B用来表示-A，同时 B - (-A) = C - A + A = C，即B与(-A) mod C同余")],-1),D={id:"二进制",tabindex:"-1"},J=s("p",null,"二进制中划分范围后，半模以下的数最高位为0，半模以上的数最高位为1。这就是补码最高位为符号位的原因",-1),U=s("blockquote",null,[s("p",null,"符号位的0, 1并不是为了表示正负，只是半模以上数的二进制最高位为1，该数为正数，用它表示其补数的相反数")],-1),Z=s("p",null,"假设有一个8位二进制数，它可表示2的8次方共256个数，即0~255其模为256。因此0~127表示正数， 而128~255表示对应补数的相反数，如255的补数为1，即255表示-1。同时，128的补数为128即128用来表示-128， 故8位二进制数的可表示范围为-128~127",-1),j={id:"补码",tabindex:"-1"},E=s("p",null,[a("-1的原码为"),s("code",null,"1000 0001"),a("故其补码为"),s("code",null,"1111 1111"),a("对应255，正好是其绝对值的补数。也可得出-128的补码为 其补数128的二进制形式"),s("code",null,"1000 0000")],-1),F={id:"取反加一",tabindex:"-1"},G=s("p",null,"n位二进制数，以2^n为模，取半模以下的数A，补数B = 2^n - A，B表示-A，即B的二进制为-A的补码",-1),H=s("blockquote",null,[s("p",null,[a("A的最高位为0，令其"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"k"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"k_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("代表其余n-1位，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"k"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"k_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("的值为0或者1")])],-1),I=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"A"),s("mo",null,"="),s("msub",null,[s("mi",null,"k"),s("mn",null,"0")]),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"0")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"k"),s("mn",null,"1")]),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"1")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("msub",null,[s("mi",null,"k"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2")])]),s("mo",null,"+"),s("mn",null,"0"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")])])]),s("annotation",{encoding:"application/x-tex"},"A=k_0*2^0+k_1*2^1+...+k_{n-1}*2^{n-2}+0*2^{n-1} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9028em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])])])])])])],-1),W=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"0")]),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"1")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2")])])]),s("annotation",{encoding:"application/x-tex"},"2^n-1=1*2^0+1*2^1+...+1*2^{n-2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7977em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])])])])])])])])])])],-1),Y=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"B"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"k"),s("mn",null,"0")]),s("mo",{stretchy:"false"},")"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"0")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"k"),s("mn",null,"1")]),s("mo",{stretchy:"false"},")"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mn",null,"1")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"k"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"2")])]),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"B=(1-k_0)*2^0+(1-k_1)*2^1+...+(1-k_{n-2})*2^{n-2}+1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),ss=s("p",null,"对照B与A的表达式，B为A取反后加1",-1),as=s("blockquote",null,[s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"k"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(1-k_i)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),a("相当于对"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"k"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"k_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("取反")])],-1);function ls(t,ts,ns,es,p,ms){const e=y,c=r;return d(),u(c,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":l(()=>[b,s("h3",_,[a("模运算 "),m(e,{class:"header-anchor",href:"#模运算","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),k,f,z,x,w,A,s("h4",B,[a("运算性质 "),m(e,{class:"header-anchor",href:"#运算性质","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),C,s("h3",M,[a("同余 "),m(e,{class:"header-anchor",href:"#同余","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),$,L,R,Q,s("h3",q,[a("补数 "),m(e,{class:"header-anchor",href:"#补数","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),K,N,X,V,O,P,S,T,s("h3",D,[a("二进制 "),m(e,{class:"header-anchor",href:"#二进制","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),J,U,Z,s("h4",j,[a("补码 "),m(e,{class:"header-anchor",href:"#补码","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),E,s("h4",F,[a("取反加一 "),m(e,{class:"header-anchor",href:"#取反加一","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),G,H,I,W,Y,ss,as]),"main-header":l(()=>[n(t.$slots,"main-header")]),"main-header-after":l(()=>[n(t.$slots,"main-header-after")]),"main-nav":l(()=>[n(t.$slots,"main-nav")]),"main-content":l(()=>[n(t.$slots,"main-content")]),"main-content-after":l(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[n(t.$slots,"main-nav-after")]),comment:l(()=>[n(t.$slots,"comment")]),footer:l(()=>[n(t.$slots,"footer")]),aside:l(()=>[n(t.$slots,"aside")]),"aside-custom":l(()=>[n(t.$slots,"aside-custom")]),default:l(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const gs=h(v,[["render",ls]]);export{os as __pageData,gs as default};
