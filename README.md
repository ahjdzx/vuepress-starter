
## 1. 本地搭建
快速开始同 VuePress 官网：

### 1. 创建并进入一个新目录

```
// 文件名自定义
mkdir vuepress-starter && cd vuepress-starter
```

### 2. 使用你喜欢的包管理器进行初始化

```
yarn init # npm init
```

### 3. 将 VuePress 安装为本地依赖

```
yarn add -D vuepress # npm install -D vuepress
```

### 4. 创建你的第一篇文档，VuePress 会以 docs 为文档根目录，所以这个 README.md 相当于主页：

```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

### 5. 在 package.json 中添加一些 scripts

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
### 6. 在本地启动服务器

```
yarn docs:dev # npm run docs:dev
```

VuePress 会在 http://localhost:8080 (opens new window) 启动一个热重载的开发服务器。

> 注:如何此处报错,可能是 node 版本过高导致,需要将如下环境变量添加到启动脚本命令中.

    ```
    NODE_OPTIONS=--openssl-legacy-provider 
    ```
