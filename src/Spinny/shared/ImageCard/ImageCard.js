import React from 'react';
import style from './ImageCard.module.scss';

export default class ImageCard extends React.PureComponent{
    render(){
        const {imgurl,title} = this.props;
        return(
            <div className = {style.border}>
                <div className = {style.image}>
                <img src = {imgurl} alt = "img"></img>
                </div>
                <div className = {style.title}>
                    {title}
                </div>
            </div>
        );
    }
}