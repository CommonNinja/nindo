import React, { ReactNode } from 'react'

import './settingsSection.scss';

interface ISettingsSectionProps {
    data: object[]
}

export const SettingsSection = (props: ISettingsSectionProps) => {
    const {data} = props
    return (
        <section className="settings-section">
            <h4 className="settings-title">Settings</h4>
            <div className="row-wrapper">
                {data && data.map((row: any) => (
                    <div className="settings-row">
                        <div className="details">
                            <h5 className="title">{row.title}</h5>
                            <p className="text">{row.description}</p>
                        </div>
                        <div className="content">
                            {row.comp()}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
