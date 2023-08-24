import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-d8ab152d.js";import{_ as r,u as h,p as g,c as p,w as n,o as m,a as l,b as e,d as a,r as i,e as _}from"./app-2781ddff.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e8642e2c.js";import"./YunCard.vue_vue_type_script_setup_true_lang-7e7da48c.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-ebad1ef6.js";const Fl=JSON.parse('{"title":"Git学习记录","description":"","frontmatter":{"layout":"post","title":"Git学习记录","date":"2023-02-03T21:35:39.000Z","categories":"笔记","tags":["Git"]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"Git基础","slug":"git基础","link":"#git基础","children":[{"level":3,"title":"更新与提交","slug":"更新与提交","link":"#更新与提交","children":[]},{"level":3,"title":"查看提交历史","slug":"查看提交历史","link":"#查看提交历史","children":[]},{"level":3,"title":"撤销操作","slug":"撤销操作","link":"#撤销操作","children":[]},{"level":3,"title":"远程仓库","slug":"远程仓库","link":"#远程仓库","children":[]},{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":3,"title":"别名","slug":"别名","link":"#别名","children":[]}]},{"level":2,"title":"Git分支","slug":"git分支","link":"#git分支","children":[{"level":3,"title":"远程分支","slug":"远程分支","link":"#远程分支","children":[]},{"level":3,"title":"变基","slug":"变基","link":"#变基","children":[]}]},{"level":2,"title":"Git内部原理","slug":"git内部原理","link":"#git内部原理","children":[{"level":3,"title":"objects目录","slug":"objects目录","link":"#objects目录","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":3,"title":"相对引用","slug":"相对引用","link":"#相对引用","children":[]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]}],"relativePath":"pages/posts/git-learning.md","path":"/home/runner/work/valaxy/valaxy/pages/posts/git-learning.md","lastUpdated":1692888211000}'),o=JSON.parse('{"title":"Git学习记录","description":"","frontmatter":{"layout":"post","title":"Git学习记录","date":"2023-02-03T21:35:39.000Z","categories":"笔记","tags":["Git"]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"Git基础","slug":"git基础","link":"#git基础","children":[{"level":3,"title":"更新与提交","slug":"更新与提交","link":"#更新与提交","children":[]},{"level":3,"title":"查看提交历史","slug":"查看提交历史","link":"#查看提交历史","children":[]},{"level":3,"title":"撤销操作","slug":"撤销操作","link":"#撤销操作","children":[]},{"level":3,"title":"远程仓库","slug":"远程仓库","link":"#远程仓库","children":[]},{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":3,"title":"别名","slug":"别名","link":"#别名","children":[]}]},{"level":2,"title":"Git分支","slug":"git分支","link":"#git分支","children":[{"level":3,"title":"远程分支","slug":"远程分支","link":"#远程分支","children":[]},{"level":3,"title":"变基","slug":"变基","link":"#变基","children":[]}]},{"level":2,"title":"Git内部原理","slug":"git内部原理","link":"#git内部原理","children":[{"level":3,"title":"objects目录","slug":"objects目录","link":"#objects目录","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":3,"title":"相对引用","slug":"相对引用","link":"#相对引用","children":[]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]}],"relativePath":"pages/posts/git-learning.md","path":"/home/runner/work/valaxy/valaxy/pages/posts/git-learning.md","lastUpdated":1692888211000}'),f={name:"pages/posts/git-learning.md",data(){return{data:o,frontmatter:o.frontmatter,$frontmatter:o.frontmatter}},setup(){const s=h();s.meta.frontmatter=Object.assign(s.meta.frontmatter,o.frontmatter),g("pageData",o)}},b={id:"目录",tabindex:"-1"},A=l("ul",null,[l("li",null,[e("基础 "),l("ul",null,[l("li",null,"更新与提交：add, status, diff, commit, rm, mv"),l("li",null,"提交历史：log"),l("li",null,"撤销：restore"),l("li",null,"远程仓库: remote"),l("li",null,"标签：tag"),l("li",null,"别名"),l("li",null,".gitingore")])]),l("li",null,[e("分支 "),l("ul",null,[l("li",null,"远程分支"),l("li",null,"变基：rebase")])]),l("li",null,[e("原理 "),l("ul",null,[l("li",null,"对象"),l("li",null,"引用")])]),l("li",null,"...")],-1),C={id:"git基础",tabindex:"-1"},v={id:"更新与提交",tabindex:"-1"},y=l("p",null,[e("工作目录下的文件只有两种状态："),l("em",null,[l("strong",null,"已跟踪")]),e(", "),l("em",null,[l("strong",null,"未跟踪")]),e("，对于已跟踪的文件，只有暂存的文件才会被提交")],-1),k=l("ul",null,[l("li",null,[l("p",null,[l("code",null,"git status"),e("查看状态")])]),l("li",null,[l("p",null,[l("code",null,"git add <file>"),e("跟踪文件以及将文件暂存(staged)")])]),l("li",null,[l("p",null,[l("code",null,"git diff"),e("查看未暂存的修改")]),l("ul",null,[l("li",null,[l("code",null,"--staged"),e("或"),l("code",null,"--cached"),e("查看暂存文件与上次提交的文件差异")])])]),l("li",null,[l("p",null,[l("code",null,"git commit"),e("提交文件，提交前"),l("code",null,"git status"),e("下确认所需文件是否在暂存区")]),l("ul",null,[l("li",null,[l("code",null,"-a"),e("可跳过暂存阶段，直接将跟踪文件暂存提交")])])]),l("li",null,[l("p",null,[l("code",null,"git rm <file>"),e("删除已跟踪文件。相当于"),l("code",null,"rm <file>"),e("后，"),l("code",null,"git add"),e("进暂存区，与创建文件后"),l("code",null,"git add<file>"),e("对应"),l("s",null,"个人理解，可能有误"),e("。")]),l("p",null,[e("当"),l("code",null,"<file>"),e("修改过或已暂存后，可使用：")]),l("ul",null,[l("li",null,[l("code",null,"-f"),e("安全特性，防止未添加到快照的数据误删")]),l("li",null,[l("code",null,"--cached"),e("仅仅从暂存区删除，文件还在")])])]),l("li",null,[l("p",null,[l("code",null,"git mv <file_a> <file_b>"),e("等价于：")]),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ mv file_a file_b")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git rm file_a")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git add file_b")])])])])])],-1),D={id:"查看提交历史",tabindex:"-1"},$=l("p",null,[l("code",null,"git log")],-1),x=l("ul",null,[l("li",null,[l("code",null,"-p"),e("或"),l("code",null,"--patch"),e("，以"),l("strong",null,"补丁"),e("的格式输出每次提交的所引入的差异")]),l("li",null,[l("code",null,"--stat"),e("每次提交的简略统计信息")]),l("li",null,[l("code",null,"--pretty=oneline"),e("一行显示一条提交，其他样式"),l("code",null,"--pretty=short"),e("，"),l("code",null,"--pretty=full"),e("，"),l("code",null,"--pretty=fuller"),e("仅信息详细程度不同")]),l("li",null,[l("code",null,"--pretty=format"),e("自定义输出格式")]),l("li",null,[l("code",null,"--graph"),e("更形象的显示分支")]),l("li",null,[l("code",null,"-<n>"),e("如"),l("code",null,"git log -2"),e("显示两条记录")]),l("li",null,[l("code",null,"--since=<time_a>"),e("与"),l("code",null,"--until=<time_b>"),e(" ，显示从"),l("code",null,"time_a"),e("到"),l("code",null,"time_b"),e("的提交")]),l("li",null,[l("code",null,"--after=<time_a>"),e("与"),l("code",null,"--before=<time_b>"),e("与上条相同")]),l("li",null,[l("code",null,"-S <string>"),e("过滤器，只显示增加或删除该字符串的提交")]),l("li",null,"其他。。。")],-1),j=l("p",null,"比如：",-1),G=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},`$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \\`)]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},'   --before="2008-11-01" --no-merges -- t/')])])])],-1),w=l("p",null,[l("code",null,"-- t/"),e("指对t文件夹的提交")],-1),H={id:"撤销操作",tabindex:"-1"},S=l("ul",null,[l("li",null,[l("p",null,[l("code",null,"git commit --amend"),e("重新提交，替代上一次的提交结果，如：")]),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git commit -m 'initial commit'")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git add forgotten_file")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git commit --amend")])])])])]),l("li",null,[l("p",null,[l("code",null,"git restore --staged <file>"),e("取消暂存")])]),l("li",null,[l("p",null,[l("code",null,"git restore <file>"),e("撤销修改")])])],-1),E=l("p",null,[l("s",null,"上两条与《Pro Git》不同，可能更新了")],-1),N={id:"远程仓库",tabindex:"-1"},V=l("ul",null,[l("li",null,[l("code",null,"git remote"),e("查看远程仓库 "),l("ul",null,[l("li",null,[l("code",null,"-v"),e("显示远程仓库以及url")]),l("li",null,[l("code",null,"add <shortname> <url>"),e("添加新的远程仓库并指定简写")]),l("li",null,[l("code",null,"show <remote>"),e("查看"),l("code",null,"remote"),e("的信息")]),l("li",null,[l("code",null,"rename <remote> <new_remote>"),e("远程仓库重命名")]),l("li",null,[l("code",null,"remove <remote>"),e("或者"),l("code",null,"rm <remote>"),e("移除"),l("code",null,"remote"),e("仓库")])])]),l("li",null,[l("code",null,"git fetch <remote>"),e("访问"),l("code",null,"remote"),e("仓库，拉取没有的数据")]),l("li",null,[l("code",null,"git push <reomte> <branch>"),e("推送")])],-1),q={id:"标签",tabindex:"-1"},T=l("p",null,[l("code",null,"git tag"),e("列出所有标签可带"),l("code",null,"-l"),e("或"),l("code",null,"--list"),e("。")],-1),z=l("p",null,"而标签分为轻量与附注，附注标签包含打标签人的信息、日期等，另外可以附加标签信息",-1),B=l("ul",null,[l("li",null,[l("code",null,"git tag <tagname>"),e("创建轻量标签")]),l("li",null,[l("code",null,"git tag -a <tagname> -m <tag_message>"),e("创建附注标签")]),l("li",null,[l("code",null,"git tag -a <tagname> <commit>"),e("为"),l("code",null,"commit"),e("打标签，"),l("code",null,"commit"),e("为提交的完整或部分校验和")]),l("li",null,[l("code",null,"git show <tagname>"),e("查看标签信息与对应的提交信息")]),l("li",null,[l("code",null,"git push <remote> <tagname>"),e("推送标签，或"),l("code",null,"git push <remote> --tags"),e("推送所有标签")]),l("li",null,[l("code",null,"git tage -d <tagname>"),e("删除标签，同时"),l("code",null,"git push <remote>:refs/tags/<tagname>"),e("或"),l("code",null,"git push <remote> --delete <tagname>"),e("删除远程仓库的标签")]),l("li",null,[l("code",null,"git checkout <tagname>"),e("检出标签")])],-1),P={id:"别名",tabindex:"-1"},J=l("p",null,[l("s",null,"敬请期待")],-1),L={id:"git分支",tabindex:"-1"},O=l("ul",null,[l("li",null,[l("code",null,"git branch"),e("列出分支 "),l("ul",null,[l("li",null,[l("code",null,"-v"),e("查看每个分支的最后一次提交")]),l("li",null,[l("code",null,"<branch>"),e("创建分支")]),l("li",null,[l("code",null,"-d <branch>"),e("删除分支")]),l("li",null,[l("code",null,"--merged"),e("和"),l("code",null,"--no-merged"),e("已经与当前分支合并和未合并的分支")])])]),l("li",null,[l("code",null,"git checkout <branch>"),e("分支切换 "),l("ul",null,[l("li",null,[l("code",null,"git checkout -b <branch>"),e("创建并切换分支")])])]),l("li",null,[l("code",null,"git merge <branch>"),e("合并分支 "),l("ul",null,[l("li",null,[e("顺着分支能到达另一分支时，只会简单的指针前进（右移），合并操作并无分歧，叫做"),l("code",null,"fast-forward")]),l("li",null,[e("两分支岔开（diverged），会与两分支的共同祖先三方合并，创建一个新的提交。而遇到"),l("em",null,"冲突"),e("，即两个分支对同一文件进行修改，会进行合并但没创建提交，需修改后自行提交")])])])],-1),K={id:"远程分支",tabindex:"-1"},M=l("p",null,[e("远程跟踪分支"),l("em",null,"检出"),e("本地分支会自动创建“跟踪分支”（所跟踪的分支称为上游分支），使用 "),l("code",null,"git checkout -b <branch> <remote>/<branch>"),e("或"),l("code",null,"git checkout --track <remote>/<branch>")],-1),U=l("p",null,[e("而"),l("em",null,"已有的"),e("本地分支需要跟踪或者修改上游分支则可以使用： "),l("code",null,"git branch -u <remote>/<branch>"),e("或着"),l("code",null,"--set-upstream-to")],-1),Z=l("p",null,[e("同时可以使用"),l("code",null,"@{u}"),e("或"),l("code",null,"@{upstream}"),e("代表上游分支，如"),l("code",null,"git merge @{u}"),e("代替"),l("code",null,"git merge origin/main"),e(" 可使用"),l("code",null,"git branch -vv"),e("来查看本地与上游分支的更多信息")],-1),R=l("p",null,[e("删除远程分支"),l("code",null,"git push <remote> --delete <branch>")],-1),W={id:"变基",tabindex:"-1"},F=l("p",null,[l("code",null,"git rebase <branch>"),e(" 待续。。。")],-1),I=l("hr",null,null,-1),Q={id:"git内部原理",tabindex:"-1"},X=l("p",null,[l("s",null,"太无聊了"),l("code",null,".git"),e("中重要文件："),l("code",null,"HEAD"),e("文件、"),l("code",null,"index"),e("文件、"),l("code",null,"objects"),e("目录、"),l("code",null,"refs"),e("目录")],-1),Y={id:"objects目录",tabindex:"-1"},ll=l("p",null,[e("保存所有数据，以Key-Value存储。通过"),l("code",null,"git hash-object"),e("演示存储效果：")],-1),el=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},'$ echo "hello" | git hash-object -w --stdin')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"ce013625030ba8dba906f756967f9e9ca394464a")])])])],-1),nl=l("p",null,[l("code",null,"-w"),e("写入数据库，"),l("code",null,"--stdin"),e("从标准输入读取，或直接"),l("code",null,"git hash-object -w <file>"),e("。通过"),l("code",null,"git cat-file"),e("读取数据：")],-1),tl=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git cat-file -p ce013625030ba8dba906f756967f9e9ca394464a")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"hello")])])])],-1),al=l("p",null,[e("只保存了文件内容没有文件名等信息，该类型对象称为数据对象（blob object）。通过"),l("code",null,"-t"),e("读取数据类型")],-1),sl=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git cat-file -t ce013625030ba8dba906f756967f9e9ca394464a")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"blob")])])])],-1),il={id:"树对象",tabindex:"-1"},ol=l("p",null,"一个树对象有一条或多条树对象记录（tree entry），每条记录指向：文件模式、类型、数据对象或者子树对象的指针、文件名信息。",-1),cl=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git cat-file -p main^{tree}")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"100644 blob 45f16d261584a37f3c3f3f631c7c08d0958baa2a    init.lua")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"100644 blob 7bf88613cead41206b364137ca310a829645f228    lazy-lock.json")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"040000 tree aff0b5e3d38b57a379d538056f60fa6f7a386fd0    lua")])])])],-1),dl={id:"提交对象",tabindex:"-1"},ul=l("p",null,"包含树对象的SHA-1值、父提交对象、作者信息以及提交注释",-1),rl={id:"对象存储",tabindex:"-1"},hl=l("p",null,[e("假设数据为"),l("code",null,'content = "hello"'),e("，令"),l("code",null,'header = "blob #{content.length}\\0"'),e("， 头部信息为对象类型 + 空格 + 数据的字节数 + 空字节。即"),l("code",null,"blob 5\\u0000")],-1),gl=l("p",null,[e("而"),l("code",null,"store = heander + content"),e("，Git会对"),l("code",null,"store"),e("计算SHA-1校验和（作为Key）。 由zlib压缩后即为对象的内容（Value）数据对象的"),l("code",null,"content"),e("无限制但树对象与提交对象的内容固定")],-1),pl={id:"引用",tabindex:"-1"},ml=l("p",null,[l("code",null,".git/refs"),e("目录下的含有SHA-1值的文件")],-1),_l=l("ul",null,[l("li",null,[l("code",null,"echo 1a410efbd13591db07496601ebc7a059dd55cfe9 > .git/refs/heads/master")]),l("li",null,[l("code",null,"git update-ref refs/heads/master 1a410efbd13591db07496601ebc7a059dd55cfe9"),e("，git提供的方法更安全")])],-1),fl=l("blockquote",null,[l("p",null,"Git分支的本质就是一个指向某一系列提交之首的指针或引用")],-1),bl={id:"head引用",tabindex:"-1"},Al=l("p",null,[e("运行"),l("code",null,"git branch <branch>"),e("时，通过HEAD文件获取最新提交的SHA-1值")],-1),Cl=l("blockquote",null,[l("p",null,"HEAD文件通常是一个符号引用，即指向其他引用的指针")],-1),vl={id:"标签引用",tabindex:"-1"},yl=l("p",null,"除三种主要对象类型外，还有标签对象。",-1),kl=l("p",null,"而标签就是一个引用",-1),Dl=l("ul",null,[l("li",null,[l("p",null,"轻量标签："),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git update-ref refs/tags/v1.0 cac0cab538b970a37ea1e769cbbde608743bc96d")])])])])]),l("li",null,[l("p",null,"附注标签："),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git tag -a v1.1 1a410efbd13591db07496601ebc7a059dd55cfe9 -m 'test tag'")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ cat .git/refs/tags/v1.1")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"9585191f37f7b0fb9444f35a9bf50de191beadc2")])])])]),l("p",null,[e("先创建标签对象再通过"),l("em",null,"引用"),e("指向标签对象，通过"),l("code",null,"git cat-file -p"),e("得到：")]),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git cat-file -p 9585191f37f7b0fb9444f35a9bf50de191beadc2")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"object 1a410efbd13591db07496601ebc7a059dd55cfe9")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"type commit")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"tag v1.1")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"tagger Scott Chacon <schacon@gmail.com> Sat May 23 16:48:58 2009 -0700")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"test tag")])])])]),l("blockquote",null,[l("p",null,"标签对象并不一定需要指向提交对象，也可以为数据对象或树对象打标签")])])],-1),$l={id:"远程引用",tabindex:"-1"},xl=l("p",null,[e("保存在"),l("code",null,"refs/remotes"),e("下。当添加了远程仓库并进行推送，Git会记录最近一次推送的每一个分支对应的值，并保存在"),l("code",null,"refs/remotes"),e("目录下：")],-1),jl=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git remote add origin git@github.com:schacon/simplegit-progit.git")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ git push origin master")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"Counting objects: 11, done.")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"Compressing objects: 100% (5/5), done.")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"Writing objects: 100% (7/7), 716 bytes, done.")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"Total 7 (delta 2), reused 4 (delta 1)")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"To git@github.com:schacon/simplegit-progit.git")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  a11bef0..ca82a6d  master -> master")])])])],-1),Gl=l("p",null,[e("而查看"),l("code",null,"refs/remotes/origin/master"),e("文件")],-1),wl=l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"$ cat .git/refs/remotes/origin/master")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"ca82a6dff817ec66f44342007202690a93763949")])])])],-1),Hl=l("p",null,[e("即为"),l("code",null,"origin/master"),e("分支的SHA-1值")],-1),Sl=l("hr",null,null,-1),El={id:"相对引用",tabindex:"-1"},Nl=l("ul",null,[l("li",null,[l("code",null,"^"),e("，例如"),l("code",null,"HEAD^"),e("表示"),l("code",null,"HEAD"),e("的上一次提交 "),l("ul",null,[l("li",null,[l("code",null,"^{num}"),e("，一个提交可能有多个父节点，"),l("code",null,"num"),e("表示选择第几个父节点")])])]),l("li",null,[l("code",null,"~{num}"),e("，例如"),l("code",null,"main~3"),e("表示"),l("code",null,"main"),e("的上三次提交")])],-1),Vl={id:"扩展",tabindex:"-1"},ql=l("ul",null,[l("li",null,[l("code",null,"git branch -f <branch> <commit>"),e("将"),l("code",null,"branch"),e("分支指向"),l("code",null,"commit"),e("提交")]),l("li",null,[l("code",null,"git switch -c <branch>"),e("等同于"),l("code",null,"git checkout -b <branch>")])],-1),Tl={id:"撤销变更",tabindex:"-1"},zl=l("ul",null,[l("li",null,[l("code",null,"git reset <commit>"),e("将当前分支回退到"),l("code",null,"commit"),e("提交上")]),l("li",null,[l("code",null,"git revert <commit>"),e("反做"),l("code",null,"commit"),e("的操作后添加提交")])],-1),Bl=l("p",null,"待续。。。",-1);function Pl(s,Jl,Ll,Ol,c,Kl){const t=_,d=u;return m(),p(d,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":n(()=>[l("blockquote",null,[l("p",null,[e("git官网书籍"),a(t,{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("《Pro Git》")]),_:1})])]),l("h2",b,[e("目录 "),a(t,{class:"header-anchor",href:"#目录","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),A,l("h2",C,[e("Git基础 "),a(t,{class:"header-anchor",href:"#git基础","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),l("h3",v,[e("更新与提交 "),a(t,{class:"header-anchor",href:"#更新与提交","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),y,k,l("h3",D,[e("查看提交历史 "),a(t,{class:"header-anchor",href:"#查看提交历史","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$,x,j,G,w,l("h3",H,[e("撤销操作 "),a(t,{class:"header-anchor",href:"#撤销操作","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),S,E,l("h3",N,[e("远程仓库 "),a(t,{class:"header-anchor",href:"#远程仓库","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),V,l("h3",q,[e("标签 "),a(t,{class:"header-anchor",href:"#标签","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),T,z,B,l("h3",P,[e("别名 "),a(t,{class:"header-anchor",href:"#别名","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),J,l("h2",L,[e("Git分支 "),a(t,{class:"header-anchor",href:"#git分支","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),O,l("h3",K,[e("远程分支 "),a(t,{class:"header-anchor",href:"#远程分支","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),M,U,Z,R,l("h3",W,[e("变基 "),a(t,{class:"header-anchor",href:"#变基","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),F,I,l("h2",Q,[e("Git内部原理 "),a(t,{class:"header-anchor",href:"#git内部原理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),X,l("h3",Y,[e("objects目录 "),a(t,{class:"header-anchor",href:"#objects目录","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ll,el,nl,tl,al,sl,l("h4",il,[e("树对象 "),a(t,{class:"header-anchor",href:"#树对象","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ol,cl,l("h4",dl,[e("提交对象 "),a(t,{class:"header-anchor",href:"#提交对象","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ul,l("h4",rl,[e("对象存储 "),a(t,{class:"header-anchor",href:"#对象存储","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),hl,gl,l("h3",pl,[e("引用 "),a(t,{class:"header-anchor",href:"#引用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ml,_l,fl,l("h4",bl,[e("HEAD引用 "),a(t,{class:"header-anchor",href:"#head引用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Al,Cl,l("h4",vl,[e("标签引用 "),a(t,{class:"header-anchor",href:"#标签引用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),yl,kl,Dl,l("h4",$l,[e("远程引用 "),a(t,{class:"header-anchor",href:"#远程引用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),xl,jl,Gl,wl,Hl,Sl,l("blockquote",null,[l("p",null,[e("学习"),a(t,{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("Learn Git Branching")]),_:1}),e("记录")])]),l("h3",El,[e("相对引用 "),a(t,{class:"header-anchor",href:"#相对引用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Nl,l("h3",Vl,[e("扩展 "),a(t,{class:"header-anchor",href:"#扩展","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ql,l("h4",Tl,[e("撤销变更 "),a(t,{class:"header-anchor",href:"#撤销变更","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),zl,Bl]),"main-header":n(()=>[i(s.$slots,"main-header")]),"main-header-after":n(()=>[i(s.$slots,"main-header-after")]),"main-nav":n(()=>[i(s.$slots,"main-nav")]),"main-content":n(()=>[i(s.$slots,"main-content")]),"main-content-after":n(()=>[i(s.$slots,"main-content-after")]),"main-nav-before":n(()=>[i(s.$slots,"main-nav-before")]),"main-nav-after":n(()=>[i(s.$slots,"main-nav-after")]),comment:n(()=>[i(s.$slots,"comment")]),footer:n(()=>[i(s.$slots,"footer")]),aside:n(()=>[i(s.$slots,"aside")]),"aside-custom":n(()=>[i(s.$slots,"aside-custom")]),default:n(()=>[i(s.$slots,"default")]),_:3},8,["frontmatter","data"])}const Il=r(f,[["render",Pl]]);export{Fl as __pageData,Il as default};
