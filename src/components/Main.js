require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure'
var _ = require('lodash')


let imgList = require('../sources/imageDatas.json')

_.map(imgList, (item) => {
	return item.url = require(`../images/${item.fileName}`)
})

export default class AppComponent extends React.Component {

  render() {
  	console.log(imgList)
    return (
      
      <section className="stage">
      	<section className="img-sec">
    			{
    				_.map(imgList, (img, key)=>{
    					return <ImgFigure key={key} {...img} />
    				})
    			}
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    )
  }
}
