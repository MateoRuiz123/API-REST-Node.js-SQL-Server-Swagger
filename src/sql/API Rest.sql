create DATABASE DBTest2;

USE DBTest2;
create table TM_CATEGORIAS
(
    CAT_ID int primary key identity(1,1),
    CAT_NOMBRE varchar(150) not null,
    CAT_OBSERVACION varchar(150) not null
);
insert into TM_CATEGORIAS
    (CAT_NOMBRE, CAT_OBSERVACION)
VALUES('Categoria 1', 'Observacion 1'),
    ('Categoria 2', 'Observacion 2'),
    ('Categoria 3', 'Observacion 3');
SELECT *
from TM_CATEGORIAS;
