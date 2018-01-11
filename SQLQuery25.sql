/*
select 'eeee' as User_, Item.* from [ChatBot_Sanna_TesterDB].[dbo].[Item];
*/

insert into [ChatBot_Sanna_TesterDB].[dbo].[Item_lastval] 
select '[% USER %]' AS User_, Item.* from [ChatBot_Sanna_TesterDB].[dbo].[Item] 
where not exists (select * from [ChatBot_Sanna_TesterDB].[dbo].[Item_lastval] where Item_lastval.User_='[% USER %]' and Item_lastval.Id_item=Item.Id_item)


update [ChatBot_Sanna_TesterDB].[dbo].[Item] set Resources = 64 where Id_item=1;

update [ChatBot_Sanna_TesterDB].[dbo].[Item_lastval] set Resources =
(select Resources from [ChatBot_Sanna_TesterDB].[dbo].[Item] where Item_lastval.Id_item=Item.Id_item)
where  Item_lastval.User_='pepe@ddd.it' and Item_lastval.Resources<>(select Item.Resources from [ChatBot_Sanna_TesterDB].[dbo].[Item] where Item.Id_item=Item_lastval.Id_item) 