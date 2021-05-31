git常用命令纪要

```
1查看当前分支
  git branch
2创建分支并且切换过去
	git checkout -b 'feature/test'
3 切换分支
  git checkout feature/test
4 查看当前分支修改的文件
  git status
5 提交所有的修改文件到暂存区域
  git add .
6 提交指定的修改文件(test.js)到暂存区域
  git add test.js
7 将暂存文件提交到远程
	git commit -m 'test commit'
8 取消修改的指定文件(test.js) (文件还没有放到缓存区域 还没有执行git add 命令)
  git checkout -- test.js
9 放弃所有的文件修改 (文件还没有放到缓存区域 还没有执行git add 命令)
  git checkout .
10 放弃修改的指定文件(test.js)  (文件已经放到缓存区域)
  git reset Head test.js
11 放弃所有的文件修改 (文件还没有放到缓存区域 还没有执行git add 命令)
  git reset HEAD .
12 将修改的文件暂存起来
  git stash save 'stash save'
13 查看stash存储了哪些
  git stash list
14 在当前分支使用存储的列表
  git stash apply    默认是使用当前列表的第一个
15 在当前分支选择存储列表的某一条
  git stash apply stash@{1}
```



