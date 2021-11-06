## Table of Contents

| Contents                                |          Description           |
| :-------------------------------------- | :----------------------------: |
| [basic-setup](#basic-setup)             |     basic setup ng backend     |
| [api-testing](#api-testing)             |      pano itest yung API       |
| [database-schema](#database-schema)     |        database schema         |
| [how-to-contribute](#how-to-contribute) |          contribution          |
| [models](#models)                       |     pano gumawa ng models      |
| [associations](#associations)           | pano maglagay ng relationships |
| [controllers](#controllers)             |   pano gumawa ng controller    |
| [routes](#routes)                       |     pano gumawa ng routes      |
| [seeders](#seeders)                     |     pano gumawa ng seeders     |

# BASIC SETUP

1. Install mo mysql
2. Create ka ng database, yung name dapat rdi_payroll_system
3. CREATE database rdi_payroll_system;
4. Punta ka sa backend na folder tapos type `npm install`
5. Create ka ng .env file dito sa backend folder (Make sure naka cd backend ka)
6. Ilagay mo to sa .env

```env
   DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASS=root
   DB_NAME=rdi_payroll_system
   DB_PORT=3306
   PORT=8000
   NODE_ENV=development
```

![Screenshot_20211018_214217](https://user-images.githubusercontent.com/37836505/137743492-2a6077bf-7dc4-472a-84d6-202f1e6dadfe.png)

7. Wag mo kalimutan iedit yung username,password,host ng mysql mo (IMPORTANT! kung nagkakaroon ka ng access denied, gawa ka nalang ng new account sa mysql)
8. `npm run dev`
9. `npm run seed:all` (i run mo tong command para magkalaman yung database)

# API TESTING

1. Install ka postman
2. Create ka ng new HTTP request
3. nasa localhost:8000/ yung mga api
4. tignan mo sa routes directory yung mga endpoints

---

# DATABASE SCHEMA

![Database Design (ER DIAGRAM).jpeg](https://images.zenhubusercontent.com/616fad0c18fb23251f970759/159984cf-1d57-4ad1-8bc4-560b3887e217)

---

# HOW TO CONTRIBUTE

1. Gawa ka muna new branch based sa dev branch

```bash
   cd backend
   git checkout dev
   git pull origin dev
   git checkout -b "name-ng-feature-na-ginagawa-mo"
```

3. Gawa ka ng model (e.g. employee.model.js)
4. Gawa ka ng controller (e.g. employee.controller.js)
5. Gawa ka ng route (e.g. employee.route.js)
6. After mo matapos yung working feature na ginagawa mo, gawin mo to para updated sa dev branch yung ginagawa mong branch

```bash
   git add .
   git commit -m "yung-description ng ginawa mo"
   #bago mo i push make sure na updated dev branch mo
   git checkout dev
   git pull origin dev
   git checkout "name-ng-branch-na-pinagtrabahuan-mo-kanina"
   git rebase dev
```

7. Itest mo ulit yung code mo kung gumagana parin, kung may error ifix mo muna bago mo ipush tsaka ayusin mo din yung mga conflict (Kung di mo kaya maayos, pwede ka magtanong sa team)
8. After mo mafix yung error, pwede mo na ipush

```bash
   git add .
   git commit -m "yung-description ng ginawa mo"
   git push -u origin "yung-name-ng-branch-na-pinagtrabahuan-mo"
```

9. After nyan, punta ka sa github tapos submit ka pull request sa dev or sa branch na gusto mo ichange

# MODELS

--Ito yung table sa database

1. Punta ka sa /models
2. Nandito yung documentation sa pag gawa ng model https://sequelize.org/master/manual/model-basics.html
3. Pwede mo naman din icopy paste nalang yung nagawa kong model (ichange mo lang yung name)
4. Example gagawa ka ng employee table, icopy-paste mo yung user.model.js, gawin mong employee.model.js
5. Tapos sa loob ng file, ichange mo yung

```js
const User = sequelize.define(
    "user", // Model name
    {
         return User;
    }
```

to

```js
const Employee = sequelize.define(
    "employee", // Model name
    {
      return Employee
    }
```

(Tip: sa vscode pwede mo idouble click yung user tapos ctrl+shift+l)

6. Ilagay mo nalang sa loob yung fields ng table based dun sa database design
7. After mo makagawa ng model, punta ka sa /models/index.js
8. Iregister mo dyan yung model mo sa baba
9. Example: `js db.employee = require("./employee.model.js")(sequelize, Sequelize, DataTypes);`
10. After mo magcreate ng model mag `npm run db:refresh` ka.

# ASSOCIATIONS

1. Punta ka sa models/index.js
2. Nandito ang docs sa sequelize assoc - https://sequelize.org/master/manual/assocs.html
3. Ilagay mo lang sa baba yung ng models/index.js yung relationships, sa baba ng pagregister sa models.

```js
//OneToMany Relationship (One Company-> Many Employees)
db.employee.belongsTo(db.company, {
  foreignKey: "company_id",
  foreignKeyConstraint: true,
});
db.company.hasMany(db.employee, { as: "employees", foreignKey: "company_id" });
```

4. After niyan, registered na yung relationship nila.
5. Imodify mo nalang yung controller para masama yung relationships sa query
6. Nandito yung docs sa pagquery - https://sequelize.org/master/manual/assocs.html#basics-of-queries-involving-associations
7. Kung nagkaka-error ka sa pag query, try mo idelete muna yung mga table na inedit or nilagyan mo ng relationships. Tapos irestart mo yung server (Okay pa to kasi dev palang naman, pero bawal to sa production haha gagamit tayo ng migration dyan)
8. After mo mag create ng association mag `npm run db:refresh ka`

# CONTROLLERS

-- Controller yung responsible sa pag query sa database

-- Ito yung mga function talaga na gagamitin natin

1. Punta ka sa /controller
2. Nandito yung documentation sa pag query https://sequelize.org/master/manual/model-querying-basics.html
3. Ito pa https://sequelize.org/master/manual/model-querying-finders.html
4. Sundin mo nalang yung examples ko
5. Yung name ng controller dapat same sa name ng model or in line sa gusto mong gawin, e.g. employee.controller.js

# ROUTES

-- Ito yung ilalagay niyo sa postman

-- Ito yung gagamitin ng frontend para maaccess yung api natin

-- Ito yung mga endpoints, yung URL

1. Punta ka sa /routes
2. Copy paste mo lang yung mga sample ko diyan, tas ibahin mo nalang yung name e.g. employee.routes.js
3. Ibahin mo din yung controller na inimport based sa kung anong controller gagamitin mo para sa route na yan
4. Ito documentation sa routing https://expressjs.com/en/guide/routing.html
5. Make sure na ifofollow mo to sa REST API (Mga guidelines/rules lang to pag gumagawa ka ng routes) ![image](https://usercontent.one/wp/www.kennethlange.com/wp-content/uploads/2018/10/task_api.png?media=1631958963)
6. After mo magcreate ng route, iregister mo siya
7. Punta ka lang sa src/index.js tapos iimport mo sa loob ng db.sequelize.sync().then yung route mo
8. E.g. `require("./routes/employee.routes")(app);`

---

# SEEDERS

**OPTIONAL**

-- Yung seeds ay yung mga iniinsert natin kaagad sa database para may laman na siya agad.

-- Magcecreate kalang ng seeds kung kailangan mo may laman kaagad yung database

1. Punta ka sa /seeders
2. Nandito yung documentation sa pag gawa ng seeds https://sequelize.org/master/manual/migrations.html
3. Nasa Creating the first Seed (ctrl+f mo nalang haha)
