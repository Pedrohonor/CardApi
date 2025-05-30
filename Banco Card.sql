create database album;
use album;

create table figurinha (
id int auto_increment primary key,
nome_jogador varchar(100) not null,
numero int not null,
posicao varchar(50),
selecao varchar(50),
url_imagem varchar(255)
);


