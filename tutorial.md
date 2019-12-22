# Instalare on windows

Download and follow tutorial
https://www.atlassian.com/git/tutorials/install-git#windows
https://www.atlassian.com/git/tutorials/install-git#windows

# Creare proiect
1. Creare folder concurs sau alta denumire
2. Go in in github.com to
3. Cream repository cu orice nume dorim
4. Deschide powershell
5. Go in to your dir and make git clone https://github.com/dumitriucristian/concurs-coder-dojo.git
6. check with git status
7. go in your folder and create a file type .md
8. deschide-l si scrie ceva in fisier nu uita
9. du-te in consola si verifica cu git status
10. adauga fisierul cu comada git add <denumire fisier>
11. git status verifica daca a preluat fisierul
12. creaza primul commit cu comanda git commit -m "first commit"
13. git push to send to repo
14. check yout repo

# Fork-uire

1. Cauta repoul concurs-coder-dojo
2. Apasa fork
3. created folder on your machine
4. clone forked repo cu comanda: ``` git clone https://github.com/<contul tau de github>/concurs-coder-dojo.git ``` . - nu uita punctul
5. check files git status with ```git status```
6. adauta repo-ul original ```git remote add upstream  https://github.com/dumitriucristian/concurs-coder-dojo.git ```
7. preia modificarile facute de colegi ```git fetch upstream```
8. ```git pull upstream master```

# update your repo with following
1. ```git pull```
2. ```git fetch upstream```
3. ```git pull upstream master```
4. ```git push```

# Add you modification to the repo

1. ```git status```
2. ```git add <file name>```
3. ```git commit -m "Explicatie | Titlu"```
4. ```git push```  
5. De pe GitHub.com > Your repo > create new pull request
