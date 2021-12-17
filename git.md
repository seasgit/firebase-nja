
## Git init
```bash
git init
git remote add origin https://github.com/seasgit/firebase-nja.git
git add .
# commit et branch = master par défaut
git commit -m "first commit"
```
## check branch
```bash
git log --oneline
# réponse
     (HEAD -> master) first commit

# check branch
 git branch -a
# * master
```
## change branch name
```bash
git branch -M branch-1
# check branch
 git branch -a
```
## add new branch
```bash
git branch branch-2
git branch -a
# réponse
    * branch-1
      branch-2
```
## switching branch
```bash
git checkout branch-2
git branch -a
# on revient sur branch-1
git branch branch-1
```
## pushing branch
```bash
 git push --set-upstream origin branch-2
```