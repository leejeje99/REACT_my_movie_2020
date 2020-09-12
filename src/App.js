// import PropTypes from "prop-types";
//중요한 프로토타입
  //펑션예시
// function Potato() {
//   return <h1>I like Potato</h1>
// }

// function Food({name, picture, rating}){
//   // console.log(props)
//   return (
//   <div> 
//   <h1>I like {name}</h1>
//   <h4>{rating}/5.0</h4>
//   <img src={picture} alt={name}/>
//   </div>
//   );
// }
  //데이터목록
// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//       rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.5,
//   }
// ];
  //렌더링함수 
// function renderFood(dish){
//   // console.log(dish) 
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
// }
  //프로토타입
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired, //is required 의 유무 차이 확인 

// }

  //메인함수 
// function App() {
//   return <div>{foodILike.map(renderFood)}</div>;
//       /* {foodILike.map(dish => (
//         <Food name={dish.name} picture={dish.image} />
//       ))} */ 
      // }

  //클래스형 메인 
// class App extends React.Component{
//   // constructor() {
//   //   console.log("hello");
//   // }
//   state = {
//     count: 0
//   };
//   add = () => { 
//     console.log("add")
//     this.setState(current => ({count: current.count + 1}));
//   };
//   minus = () => {
//     console.log("minus")
//     this.setState(current => ({ count: current.count - 1 }));
//    };
//   componentDidMount(){ //1번 
//     console.log("component rendered")
//   }
//   componentDidUpdate(){ //2번 
//     console.log("I just updated")
//   }
//   componentWillUnmount(){ //다른페이지로 갈때 뜸
//     console.log("goodbye!")
//   }
    //렌더링부분 
//   render(){
//     console.log("I'm rendering")
//   return (
//   <div>
//     <h1>The Number is : Im a class {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//   </div>
//   )
//   }

// State 예시
  // state = {
  //   count : 0,
  // };
  // add = () =>{
  //   this.setState({ count : 1});
  // }
  // minus = () => {
  //   this.setState({ count: -1});
  // };
  // render(){
  //   return(
  //     <div>
  //       <h1>The number is : {this.state.count}</h1>
        // <button onClick={this.add}>Add</button>
        // <button onClick={this.minus}>Minus</button>
  //     </div>
  //   )
  // }
// }

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import React from 'react';
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Navigation/>
    <Route path="/" exact={true} component={ Home }/>
    <Route path="/about" component ={About}/>
    <Route path="/movie_detail" component={Detail}/>
  </BrowserRouter>
  )}
 
export default App;