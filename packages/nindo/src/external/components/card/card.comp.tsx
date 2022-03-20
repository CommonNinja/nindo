import React, { ReactNode } from 'react'
import { Button } from '../button';

import './card.scss';

interface ICardProps {
    className?: string
    children?: ReactNode
    backgroundColor?: string
    title?: string
    titleSize?: number
    textSize?: number
    buttonTextSize?: number
    titleColor?: string
    textColor?: string
    imgUrl?: string
    topLineColor?: string
    disableTopLine?: boolean
    disableButton?: boolean
    buttonColor?: string
    buttonText?: string
    onClick?: () => void
    width?: number
    widthUnit?: 'px' | '%' | 'rem'
}

export const Card = (props: ICardProps) => {
    const { titleSize, children, textSize, buttonTextSize, backgroundColor, buttonText, className, titleColor, textColor, widthUnit, width, disableTopLine = false, disableButton = false, buttonColor, onClick = () => { }, title, imgUrl, topLineColor } = props

    return (
        <div className={`card-wrapper ${className || ''}`} style={{ maxWidth: `${width}${widthUnit || 'px'}`, backgroundColor: backgroundColor }}>
            {!disableTopLine &&
                <div style={{ backgroundColor: topLineColor }} className="top-line"></div>
            }
            {imgUrl &&
                <img src={imgUrl} alt="card cover" />
            }
            <div className="content">
                <h4 style={{ color: titleColor, fontSize: `${titleSize}px` }} className="card-title">{title}</h4>
                <div className="card-text" style={{ color: textColor, fontSize: `${textSize}px` }}>
                    {children}
                </div>
                {!disableButton &&
                    <button onClick={() => onClick()} style={{ backgroundColor: buttonColor, fontSize: `${buttonTextSize}px` }} className="card-btn">{buttonText || 'Click!'}</button>
                }
            </div>
        </div>
    )
}
