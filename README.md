# ToDo App Using HTML , CSS & FLASK
ToDo Web App is an web application which is developed using HTML , CSS , Flask and MySQL for Database.In this app we can create our todos and also update and delete it. If you create a ToDO here then you can access your todos anywhere just by logging in to your account on our Website. 

## Pre-requisites
1. A PC/Laptop device where you can write and compile your codes.
2. [Visual Studio Code / VS Code](https://code.visualstudio.com/) - we will use vs code editor for editing our code.
3. [Python](https://python.org) - As Flask is a python framework so we should have python installed on our system.
4. Basic knowledge about HTML , CSS and JavaScript.
5. Basic idea about database or if you don't have prior knowledge about database then also you can go through this code you will learn many things such as "CRUD" operations.

## Usages

1. Create a Folder in which we will start coding our app.
2. Open that folder , Right click on the folder and click on 'Open with Code' option in the menu.
3. Now open terminal on that following folder , and write the given code
```bash
pip install virtualenv
```
4. Now after successfully installing virtualenv in your System , run the command below which will create a env folder inside your working directory.
```bash
virtualenv env
```  
5. Now create two folders in your working directory one named 'static' and other 'templates' the name should be same otherwise further we will get error.

6. Now , Create one python file in the working directory and name it as 'app.py' and just copy the code given , it is the minimal flask app code 
```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World"

app.run(debug=True)
```
7. Now After this you are good to go.
8. Just create your index.html files or other html files in templates folder and all the css , js or assets files should be in static folder as this two folders will only be used in flask app.
9. Further , you can go to my repository and check the code there.

                              All Rights Reserved | KRSAHIL.ME | 2022

