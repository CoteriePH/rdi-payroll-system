1. Install mo mysql
2. Create ka ng database, yung name dapat rdi_payroll_system
3. CREATE database rdi_payroll_system;
4. Punta ka sa backend na folder tapos type "npm install" walang quotations
5. Create ka ng .env file dito sa backend folder
6. Ilagay mo to sa .env (yung no.7)
7. DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASS=root
   DB_NAME=rdi_payroll_system
   DB_PORT=3306
   PORT=8000
   NODE_ENV=development
8. Wag mo kalimutan iedit yung username,password,host ng mysql mo
9. npm start

**PANO I-TEST YUNG API?**

1. Install ka postman
2. Create ka ng new HTTP request
3. nasa localhost:8000/ yung mga api
4. tignan mo sa routes directory yung mga endpoints