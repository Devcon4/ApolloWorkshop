drop database if exists ApolloChat;
create database ApolloChat;

go
use ApolloChat;
go

create schema ApolloChat
go

create table ApolloChat.Users (
    Id          int             not null,
    Username    varchar (255)   not null,

    primary key (Id)
)

create table ApolloChat.Channel (
    Id int not null,
    ChannelName varchar (255) not null,
    CreatedById int references ApolloChat.Users(Id),

    primary key (Id)
)

create table if not exists ApolloChat.[Message] (
    Id int not null,
    MessageBody varchar(4000) not null,
    CreatedDate datetime not null default(getdate()),
    CreatedById int references ApolloChat.Users(Id),
    ChannelId int references ApolloChat.Channel(Id)
)

go