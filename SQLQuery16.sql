/*
insert into [ChatBot_Sanna_TesterDB].[dbo].[Company] (P_iva, Company_name) values (111, 'Company1');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Company] (P_iva, Company_name) values (222, 'Company2');

insert into [ChatBot_Sanna_TesterDB].[dbo].[Agent] (Email, Company) values ('agent1@company1.it', 111);
insert into [ChatBot_Sanna_TesterDB].[dbo].[Agent] (Email, Company) values ('agent2@company2.it', 222);
*/
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-02-15', 10, 'agent1@company1.it');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-03-15', 20, 'agent1@company1.it');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-03-22', 25, 'agent1@company1.it');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-04-15', 33, 'agent1@company1.it');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-05-15', 44, 'agent1@company1.it');
insert into [ChatBot_Sanna_TesterDB].[dbo].[Invoice] (Date_invoice, Value, Agent) values ('2017-06-15', 13, 'agent1@company1.it');
/*
insert into [ChatBot_Sanna_TesterDB].[dbo].[Item] (Item_name, Prize, Resources) values ('item1', 11, 21);
insert into [ChatBot_Sanna_TesterDB].[dbo].[Item] (Item_name, Prize, Resources) values ('item2', 13, 0);
insert into [ChatBot_Sanna_TesterDB].[dbo].[Item] (Item_name, Prize, Resources) values ('item3', 22, 12);
insert into [ChatBot_Sanna_TesterDB].[dbo].[Item] (Item_name, Prize, Resources) values ('item4', 21, 12);
insert into [ChatBot_Sanna_TesterDB].[dbo].[Item] (Item_name, Prize, Resources) values ('item5', 33, 10);
*/