import React, { ReactNode } from 'react'
import { Button } from '../button';

import './card.scss';

interface ICardProps {
    className?: string
    backgroundColor?: string
    title?: string
    titleSize?: number
    textSize?: number
    buttonTextSize?: number
    titleColor?: string
    textColor?: string
    text?: string
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
    const { titleSize, textSize, buttonTextSize, backgroundColor, buttonText, className, titleColor, textColor, text, widthUnit, width, disableTopLine = false, disableButton = false, buttonColor, onClick = () => { }, title, imgUrl, topLineColor } = props

    return (
        <div className={`card-wrapper ${className || ''}`} style={{ maxWidth: `${width || 300}${widthUnit || 'px'}`, backgroundColor: backgroundColor || "#fff" }}>
            {!disableTopLine &&
                <div style={{ backgroundColor: topLineColor || "#629cff" }} className="top-line"></div>
            }
            {imgUrl &&
                <img src={imgUrl} alt="card cover" />
            }
            <div className="content">
                <h4 style={{ color: titleColor || '#636363', fontSize: `${titleSize}px` || '22px' }} className="card-title">{title}</h4>
                <p className="card-text" style={{ color: textColor || '#a7a7a7', fontSize: `${textSize}px` || '14px' }}>{text}</p>
                {!disableButton &&
                    <button onClick={() => onClick()} style={{ backgroundColor: buttonColor || '629cff', fontSize: `${buttonTextSize}px` || '14px' }} className="card-btn">{buttonText || 'Click!'}</button>
                }
            </div>
        </div>
    )
}
