# Official-Site

我们使用 create-react-app 与 landing-antdesign 来编译官网

详细使用请查看 landing 里的 [use in create-react-app](https://landing.ant.design/docs/use/create-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 依赖安装

```bash
pnpn i # 提前安装 npm、pnpm 等基础前端 cli
```

运行的时候可能会遇到 node.js 版本过高导致的安全校验不过，需要使用 nvm 降低版本
```bash
nvm use v16.19.1 # 需要提前安装 nvm
```

在这里，如果你是 windows 系统，可能需要将 `package.json` 中的 `scripts`中的`start`改成如下内容
```json
"start": "SET NODE_OPTIONS=--openssl-legacy-provider && react-app-rewired start",
```

## 运行测试

直接运行

```bash
pnpm run start
```

## 编译

```bash
pnpm build
```

之后会在根目录中编译 pnpm

本项目目前使用 Github Action 执行自动编译发布ci，目前不需要手动编译