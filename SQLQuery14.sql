/*
CREATE TABLE [ChatBot_Sanna_TesterDB].[dbo].[Company] (
    Id_Company int IDENTITY(1,1) PRIMARY KEY,
    P_iva int unique NOT NULL,
    Company_name varchar(200) NOT NULL
);

CREATE TABLE [ChatBot_Sanna_TesterDB].[dbo].[Agent] (
    Id_agent int IDENTITY(1,1) PRIMARY KEY,
    Username varchar(200),
    Email varchar(200) UNIQUE NOT NULL,
	Company int not null,
	foreign key(Company) references Company(P_iva)
);
*/
CREATE TABLE [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (
    Id_invoice int IDENTITY(1,1) PRIMARY KEY,
    Date_invoice date NOT NULL,
    Value int NOT NULL,
    Agent varchar(200),
	foreign key(Agent) references Agent(Email)
);
/*
CREATE TABLE [ChatBot_Sanna_TesterDB].[dbo].[Item] (
    Id_item int IDENTITY(1,1) PRIMARY KEY,
    Item_name varchar(200) NOT NULL,
    Item_code int,
    Prize int not null,
	Resources int not null
);
*/