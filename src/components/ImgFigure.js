import React from 'react';

export default class ImgFigure extends React.Component {

  render() {
    let {title, url, desc} = this.props
    console.log(this.props)
    return (
      <figure className="img-figure">
        <img src={url} alt={title}/>
        <figcaption>
          <h2 className="img-title">{desc}</h2>
        </figcaption>
      </figure>
    )
  }
}
