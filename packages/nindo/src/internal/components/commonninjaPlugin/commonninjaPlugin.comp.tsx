import React, { useEffect } from 'react';

interface ICommonNinjaPluginProps {
  pluginId: string 
  type: string
  pluginProps?: string
  muteEvents?: boolean
  onLoad?: () => void
}

declare global {
  interface Window { CommonNinja: any; }
}

export const CommonNinjaPlugin = (props: ICommonNinjaPluginProps) => {
  const { pluginId, type, onLoad, muteEvents, pluginProps } = props;
  const conditionalProps: any = {};

  if (muteEvents) {
    conditionalProps['mute-events'] = true;
  }

  if (pluginProps) {
    conditionalProps['comp-props'] = pluginProps;
  }

  useEffect(() => {
    const existingScript = document.getElementById('commonninja-sdk');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
      script.id = 'commonninja-sdk';
      document.body.appendChild(script);
      script.onload = () => {
        onLoad?.();
      };
    }

    if (existingScript) {
      if (typeof window !== 'undefined' && typeof window.CommonNinja !== 'undefined') {
        window.CommonNinja.init();
      }
      onLoad?.();
    }
  }, []);

  return (
    <div 
      className="commonninja_component" 
      comp-type={type} 
      comp-id={pluginId}
      {...conditionalProps}
    ></div>
  );
};