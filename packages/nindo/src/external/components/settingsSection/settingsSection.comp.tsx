import React, { ReactNode } from 'react'

import './settingsSection.scss';

interface ISettingsSectionProps {
    children: ReactNode
    className?: string
}

export const SettingsSection = (props: ISettingsSectionProps) => {
    const { children, className } = props

    return (
        <div className={`settings-section ${className || ""}`}>
            <div className="settings-row">
                {children}
            </div>
            <div className="bottom-line"></div>
        </div>
    )
}

interface ISettingsDetailsProps {
    title: string
    description: string
    className?: string
}

export const SettingsDetails = ({ title, description, className }: ISettingsDetailsProps) => (
    <div className={`settings-details ${className || ''}`}>
        <h5 className="title">{title}</h5>
        <p className="text">{description}</p>
    </div>
)

interface ISettingsFormProps {
    children: ReactNode
    className?: string
}

export const SettingsForm = ({ children, className }: ISettingsFormProps) => (
    <div className={`settings-form ${className || ''}`}>
        {children}
    </div>
)