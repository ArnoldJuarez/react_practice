
//ASI SE LLAMA import { FirstApp} from "./FirstApp";

import React from 'react'
import PropTypes from 'prop-types';



export const FirstApp = ({
  title='No hay Titulo',
  subTitle='No hay subtitulo',
  name='Arnold Juarez'
}) => {

  return (
    //Todo tiene que estar en un fragmento
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p> 
      <p>{subTitle}</p> 
      <p>{name}</p> 
    </>
  );
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle : 'No hay subtitulo',
  name : 'Arnold Juarez'
}

FirstApp.propTypes = {
  title : PropTypes.string.isRequired,
  subTitle : PropTypes.string.isRequired,
}












//{subTitle+1}   asi se hace una suma, pero el props tiene que estar como numero numero={123}








//crear componente con rafc
/*
//aqui se permite mandar string,int,arrays PERO NO OBJETOS {nombre:arnold,apellido:juarez}
//const newMessage = 'Arnold!!!';
const newMessage = {
  message: 'Hola Mundo',
  nombre: 'Arnold',
  apellido: 'Juarez'
};

/*function llamar() { ESTA ES UNA FUNCION NORMAL
  return `Arnold`;
}*/
 

/* clase 39 de udemy, llamar una funcion en html
const llamar = (apellido) => (`Arnold ${apellido}`); //FUNCION FLECHA DE LA DE ARRIBA, SE ALMACENA VARIABLE


const llamar2 = () => `Juarez Jimenez`;


export const FirstApp = () => {

  return (
    //Todo tiene que estar en un fragmento
    <>
      <h1>{llamar('Derian')}</h1>
      <h1>{llamar2()}</h1>
      {<h1>{ JSON.stringify(newMessage) }</h1>} llamar una clase
      <p>Juarez Jimenez</p>
    </>
  );
}

*/


  